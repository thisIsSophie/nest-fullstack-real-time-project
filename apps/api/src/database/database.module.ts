// import { Module } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { MikroOrmModule } from '@mikro-orm/nestjs';
// import { PostgreSqlDriver } from '@mikro-orm/postgresql';

// @Module({
//   imports: [
//     MikroOrmModule.forRootAsync({
//       imports: [ConfigModule],
//       inject: [ConfigService],
//       useFactory: (configService: ConfigService) => ({
//         driver: PostgreSqlDriver,
//         dbName: configService.get('POSTGRES_DB'),
//         user: configService.get('POSTGRES_USER'),
//         password: configService.get('POSTGRES_PASSWORD'),
//         host: configService.get('POSTGRES_HOST'),
//         port: configService.get('POSTGRES_PORT'),
//         autoLoadEntities: true,
//       }),
//     }),
//   ],
// })
// export class DatabaseModule {}
