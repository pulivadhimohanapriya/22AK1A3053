function getLuckyNumber(dob) {
    // Input validation
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dob)) {
        throw new Error("Invalid date of birth format. Please use YYYY-MM-DD.");
    }

    try {
        const digits = dob.replace(/-/g, ''); 

        let sum = 0;
        for (let i = 0; i < digits.length; i++) {
            sum += parseInt(digits[i], 10);
        }

        while (sum > 9) {
            sum = sum.toString().split('').reduce((acc, num) => acc + parseInt(num, 10), 0);
        }

        return sum;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const dateOfBirth = "2004-11-24"; 
const luckyNumber = getLuckyNumber(dateOfBirth);

if (luckyNumber !== null) {
    console.log(`The lucky number for the date of birth ${dateOfBirth} is ${luckyNumber}.`);
} else {
    console.log("Failed to calculate lucky number.");
}
