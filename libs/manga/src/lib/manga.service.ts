import { Injectable } from '@nestjs/common';
import { manhuagui } from '@stellar/manhuagui';

@Injectable()
export class MangaService {
    async find(id: string) {
        const info = await manhuagui(id)

        return info
    }

    async findMany(ids: string[] | string) {
        if (typeof ids === 'string') {
            return [await this.find(ids)]
        }

        const results = []

        for (const id of ids) {
            const res = await this.find(id)
            results.push(res)
        }

        return results
    }
}
