import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { LibrarysModule } from './library/librarys.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccumulationTermModule } from './accumulationTerm/accumulationTerm.module';
import { CopperConcentrationModule } from './copperConcentration/copperConcentration.module';
import { FlowModule } from './flow/flow.module';
import { PiezometerAcidModule } from './piezometerAcid/piezometerAcid.module';
import { PiezometerTempModule } from './piezometerTemp/piezometerTemp.module';
import { PlsModule } from './pls/pls.module';
import { WellWaterLevelModule } from './wellWaterLevel/wellWaterLevel.module';
import { GcpModule } from './gcp/gcp.module';

@Module({
  imports: [
    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const isProduction = configService.get('NODE_ENV') === 'production';

        return {
          pinoHttp: {
            transport: isProduction
              ? undefined
              : {
                  target: 'pino-pretty',
                  options: {
                    singleLine: true,
                  },
                },
            level: isProduction ? 'info' : 'debug',
          },
        };
      },
      inject: [ConfigService],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../', 'public'),
    }),
    //ConfigModule.forRoot(),
    UsersModule,
    AuthModule,
    ProductsModule,
    LibrarysModule,
    AccumulationTermModule,
    CopperConcentrationModule,
    FlowModule,
    GcpModule,
    PiezometerAcidModule,
    PiezometerTempModule,
    PlsModule,
    WellWaterLevelModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
