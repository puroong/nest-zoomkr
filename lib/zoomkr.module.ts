import { DynamicModule, Module } from '@nestjs/common';
import { Zoom } from 'zoomkr';
import { ZOOMKR_MODULE } from './zoomkr.constants';

@Module({})
export class ZoomkrModule {
  static forRoot(): DynamicModule {
    const zoomkrProvider = {
      provide: ZOOMKR_MODULE,
      useValue: Zoom,
    };

    return {
      module: ZoomkrModule,
      providers: [zoomkrProvider],
      exports: [zoomkrProvider],
    };
  }
}
