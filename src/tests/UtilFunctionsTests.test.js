import {
  generateUUID,
  validateString
} from '../utils/UtilFunctions';

describe('Generate UUID', () => {
  it('generates different IDs', () => {
    const id1 = generateUUID();
    const id2 = generateUUID();
    const id3 = generateUUID();

    expect(id1).not.toBe(id2);
    expect(id2).not.toBe(id3);
    expect(id1).not.toBe(id3);
  });
});

describe('Validate String', () => {
  it('returns false for empty string', () => {
    expect(validateString('')).toBeFalsy();
  });

  it('returns false for string with whitespaces', () => {
    expect(validateString('        ')).toBeFalsy();
  });

  it('returns true for correct string', () => {
    expect(validateString('  John Doe ')).toBeTruthy();
  });
});
