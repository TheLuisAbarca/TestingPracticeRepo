const funStringLength = require('./index');

test('lol has 3 characters as string length.', () => {
    expect(funStringLength('lol')).toBe(3);
});