import { Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/multiply')
  getMultiplication(@Query('num1') number1, @Query('num2') number2){
    var total = number1 * number2;
    return{'total' : total}
  }

  @Post('/sub')
  getSubtraction(@Query('num1') number1, @Query('num2') number2){
    var total = number1 - number2;
    return{'total' : total}
  }
}
