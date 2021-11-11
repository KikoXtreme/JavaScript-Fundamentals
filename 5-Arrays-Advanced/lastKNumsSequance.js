function lastKNumsSequance(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let elements = result.slice(-k);
        let currentNumber = 0;

        for (let numbers of elements) {
            currentNumber += numbers;
        }
        result.push(currentNumber);
    }
    console.log(result.join(' '));
}

lastKNumsSequance(6, 3);
// lastKNumsSequance(8, 2);