import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name)

  getData(): { message: string } {
    this.logger.log('default route')

    return { message: 'Nyahello!' };
  }
}
