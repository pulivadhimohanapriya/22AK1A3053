function addComplex(a, b) {
  return { real: a.real + b.real, imag: a.imag + b.imag };
}

function subtractComplex(a, b) {
  return { real: a.real - b.real, imag: a.imag - b.imag };
}

function multiplyComplex(a, b) {
  return {
    real: a.real * b.real - a.imag * b.imag,
    imag: a.real * b.imag + a.imag * b.real
  };
}

function conjugateComplex(a) {
  return { real: a.real, imag: -a.imag };
}

function toStringComplex(a) {
  return `${a.real} + ${a.imag}i`;
}

let c1 = { real: 3, imag: 4 };
let c2 = { real: 1, imag: 2 };

console.log("Complex Number 1:", toStringComplex(c1));
console.log("Complex Number 2:", toStringComplex(c2));

console.log("Addition:", toStringComplex(addComplex(c1, c2)));
console.log("Subtraction:", toStringComplex(subtractComplex(c1, c2)));
console.log("Multiplication:", toStringComplex(multiplyComplex(c1, c2)));
console.log("Conjugate of Complex Number 1:", toStringComplex(conjugateComplex(c1)));
console.log("Conjugate of Complex Number 2:", toStringComplex(conjugateComplex(c2)));
