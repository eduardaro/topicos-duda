import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OptionService } from './option.service';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('options')
@Controller()
export class OptionController {
  constructor(private readonly optionService: OptionService) {}

  @Post('scenarios/:scenarioId/options')
  @ApiOperation({ summary: 'Cria uma opção vinculada a um cenário.'})
  @ApiParam({
    name: 'scenarioId',
    description: 'Identificador do cenário ao qual a opção pertence',
  })
  @ApiBody({ type: CreateOptionDto })
  @ApiCreatedResponse({ description: 'Opção criada com sucesso.'})
  create(
    @Param('scenarioId') scenarioId: string,
    @Body() createOptionDto: CreateOptionDto,
  ) {
    return this.optionService.create(scenarioId, createOptionDto);
  }

  @Get('scenarios/:scenarioId/options')
  @ApiOperation({ summary: 'Lista as opções de um cenário.'})
  @ApiParam({
    name: 'scenarioId',
    description: 'Identificador do cenário ao qual a opção pertence',
  })
  findAll() {
    return this.optionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.optionService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOptionDto: UpdateOptionDto) {
    return this.optionService.update(id, updateOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.optionService.remove(id);
  }
}