/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateOptionDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The name of the criterion',
        example: 'Cost'
    })
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The name of the criterion',
        example: 'Cost'
    })
    description: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The name of the criterion',
        example: 'Cost'
    })
    scenarioId: string;
    // Scores: Score[]
}
