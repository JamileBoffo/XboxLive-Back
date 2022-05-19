import { Body, Controller, Get, Post } from '@nestjs/common';
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { Store } from './entities/store.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Store')
@Controller('store')
export class StoreController {
  constructor(private storeService: StoreService) {}

  @Get()
  findAll():Store[]{
    return this.storeService.findAll();
  }

  @Post()
  create(@Body() createStoreDto: CreateStoreDto):Store {
    return this.storeService.create(createStoreDto);
  }
}
