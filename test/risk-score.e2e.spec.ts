import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';

describe('RiskScore (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('unknown wallet hashes return a score of 0', () => {
    return request(app.getHttpServer())
      .get('/risk-score/wallet/helloworld')
      .expect(200)
      .expect('0');
  });

  it('triggers the maximum score for a 100% mixer contribution', () => {
    return request(app.getHttpServer())
      .get('/risk-score/wallet/0xd8e749e457fcd1918c9a589bfaa87db9f8e154d6')
      .expect(200)
      .expect('10');
  });

  it('does not trigger a rule when contributions are below every min_contribution_threshold', () => {
    return request(app.getHttpServer())
      .get('/risk-score/wallet/0xeaa386b95dd9be76db27f6baef7550f067df5645')
      .expect(200)
      .expect('0');
  });

  it('scores 9.8 for a contribution between the min and max thresholds', () => {
    return request(app.getHttpServer())
      .get('/risk-score/wallet/0x9449f92f36230f171b8d71810a62b1e76b70e2f5')
      .expect(200)
      .expect('9.8');
  });

  it('matches a rule by entity name', () => {
    return request(app.getHttpServer())
      .get('/risk-score/wallet/1JuEjh9znXwqsy5RrnKqgzqY4Ldg7rnj5n')
      .expect(200)
      .expect('7');
  });

  it('triggers multiple risk rules while keeping the score between 0 and 10', async () => {
    const response = await request(app.getHttpServer())
      .get('/risk-score/wallet/bc1qr5f8fz8l2v6q06ng7sgk9g46hma620nt0d7vkr')
      .expect(200);

    const score = Number(response.text);
    expect(score).toBeGreaterThanOrEqual(0);
    expect(score).toBeLessThanOrEqual(10);
  });
});
