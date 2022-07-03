const factorial = require('../src');

describe('Factorial function', () => {
    it('0보다 큰 수', () => {
        expect(factorial(3)).toEqual(6);
    });

    it('에러 발생', () => {
        expect(() => {
            factorial(-1);
        }).toThrow('Factorial은 오직 0보다 큰 수만 가능합니다.');
    });
});