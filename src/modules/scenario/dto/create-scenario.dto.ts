/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateScenarioDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'No silêncio dos meus gritos Canto a minha dor. Parece ser um pesadelo. Mas é apenas a solidão',
        example: 'Camélia'
    })
    title: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'A Begônia é bonita,mas ela aflita pensa: Não sou tão bela quanto a Rosa, só ela é maravilhosa.',
        example: 'No silêncio dos meus gritos Canto a minha dor. Parece ser um pesadelo. Mas é apenas a solidão'
    })
    description: string;
    // options: Option[]
}
