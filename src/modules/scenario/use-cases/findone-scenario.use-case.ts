/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { FindOneScenarioRepository } from '../repository/findone-scenario.repository';

@Injectable()
export class FindOneScenarioUseCase {
    constructor(
        private readonly findoneScenarioRepository: FindOneScenarioRepository,
        private readonly logger: Logger,
    ) {}

    async findone(id:string) {
        try {
            const scenario = await this.findoneScenarioRepository.findone(id);
            this.logger.log("Scenario found successfully");
            return scenario;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}