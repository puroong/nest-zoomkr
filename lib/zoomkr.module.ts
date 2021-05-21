import { DynamicModule, Module } from '@nestjs/common';
import { Zoom } from 'zoomkr';

export const ZOOMKR_MODULE = 'ZOOMKR_MODULE';

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
