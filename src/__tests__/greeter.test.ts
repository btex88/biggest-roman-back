import greeter from '../greeter';

test('Greeter', () => {
  expect(greeter('Bruno')).toBe('Hello Bruno!');
});
