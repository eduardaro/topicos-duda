/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../../shared/databases/prisma.database";

@Injectable()
export class ListAllOptionRepository {
    constructor(private readonly prisma: PrismaService) { }

    async list(){
        const option = await this.prisma.option.findMany();
        if (!option) {throw new NotFoundException("option not found");}
        return option;
    }
}