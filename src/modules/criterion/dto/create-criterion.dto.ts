/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
export class CreateCriterionDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The name of the criterion',
        example: 'Cost'
    })
        
    name: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The name of the criterion',
        example: 'Cost'
    })
    weight: number;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The name of the criterion',
        example: 'Cost'
    })
    active: boolean;

    @IsDate()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The name of the criterion',
        example: 'Cost'
    })
    createdAt: Date;
    // Scores: Score[];
}
