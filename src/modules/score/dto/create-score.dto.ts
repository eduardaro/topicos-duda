/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateScoreDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'ID do option',
        example: '93bd9a32-faf7-4e29-98fd-8590fab4324b'
    })
    optionId: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'ID do criterion',
        example: '0d8d9a32-faf7-4e29-98fd-8590fab4324b'
    })
    criterionId: string;
}