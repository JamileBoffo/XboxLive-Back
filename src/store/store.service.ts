import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { Store } from './entities/store.entity';

@Injectable()
export class StoreService {

  stores: Store[] = [];

  findAll(): Store[]{
    return this.stores
  }

  create(createStoreDto: CreateStoreDto):Store {
    const store: Store = {id: 'id_aleatorio', ...createStoreDto};
    this.stores.push(store);
    return store;
  }
}
