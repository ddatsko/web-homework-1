function maxTotal(numbers) {
    let positiveNumbers = numbers.filter(number => number > 0);
    return positiveNumbers.sort((a, b) => b - a).slice(0, 5).reduce((a, b) => a + b);
}

