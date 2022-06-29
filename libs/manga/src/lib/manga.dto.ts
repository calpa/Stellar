import { IsArray, IsString } from "class-validator";
import { Type, Transform } from 'class-transformer'

export class MangaDTO {
    @IsArray()
    @IsString({ each: true })
    @Type(() => String)
    @Transform(({ value }) => value.split(','))
    ids: string[];
}