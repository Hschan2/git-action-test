const factorial = require('../src');

describe('Factorial function', () => {
    it('0보다 큰 수', () => {
        expect(factorial(3)).toEqual(6);
    });

    // toThrow할 때, index.js에서 작성한 에러와 똑같이 작성
    it('에러 발생', () => {
        expect(() => {
            factorial(-1);
        }).toThrow('0보다 작은 숫자는 사용할 수 없습니다.');
    });
});