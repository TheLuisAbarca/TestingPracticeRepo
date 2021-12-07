const funStringLength = require('./index');

test('lol has 3 characters as string length.', () => {
    expect(funStringLength('lol')).toBe(3);
});

test('Empty has 0 characters as string length.', () => {
    expect(funStringLength('')).toMatch(/Invalid string/);
});

test('Murcielagos has 11 characters as string length.', () => {
    expect(funStringLength('Murcielagos')).toMatch(/Invalid string/);
});