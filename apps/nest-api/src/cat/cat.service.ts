import { Injectable } from '@nestjs/common';
import { Cat } from './cat.interface';

@Injectable()
export class CatService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat)
        return this.cats.length
    }

    findAll(): Cat[] {
        return this.cats
    }
}
