import { Controller, Get, Param } from '@nestjs/common';
import { MangaService } from './manga.service';

@Controller('manga')
export class MangaController {
    constructor(private mangaService: MangaService) { }

    @Get(':id')
    find(@Param('id') id: string) {
        return this.mangaService.find(id)
    }
}
