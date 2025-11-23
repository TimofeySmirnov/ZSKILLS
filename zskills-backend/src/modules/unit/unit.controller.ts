import { Body, Controller, Delete, Param, Post, UseGuards } from '@nestjs/common';
import { UnitService } from './unit.service';
import { UnitDto } from './dto/unit.dto';
import { AuthGuard } from '../auth/guards/auth.guard';
import { CheckExistCourse } from '../course/guards/checkExistCourse.guard';
import { CheckCourseOwner } from '../course/guards/checkCourseOwner.guard';
import { CheckExistUnit } from './guards/checkExistUnit.guard';
import { checkOwnerUnit } from './guards/checkOwnerUnit.guard';

@Controller('unit')
export class UnitController {
  constructor(private readonly unitService: UnitService) {}

  @UseGuards(AuthGuard, CheckExistCourse, CheckCourseOwner)
  @Post(':id')
  async createUnit(@Param('id') id: string, @Body() data: UnitDto) {
      return await this.unitService.createUnit(id, data)
  }


  @UseGuards(AuthGuard, CheckExistUnit, checkOwnerUnit)
  @Delete(':id')
  async deleteUnit(@Param('id') id: string) {
    return await this.unitService.deleteUnit(id)
  }
}
