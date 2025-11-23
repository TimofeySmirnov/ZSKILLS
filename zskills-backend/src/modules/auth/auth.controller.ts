import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { RegistrationDTO } from './dto/registration.dto';
import { LoginDTO } from './dto/login.dto';
import { AuthGuard } from './guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('registration')
  async registration(@Body() data: RegistrationDTO) {
    return this.authService.registration(data)
  }

  @Post('login')
  async login(@Body() data: LoginDTO) {
    return this.authService.login(data)
  }

  @UseGuards(AuthGuard)
  @Post('logout')
  async logout() {
    return {status: true}
  }

  @UseGuards(AuthGuard)
  @Post('refresh')
  async refreshUser(@Req() req) {
    return await this.authService.refresh(req.user.id)
  }
}
