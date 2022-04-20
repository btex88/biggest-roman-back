import greeter from '../greeter';

test('greeter', () => {
  expect(greeter('Bruno')).toBe('Hello Bruno!');
});
