/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { ListScenarioRepository } from "../repository/list-scenario.repository";

@Injectable()
export class ListScenarioUseCase {
    constructor(private readonly listScenarioRepository: ListScenarioRepository) {}
  
    async execute() {
        const scenarios = await this.listScenarioRepository.list();
        return scenarios;
    }
}