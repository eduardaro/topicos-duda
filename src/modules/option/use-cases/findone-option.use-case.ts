/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { FindOneOptionRepository } from '../repository/findone-option.repository';

@Injectable()
export class FindOneOptionUseCase {
    constructor(
        private readonly findoneOptionRepository: FindOneOptionRepository,
        private readonly logger: Logger,
    ) {}

    async findone(id:string) {
        try {
            const option = await this.findoneOptionRepository.findone(id);
            this.logger.log("Option found successfully");
            return option;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}