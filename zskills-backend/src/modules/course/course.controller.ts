import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { AuthGuard } from '../auth/guards/auth.guard';
import { CousreDto } from './dto/course.dto';
import { CheckExistCourse } from './guards/checkExistCourse.guard';
import { CheckCourseOwner } from './guards/checkCourseOwner.guard';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @UseGuards(AuthGuard)
  @Get('all')
  async getAllCourses(@Req() req, @Query('name') name?: string) {
    return await this.courseService.getAllCourses(req.user.id, name);
  }

  @UseGuards(AuthGuard)
  @Get('/:id')
  async getCourseById(@Req() req, @Param('id') id: string) {
    return await this.courseService.getCourseById(req.user.id, id);
  }

  @UseGuards(AuthGuard)
  @Post()
  async createCourse(@Req() req, @Body() data: CousreDto) {
    return await this.courseService.createCourse(req.user.id, data);
  }

  @UseGuards(AuthGuard, CheckExistCourse, CheckCourseOwner)
  @Put(':id')
  async updateCourse(@Param('id') id: string, @Body() data: CousreDto) {
    return await this.courseService.updateCourse(id, data);
  }

  @UseGuards(AuthGuard, CheckExistCourse, CheckCourseOwner)
  @Delete(':id')
  async deleteCourse(@Param('id') id: string) {
    return await this.courseService.deleteCourse(id);
  }
}
