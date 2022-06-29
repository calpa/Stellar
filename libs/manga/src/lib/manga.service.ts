import { Injectable, Logger } from '@nestjs/common';
import { manhuagui } from '@stellar/manhuagui';

@Injectable()
export class MangaService {
    private readonly logger = new Logger(MangaService.name);
    async find(id: string) {
        const info = await manhuagui(id)

        return info
    }

    async findMany(ids: string[]) {
        return Promise.all(ids.map(async id => this.find(id)))
    }
}
