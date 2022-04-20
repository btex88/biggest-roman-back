import app from './helpers/server';
import request from 'supertest';

describe('POST /search - Test invalid input requests', () => {
  it('check post response for an empty input', async () => {
    const result = await request(app).post('/search').send({ text: '' });
    expect(result.body.message).toBe(
      'Input has no letters that matches any roman number',
    );
    expect(result.statusCode).toBe(400);
  });

  it('check post response for a null input', async () => {
    const result = await request(app).post('/search').send({});
    expect(result.body.message).toBe(
      'Input has no letters that matches any roman number',
    );
    expect(result.statusCode).toBe(400);
  });

  it('check post response for a invalid input', async () => {
    const text = 'qwertyuopasfghjkçzbn';
    const result = await request(app).post('/search').send({ text });
    expect(result.body.message).toBe(
      'Input has no letters that matches any roman number',
    );
    expect(result.statusCode).toBe(400);
  });
});

// describe('POTS /search - Test valid input requests', () => {
//   it('check post response for a valid input', async () => {
//     const text = 'qwertyuopasfghjkçzbn';
//     const result = await request(app).post('/search').send({ text });
//     expect(result.body.message).toBe(
//       'Input has no letters that matches any roman number',
//     );
//     expect(result.statusCode).toBe(400);
//   });
// });
