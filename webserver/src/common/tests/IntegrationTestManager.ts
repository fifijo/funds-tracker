import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as cookieParser from 'cookie-parser';
import { PrismaService } from 'prisma/prisma.service';
import { testUser } from 'common/tests/stubs/testUser.stub';
import { AuthService } from 'auth/auth.service';
import { AppModule } from 'app.module';

export class IntegrationTestManager {
  public httpServer: any;

  private app: INestApplication;

  private accessToken: string;

  private refreshToken: string;

  private prismaService: PrismaService;

  private authService: AuthService;

  async beforeAll(): Promise<void> {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    this.app = moduleRef.createNestApplication();
    this.app.use(cookieParser());

    await this.app.init();
    this.httpServer = this.app.getHttpServer();

    this.prismaService = moduleRef.get<PrismaService>(PrismaService);
    this.authService = moduleRef.get<AuthService>(AuthService);

    const { uuid: userUuid } = await this.prismaService.user.findUnique({
      where: {
        email: testUser.email,
      },
    });

    const { accessToken, refreshToken } = await this.authService.signinLocalForTests(
      userUuid,
      '::ffff:127.0.0.1-main-user-session',
    );
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  async afterAll(): Promise<void> {
    await this.app.close();
  }

  getPrismaService(): PrismaService {
    return this.prismaService;
  }

  getAuthService(): AuthService {
    return this.authService;
  }

  getAccessToken(): string {
    return this.accessToken;
  }

  getRefreshToken(): string {
    return this.refreshToken;
  }
}
