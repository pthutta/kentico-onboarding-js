import { isStringNonempty } from './isStringNonempty';

describe('isStringNonempty', () => {
  it('returns false for empty string', () => {
    const input = '';

    const result = isStringNonempty(input);

    expect(result).toBeFalsy();
  });

  let inputs = [
    '        ',
    ' \t\r',
    '\n   \t'
  ];

  inputs.forEach(input =>
    it('returns false for string with whitespaces', () => {
      const result = isStringNonempty(input);

      expect(result).toBeFalsy();
    })
  );

  inputs = [
    '  John Doe ',
    'John Doe  ',
    'Just John'
  ];

  inputs.forEach(input =>
    it('returns true for nonempty string - ' + input, () => {
      const result = isStringNonempty(input);

      expect(result).toBeTruthy();
    })
  );
});
