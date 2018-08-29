import { generateUuid } from './generateUuid';

describe('generateUuid', () => {
  it('generates valid uuid v4 string', () => {
    const id: GUID = generateUuid();
    const regex: RegExp = new RegExp('^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$');

    expect(id).toMatch(regex);
  });

  it('generates different IDs', () => {
    const id1: GUID = generateUuid();
    const id2: GUID = generateUuid();
    const id3: GUID = generateUuid();

    expect(id1).not.toBe(id2);
    expect(id2).not.toBe(id3);
    expect(id1).not.toBe(id3);
  });
});
