import validateMockData from '../validateMockData';

describe('Validate mock data', () => {
  it('should work properly', () => {
    expect(validateMockData([])).toBe(true);
    expect(validateMockData([{}])).toBe(false);
    expect(validateMockData([[]])).toBe(false);
    expect(validateMockData([[{}]])).toBe(false);
    expect(validateMockData([[{}, {}]])).toBe(true);
  });
});
