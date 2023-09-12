// we cannot start from the mid point
// because if the ball breaks we have to start from the last known good position
// which is the start and walk to half of N - which is still linear time
// but we want to improve linear time

// so we jump Square Root of N each time untill we find "true"
// and then we go back to the last known position
// and walk forwards a maximum of a Square Root of N

function two_crystal_balls(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = jumpAmount;

  // jump through the array in steps of the Square Root of N
  for (; i < breaks.length; i += jumpAmount) {
    if (breaks[i]) {
      break;
    }
  }

  // jump back the Square Root of N
  i -= jumpAmount;

  // linearly walk forward at most a Square Root of N
  for (let j = 0; j < jumpAmount && i < breaks.length; ++j, ++i) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
}

// Test :
let idx = Math.floor(Math.random() * 10000);
const data = new Array(10000).fill(false);

for (let i = idx; i < 10000; ++i) {
  data[i] = true;
}

console.log(two_crystal_balls(data));
console.log(two_crystal_balls(new Array(821).fill(false)));
