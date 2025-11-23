import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { LessonService } from './lesson.service';
import { AuthGuard } from '../auth/guards/auth.guard';
import { CreateLessonDto } from './dto/CreateLesson.dto';
import { CreateQuestionDto } from './dto/CreateQuestion.dto';
import { type ChangeLessonTestType } from './lesson.types';
import { CreateWebinarDto } from './dto/CreateWebinar.dto';

@Controller('lesson')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @UseGuards(AuthGuard)
  @Post(':id')
  async createLesson(@Param('id') id: string, @Body() data: CreateLessonDto) {
    return await this.lessonService.createLesson(id, data);
  }

  @UseGuards(AuthGuard)
  @Post('change-test/:id')
  async addQuestions(
    @Param('id') id: string,
    @Body() data: ChangeLessonTestType,
  ) {
    return await this.lessonService.changeLessonTest(id, data);
  }

  @UseGuards(AuthGuard)
  @Post('add-test/:id')
  async addQuestion(@Param('id') id: string, @Body() data: CreateQuestionDto) {
    return await this.lessonService.addQuestion(id, data);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  async updateLesson(@Param('id') id: string, @Body() data: CreateLessonDto) {
    return await this.lessonService.updateLesson(id, data);
  }

  @UseGuards(AuthGuard)
  @Put('question/:id')
  async updateQuestion(
    @Param('id') id: string,
    @Body() data: CreateQuestionDto,
  ) {
    return await this.lessonService.updateQuestion(id, data);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteLesson(@Param('id') id: string) {
    return await this.lessonService.deleteLesson(id);
  }

  @UseGuards(AuthGuard)
  @Delete('question/:id')
  async deleteQuestion(@Param('id') id: string) {
    return await this.lessonService.deleteQuestion(id);
  }

  @UseGuards(AuthGuard)
  @Get('webinar/:id')
  async getWebinarInfo(@Param('id') id: string) {
    return await this.lessonService.getWebinarInfo(id);
  }

  @UseGuards(AuthGuard)
  @Post('webinar/:id')
  async addWebinarInfo(
    @Param('id') id: string,
    @Body() data: CreateWebinarDto,
  ) {
    return await this.lessonService.addWebinarInfo(id, data);
  }

  @UseGuards(AuthGuard)
  @Put('webinar/:id')
  async updateWebinarInfo(
    @Param('id') id: string,
    @Body() data: CreateWebinarDto,
  ) {
    return await this.lessonService.updateWebinarInfo(id, data);
  }

  @UseGuards(AuthGuard)
  @Delete('webinar/:id')
  async deleteWebinarInfo(@Param('id') id: string) {
    return await this.lessonService.deleteWebinarInfo(id);
  }

  @UseGuards(AuthGuard)
  @Patch('lection/:id')
  async changeLessonContent(@Param('id') id: string, @Body('content') content: any) {
    return await this.lessonService.changeLessonContent(id, content)
  } 
}
