import { Injectable } from '@nestjs/common';
import { CreateGendersDto } from './dto/create-genders.dto';
import { Gender } from './entities/genders.entity';

@Injectable()
export class GendersService {

    genders: Gender [] = [];

    findAll(): Gender[] {
        return this.genders
    }

    create(createGendersDto: CreateGendersDto):Gender {
        const gender: Gender = {id: 1, ...createGendersDto}
        this.genders.push(gender);
        return gender;
    }
}
