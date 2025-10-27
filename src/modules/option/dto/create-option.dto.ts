/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateOptionDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'O corpo é como um jardim, e a mente é seu jardineiro. Cabe a nós decidir, se inserir orquídeas ou alface.',
        example: 'Orquídea'
    })
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'A minha flor preferida?São as tulipas.O significado que elas carregam, É simples, mas interessante.',
        example: 'O corpo é como um jardim, e a mente é seu jardineiro. Cabe a nós decidir, se inserir orquídeas ou alface.'
    })
    description: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'ID do scenario',
        example: '0d8d9a32-faf7-4e29-98fd-8590fab5407b'
    })
    scenarioId: string;
    // Scores: Score[]
}
