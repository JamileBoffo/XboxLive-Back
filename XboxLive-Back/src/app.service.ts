import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(): string {
    return 'Server ins running! 🚀\n Please check http://localhost:333/api for Swagger docs...';
  }
}
