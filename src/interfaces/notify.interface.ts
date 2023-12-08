import { ApiProperty } from "@nestjs/swagger";

export class Notify {

    @ApiProperty()
    user_id: number;

    @ApiProperty()
    sid: number;

    @ApiProperty()
    game: string;

    @ApiProperty()
    opponent: string;

    @ApiProperty()
    created: Date;
}