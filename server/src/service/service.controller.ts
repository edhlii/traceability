import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { ServiceService } from "./service.service";

@Controller("service")
export class ServiceController {
    constructor(private readonly serviceService: ServiceService) {}

    @Post()
    create(@Body() data: Prisma.ServiceCreateInput) {
        return this.serviceService.create(data);
    }

    @Put(":id")
    update(@Param("id") id: string, @Body() data: Prisma.ServiceUpdateInput) {
        return this.serviceService.update(id, data);
    }

    @Delete(":id")
    delete(@Param("id") id: string) {
        return this.serviceService.delete(id);
    }

    @Get()
    findAll(@Query('userId') userId: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,) {
        return this.serviceService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.serviceService.findOne(id);
    }
}
