/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
export class CreateCriterionDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'No osso da fala dos loucos há lírios.',
        example: 'Lírios'
    })
        
    name: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: 'peso numérico',
        example: '2.3'
    })
    weight: number;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({
        description: 'true ou false',
        example: 'true'
    })
    active: boolean;

    @IsDate()
    @IsNotEmpty()
    @ApiProperty({
        description: 'data',
        example: '27/10/2025'
    })
    createdAt: Date;
    // Scores: Score[];
}
