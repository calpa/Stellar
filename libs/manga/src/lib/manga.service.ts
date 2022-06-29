import { Injectable } from '@nestjs/common';

@Injectable()
export class MangaService {
    find(id: string) {
        return { message: `${id}` }
    }
}
