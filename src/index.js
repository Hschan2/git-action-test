// 팩토리얼 함수
function factorial(n) {
    if (n < 0) {
        throw new Error('0보다 작은 숫자는 사용할 수 없습니다.');
    }

    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

module.exports = factorial;