// Simple functions with tiny step-by-step explanations

function doArithmetic(){
  const a = parseFloat(document.getElementById('a_num').value);
  const b = parseFloat(document.getElementById('b_num').value);
  const op = document.getElementById('op').value;
  const out = document.getElementById('arithmetic_result');

  if (Number.isNaN(a) || Number.isNaN(b)) {
    out.textContent = 'Please enter both numbers.';
    return;
  }

  let result, steps;
  switch(op){
    case '+':
      result = a + b;
      steps = `${a} + ${b} = ${result}`;
      break;
    case '-':
      result = a - b;
      steps = `${a} - ${b} = ${result}`;
      break;
    case '*':
      result = a * b;
      steps = `${a} × ${b} = ${result}`;
      break;
    case '/':
      if (b === 0) {
        steps = 'Cannot divide by zero.';
        break;
      }
      result = a / b;
      steps = `${a} ÷ ${b} = ${result}`;
      break;
    default:
      steps = 'Unknown operation.';
  }

  out.textContent = steps;
}

// Greatest common divisor
function gcd(a,b){
  a = Math.abs(a); b = Math.abs(b);
  while(b){
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function doFraction(){
  const n = parseInt(document.getElementById('num').value, 10);
  const d = parseInt(document.getElementById('den').value, 10);
  const out = document.getElementById('fraction_result');

  if (!Number.isInteger(n) || !Number.isInteger(d)) {
    out.textContent = 'Enter integer numerator and denominator.';
    return;
  }
  if (d === 0) {
    out.textContent = 'Denominator cannot be zero.';
    return;
  }

  const dec = n / d;
  const sign = (d < 0) ? -1 : 1;
  const g = gcd(n, d);
  const simpleN = (n / g);
  const simpleD = (d / g);

  out.textContent = `Decimal: ${dec}\nSimplified: ${simpleN}/${simpleD}\nSteps:\n1) Decimal = numerator ÷ denominator = ${n} ÷ ${d} = ${dec}\n2) GCD(${n}, ${d}) = ${g}\n3) Divide both by ${g} → ${simpleN}/${simpleD}`;
}

function percentOf(){
  const base = parseFloat(document.getElementById('base').value);
  const pct = parseFloat(document.getElementById('pct').value);
  const out = document.getElementById('percent_result');

  if (Number.isNaN(base) || Number.isNaN(pct)){
    out.textContent = 'Enter both base and percent.';
    return;
  }
  const result = base * (pct / 100);
  out.textContent = `${pct}% of ${base} = ${result}\nSteps:\n1) Convert percent: ${pct}% → ${pct/100}\n2) Multiply: ${base} × ${pct/100} = ${result}`;
}

function whatPercent(){
  const part = parseFloat(document.getElementById('part').value);
  const whole = parseFloat(document.getElementById('whole').value);
  const out = document.getElementById('percent_result');

  if (Number.isNaN(part) || Number.isNaN(whole) || whole === 0){
    out.textContent = 'Enter valid part and whole (whole ≠ 0).';
    return;
  }
  const pct = (part / whole) * 100;
  out.textContent = `${part} is ${pct}% of ${whole}\nSteps:\n1) Divide: ${part} ÷ ${whole} = ${part/whole}\n2) Multiply by 100 → ${pct}%`;
}

function solveLinear(){
  // Solve ax + b = c  =>  ax = c - b  => x = (c - b) / a
  const a = parseFloat(document.getElementById('coef_a').value);
  const b = parseFloat(document.getElementById('coef_b').value);
  const c = parseFloat(document.getElementById('coef_c').value);
  const out = document.getElementById('linear_result');

  if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
    out.textContent = 'Enter a, b, and c.';
    return;
  }
  if (a === 0) {
    if (c === b) {
      out.textContent = 'All numbers x are solutions (0x + b = b).';
    } else {
      out.textContent = 'No solution (0x + b = c with b ≠ c).';
    }
    return;
  }
  const numerator = c - b;
  const x = numerator / a;
  out.textContent = `Equation: ${a}x + ${b} = ${c}\nStep 1: Subtract ${b} → ${a}x = ${c} - ${b} = ${numerator}\nStep 2: Divide by ${a} → x = ${numerator} / ${a} = ${x}`;
}
