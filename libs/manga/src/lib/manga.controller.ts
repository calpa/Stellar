import { Controller, Get, Query, Logger, Param, Body } from '@nestjs/common';
import { IsArray } from 'class-validator';
import { Transform } from 'class-transformer'
import { MangaDTO } from './manga.dto';
import { MangaService } from './manga.service';

@Controller('manga')
export class MangaController {
    constructor(private mangaService: MangaService) { }

    @Get(':ids')
    async findMany(@Param() params: MangaDTO) {
        return await this.mangaService.findMany(params.ids)
    }
}
