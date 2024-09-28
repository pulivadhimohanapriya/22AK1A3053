function getLuckyNumber(dob) {
    const digits = dob.replace(/-/g, ''); 

    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        sum += parseInt(digits[i], 10);
    }

    while (sum > 9) {
        sum = sum.toString().split('').reduce((acc, num) => acc + parseInt(num, 10), 0);
    }

    return sum;
}

const dateOfBirth = "2004-10-11"; 
const luckyNumber = getLuckyNumber(dateOfBirth);

console.log(`The lucky number for the date of birth ${dateOfBirth} is ${luckyNumber}.`);
