/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateScoreDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The name of the criterion',
        example: 'Cost'
    })
    optionId: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The name of the criterion',
        example: 'Cost'
    })
    criterionId: string;
}