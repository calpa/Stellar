import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatService } from './cat.service';
import { Cat } from './cat.interface';

@Controller('cat')
export class CatController {
    constructor(private catService: CatService) { }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        return this.catService.create(createCatDto)
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catService.findAll()
    }
}
