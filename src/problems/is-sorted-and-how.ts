// https://www.codewars.com/kata/580a4734d6df748060000045

const array = [1, 2, 3, 4];

export function isSortedAndHow(array: number[]): string {
	let ascending = true;
	let descending = true;

	for (let i = 0; i < array.length - 1; i++) {
		if (array[i] < array[i + 1]) {
			descending = false;
		} else if (array[i] > array[i + 1]) {
			ascending = false;
		}
	}

	if (ascending) return "yes, ascending";
	if (descending) return "yes, descending";
	return "no";
}

isSortedAndHow(array);