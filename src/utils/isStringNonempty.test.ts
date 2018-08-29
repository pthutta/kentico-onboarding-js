import { isStringNonempty } from './isStringNonempty';

describe('isStringNonempty', () => {
  it('returns false for empty string', () => {
    const input: string = '';

    const result: boolean = isStringNonempty(input);

    expect(result).toBeFalsy();
  });

  [
    '        ',
    ' \t\r',
    '\n   \t'
  ].forEach((input: string) =>
    it('returns false for string with whitespaces', () => {
      const result: boolean = isStringNonempty(input);

      expect(result).toBeFalsy();
    })
  );

  [
    '  John Doe ',
    'John Doe  ',
    'Just John'
  ].forEach((input: string) =>
    it('returns true for nonempty string - ' + input, () => {
      const result: boolean = isStringNonempty(input);

      expect(result).toBeTruthy();
    })
  );
});
