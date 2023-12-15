import { ApiProperty } from "@nestjs/swagger";

export class Notify {

    @ApiProperty()
    user: string;

    @ApiProperty()
    sid: number;

    @ApiProperty()
    game: string;

    @ApiProperty()
    url: string;

    @ApiProperty()
    opponent: string;

    @ApiProperty()
    created: Date;
}