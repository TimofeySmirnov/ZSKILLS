import { PrismaService } from '@/src/core/prisma/prisma.service';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '../../jwt/jwt.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtUtils: JwtService,
  ) {}
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return false;
    try {
      const payload = this.jwtUtils.verifyToken(token);
      req.user = payload;
      return true;
    } catch {
      return false;
    }
  }
}
