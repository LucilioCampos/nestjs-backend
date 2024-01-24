import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';

describe('AppController', () => {
  let appController: AppController;

  const mockPrisma = {
    member: { findMany: () => Promise.resolve([]) },
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockPrisma)
      .compile();

    appController = app.get<AppController>(AppController);
  });
  describe('root', () => {
    it('should return "Empty members"', async () => {
      return appController
        .createMember({ email: 'lucilio', function: 'teste', name: 'lucci' })
        .then((data) => {
          console.log({ data });
          expect(data).toMatchObject([
            { email: 'lucilio', function: 'teste', name: 'lucci' },
          ]);
        });
    });
  });
});
