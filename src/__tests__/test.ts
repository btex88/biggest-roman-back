import app from './helpers/server';
import request from 'supertest';
import { validateInput, handleRomans, handleValues, handleResult } from '../helpers';

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

    expect(result.statusCode).toBe(400);
    expect(result.body.message).toBe(
      'Input has no letters that matches any roman number',
    );
  });
});

describe('POTS /search - Test valid input requests', () => {
  it('check post response for a valid input', async () => {
    const text = 'viiiahglsgnvohwyieqhcnxopsidfgfuijoajdc';
    const result = await request(app).post('/search').send({ text });

    expect(result.statusCode).toBe(200);
    expect(result.body.number).toBe('DC');
    expect(result.body.value).toBe(600);
  });

  it('check post response for another valid input', async () => {
    const text = 'DCCXXXIIIasdasdXXXcl';
    const result = await request(app).post('/search').send({ text });

    expect(result.statusCode).toBe(200);
    expect(result.body.number).toBe('DCCXXXIII');
    expect(result.body.value).toBe(733);
  });
});

describe('Test validateInput helper function', () => {
  it('check if "validateInput" returns false with empty input', () => {
    const result = validateInput('');
    expect(result).toBeFalsy();
  });

  it('check if "validateInput" returns false with no roman letters input', () => {
    const result = validateInput('aJfgH');
    expect(result).toBeFalsy();
  });

  it('check if "validateInput" returns false with roman letters input', () => {
    const result = validateInput('XVI');
    expect(result).toBeTruthy();
  });
});

describe('Test handleRomans helper function', () => {
  it('check if "handleRomans" returns an array with only roman letters', () => {
    const result = handleRomans('VIaJfDXgHL');
    expect(result).toStrictEqual(['VI', 'DX', 'L']);
  });

  it('check if "handleRomans" returns an array with only roman letters falsy validation', () => {
    const result = handleRomans('VIaJfgHL');
    expect(result).not.toStrictEqual(['VI', 'DX', 'L']);
  });
});

describe('Test handleValues helper function', () => {
  it('check if "handleValues" returns an array with roman numbers values', () => {
    const result = handleValues(['VI', 'DX', 'L']);
    expect(result).toStrictEqual([6, 510, 50]);
  });

  it('check if "handleValues" returns an array with roman numbers values falsy validation', () => {
    const result = handleValues(['VI', 'DX', 'L']);
    expect(result).not.toStrictEqual([6, 60, 100]);
  });

  it('', () => {
    const result = handleValues(['VII', 'XIII', 'DC']);
    expect(result).toStrictEqual([7, 13, 600]);
  });
});

describe('Test handleResult helper function', () => {
  it('check if "handleResult" returns an array with roman numbers values', () => {
    const result = handleResult(['VI', 'DX', 'L'], [6, 510, 50]);
    expect(result).toStrictEqual({ number: 'DX', value: 510 });
  });

  it('check if "handleResult" returns an array with roman numbers values', () => {
    const result = handleResult(['IV'], [4]);
    expect(result).toStrictEqual({ number: 'IV', value: 4 });
  });
});
