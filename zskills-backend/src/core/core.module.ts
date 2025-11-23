import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '../modules/jwt/jwt.module';
import { AuthModule } from '../modules/auth/auth.module';
import { TariffModule } from '../modules/tariff/tariff.module';
import { SubscriptionModule } from '../modules/subscription/subscription.module';
import { CourseModule } from '../modules/course/course.module';
import { UnitModule } from '../modules/unit/unit.module';
import { LessonModule } from '../modules/lesson/lesson.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: false,
      isGlobal: true,
    }),
    PrismaModule,
    JwtModule,
    AuthModule,
    TariffModule,
    SubscriptionModule,
    CourseModule,
    UnitModule,
    LessonModule
  ],
  providers: [],
})
export class CoreModule {}
