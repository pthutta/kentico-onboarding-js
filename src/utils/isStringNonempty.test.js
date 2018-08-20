import { isStringNonempty } from './isStringNonempty';

describe('isStringNonempty', () => {
  it('returns false for empty string', () => {
    expect(isStringNonempty('')).toBeFalsy();
  });

  it('returns false for string with whitespaces', () => {
    expect(isStringNonempty('        ')).toBeFalsy();
  });

  it('returns true for correct string', () => {
    expect(isStringNonempty('  John Doe ')).toBeTruthy();
  });
});
