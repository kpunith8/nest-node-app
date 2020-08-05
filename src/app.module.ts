import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CatsModule} from './cats/cats.module';
import {LoggerMiddleware} from './middleware/logger.middleware'

@Module({
  imports: [CatsModule], // Each modules are scoped to specific routes
  controllers: [AppController], // All the controllers can be added here as well
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('cats'); // .forRoutes({ path: 'cats', method: RequestMethod.GET });
      // .forRoutes(CatsController, CatsProviderController);
  }
}
