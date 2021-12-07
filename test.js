const {stringLength, reverseString, Calculator} = require('./index');

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

describe('Calculator', () => {
    const Tupla = new Calculator(10,5);
    const TuplaWrongParameters = new Calculator('',5);
    const TuplaString = new Calculator('Paloma',5);

    describe('Addition', () => {
        test('One parameter is empty for Sum.', () => {
            expect(TuplaWrongParameters.add()).toMatch(/Parameters are missing./);
        });

        test('One parameter is string for Sum.', () => {
            expect(TuplaString.add()).toMatch(/Parameters must be numbers./);
        });

        test('Sum of 10 and 5 is 15.', () => {
            expect(Tupla.add()).toBe(15);
        });
    });

    describe('Subtraction', () => {
        test('One parameter is empty for subtraction.', () => {
            expect(TuplaWrongParameters.subtract()).toMatch(/Parameters are missing./);
        });

        test('One parameter is string for subtraction.', () => {
            expect(TuplaString.subtract()).toMatch(/Parameters must be numbers./);
        });

        test('Subtraction of 10 minus 5 is 5.', () => {
            expect(Tupla.subtract()).toBe(5);
        });
    });

    describe('Multiplication', () => {
        test('One parameter is empty for multiplication.', () => {
            expect(TuplaWrongParameters.multiply()).toMatch(/Parameters are missing./);
        });
    
        test('One parameter is string for multiplication.', () => {
            expect(TuplaString.multiply()).toMatch(/Parameters must be numbers./);
        });
    
        test('Multiplication of 10 times 5 is 50.', () => {
            expect(Tupla.multiply()).toBe(50);
        });
    });

    describe('Division', () => {
        test('One parameter is empty for division.', () => {
            expect(TuplaWrongParameters.divide()).toMatch(/Parameters are missing./);
        });
    
        test('One parameter is string for division.', () => {
            expect(TuplaString.divide()).toMatch(/Parameters must be numbers./);
        });
    
        test('Division of 10 divides 5 is 2.', () => {
            expect(Tupla.divide()).toBe(2);
        });
    });
});