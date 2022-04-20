import app from './index.test';
import request from 'supertest';

describe('Test post route "/search"', () => {
  it('check if invalid input gets an error message', async () => {
    const result = await request(app).post('/search').send({ text: '' });
    expect(result.body.message)
      .toBe('Input has no letters that matches any roman number');
    expect(result.statusCode).toBe(400);
  });
});
