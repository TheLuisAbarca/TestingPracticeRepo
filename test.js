const {stringLength, reverseString} = require('./index');

test('lol has 3 characters as string length.', () => {
    expect(stringLength('lol')).toBe(3);
});

test('Empty has 0 characters as string length.', () => {
    expect(stringLength('')).toMatch(/Invalid string/);
});

test('Murcielagos has 11 characters as string length.', () => {
    expect(stringLength('Murcielagos')).toMatch(/Invalid string/);
});

test('Paloma has to be returned like amolaP.', () => {
    expect(reverseString('Paloma')).toMatch(/amolaP/);
});

test('Empty has 0 characters as string length.', () => {
    expect(reverseString('')).toMatch(/Invalid string/);
});

test('Murcielagos has 11 characters as string length.', () => {
    expect(reverseString('Murcielagos')).toMatch(/Invalid string/);
});