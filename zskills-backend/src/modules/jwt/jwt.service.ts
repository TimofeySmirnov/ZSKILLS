import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { sign, verify } from 'jsonwebtoken';

@Injectable()
export class JwtService {
  constructor(private readonly config: ConfigService) {}
  signToken(id: string) {
    return sign({ id }, this.config.getOrThrow<string>('TOKEN_SECRET'), {
      expiresIn: '30d',
    });
  }

  verifyToken(token: string) {
    return verify(token, this.config.getOrThrow<string>('TOKEN_SECRET'));
  }
}
