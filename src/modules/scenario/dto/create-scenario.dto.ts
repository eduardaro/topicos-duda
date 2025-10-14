/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateScenarioDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The name of the criterion',
        example: 'Cost'
    })
    title: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The name of the criterion',
        example: 'Cost'
    })
    description: string;
    // options: Option[]
}
