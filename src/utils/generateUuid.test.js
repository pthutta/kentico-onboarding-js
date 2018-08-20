import { generateUuid } from './generateUuid';

describe('generateUuid', () => {
  it('generates different IDs', () => {
    const id1 = generateUuid();
    const id2 = generateUuid();
    const id3 = generateUuid();

    expect(id1).not.toBe(id2);
    expect(id2).not.toBe(id3);
    expect(id1).not.toBe(id3);
  });
});
