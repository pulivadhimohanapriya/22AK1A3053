function checkNumberType(number) {
    let sum = 0;

    // Calculate the sum of proper divisors
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    // Determine the type of number
    if (sum === number) {
        return "Perfect";
    } else if (sum > number) {
        return "Abundant";
    } else {
        return "Deficient";
    }
}

// Example usage
const number = 12; // You can change this value to test other numbers
console.log(${number} is a ${checkNumberType(number)} number.);