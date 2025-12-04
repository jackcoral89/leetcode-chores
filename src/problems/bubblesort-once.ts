// https://www.codewars.com/kata/56b97b776ffcea598a0006f2

const a = [9, 7, 5, 3, 1, 2, 4, 6, 8];

export function bubblesortOnce(array: number[]): number[] {
	const a = [...array];
	for (let i = 0; i < a.length - 1; i++) {
		if (a[i] > a[i + 1]) {
			[a[i], a[i + 1]] = [a[i + 1], a[i]]
		}
	}
	return a;
}

// console.log(bubblesortOnce(a));