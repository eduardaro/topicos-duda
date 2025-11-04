/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CriterionService } from './criterion.service';
import { CreateCriterionDto } from './dto/create-criterion.dto';
import { UpdateCriterionDto } from './dto/update-criterion.dto';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Criterions')
@Controller()
export class CriterionController {
  constructor(private readonly criterionService: CriterionService) {}

  @Post('scenario/:scenarioId/criterions')
  @ApiOperation({ summary: 'Cria uma opção vinculada a um cenário.'})
  @ApiParam({
    name: 'scenarioId',
    description: 'identificador do cenário ao qual a opção pertence.'
  })
  @ApiBody({ type: CreateCriterionDto })
  @ApiCreatedResponse({ description: 'Opção criada com sucesso.' })
  create(
    @Param('scenarioId') scenarioId: string,
    @Body() CreateCriterionDto: CreateCriterionDto,
  ) {
    return this.criterionService.create(scenarioId, CreateCriterionDto);
  }

  @Get('scenario/:sceanrioId/criterions')
  @ApiOperation({ summary: 'Lista as opções de um cenário.'})
  @ApiParam({
    name: 'scenarioId',
  })
  findAll() {
    return this.criterionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.criterionService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCriterionDto: UpdateCriterionDto) {
    return this.criterionService.update(id, updateCriterionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.criterionService.remove(id);
  }
}