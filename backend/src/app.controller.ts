import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Rota de "saúde" — útil para confirmar que a API está no ar.
  @Get('health')
  getHealth() {
    return this.appService.getHealth();
  }
}
