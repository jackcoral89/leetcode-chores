
const a = [1, 2, 2, 2, 3];
const b = [1, 2];

export function arrayDiff(a: number[], b: number[]): number[] {
	const newArr = a.filter(a => b.every(b => b != a))
  return newArr;
}

arrayDiff(a, b);