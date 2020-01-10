import { checkIfURL } from './URLvalidator'

test('validate url', () => {
  expect(checkIfURL('https://www.twitter.com')).toBe(true);
  expect(checkIfURL('ddd')).toBe(false);
  expect(checkIfURL('https:/website')).toBe(false);
});