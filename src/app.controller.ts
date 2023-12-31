import { Controller, UseGuards, Request, Post, Get, Param, Res, Body, HttpStatus } from '@nestjs/common';
import { ApiSecurity, ApiBody, ApiCreatedResponse, ApiUnauthorizedResponse, ApiOkResponse, ApiNotFoundResponse, ApiInternalServerErrorResponse, ApiBadRequestResponse } from '@nestjs/swagger';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { User } from './interfaces/user.interface';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { TokenGuard } from './auth/token.guard';
import { Token } from './interfaces/token.interface';

@ApiSecurity('basic')
@Controller()
export class AppController {

  constructor(
    private readonly authService: AuthService
  ) {}

  @Get('api/auth/guest')
  @ApiCreatedResponse({ description: 'Successfully.'})
  async guest(@Request() req) {
    return await this.authService.guest();
  }

  @Get('api/auth/ticket/:t')
  @ApiCreatedResponse({ description: 'Successfully.'})
  @ApiBadRequestResponse({ description: 'Unauthorized.'})
  async useTicket(@Request() req, @Res() res, @Param('t') t) {
    const device = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const r = await this.authService.useTicket(t, device);
    if (r === null) {
      return res.status(HttpStatus.BAD_REQUEST).json();
    } else {
      return res.status(HttpStatus.OK).json(r);
    }
  }

  @Post('api/auth/ticket')
  @ApiBody({ type: User })
  @ApiCreatedResponse({ description: 'Successfully.'})
  @ApiBadRequestResponse({ description: 'Unauthorized.'})
  async createTicket(@Res() res, @Body() x: User) {
    const r = await this.authService.createTicket(x);
    if (r === null) {
        return res.status(HttpStatus.BAD_REQUEST).json();
    } else {
        return res.status(HttpStatus.OK).json(r);
    }
  }

  @Post('api/auth/user')
  @ApiBody({ type: User })
  @ApiCreatedResponse({ description: 'Successfully.'})
  @ApiBadRequestResponse({ description: 'Unauthorized.'})
  async createUser(@Res() res, @Body() x: User) {
    const device:string = x.device;
    const r = await this.authService.createUser(x, device);
    if (r === null) {
        return res.status(HttpStatus.BAD_REQUEST).json();
    } else {
        return res.status(HttpStatus.OK).json(r);
    }
  }

  @UseGuards(LocalAuthGuard)
  @Post('api/auth/login')
  @ApiBody({ type: User })
  @ApiCreatedResponse({ description: 'Successfully.'})
  @ApiUnauthorizedResponse({ description: 'Unauthorized.'})
  async login(@Request() req, @Body() x: User) {
    let device:string = x.device;
    if (!device) {
        device = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    }
    const r = await this.authService.login(req.user, device);
    return r;
  }

  @UseGuards(JwtAuthGuard, TokenGuard)
  @Get('api/auth/refresh')
  @ApiCreatedResponse({ description: 'Successfully.'})
  @ApiUnauthorizedResponse({ description: 'Unauthorized.'})
  async refresh(@Request() req, @Body() x: User) {
    let device:string = x.device;
    if (!device) {
        device = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    }
    const r = await this.authService.login(req.user, device);
    return r;
  }

  @Post('api/auth/recovery')
  @ApiBody({ type: Token })
  @ApiOkResponse({ description: 'Successfully.'})
  @ApiNotFoundResponse({ description: 'Not Found.'})
  @ApiInternalServerErrorResponse({ description: 'Internal Server error.'})
  async updateCurrent(@Res() res, @Body() x: Token): Promise<Token> {
      try {
          const r = await this.authService.recoveryPass(x);
          if (!r) {
              return res.status(HttpStatus.NOT_FOUND).json();
          } else {
              return res.status(HttpStatus.OK).json(r);
          }
      } catch (e) {
          return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: e.message.error.toString(), stack: e.stack});
      }
  }


  @Get('api/auth/anonymous')
  @ApiCreatedResponse({ description: 'Successfully.'})
  @ApiUnauthorizedResponse({ description: 'Unauthorized.'})
  async anonymous(@Request() req) {
    const device: string = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const r = await this.authService.anonymous(device);
    return r;
  }

  @Get('api/auth/anonymous/:name')
  @ApiCreatedResponse({ description: 'Successfully.'})
  @ApiUnauthorizedResponse({ description: 'Unauthorized.'})
  async named(@Param('name') name) {
    const r = await this.authService.anonymous(name);
    return r;
  }
}
