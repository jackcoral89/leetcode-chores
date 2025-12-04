// https://www.codewars.com/kata/5813d19765d81c592200001a

export function dontGiveMeFive(start: number, end: number): number {
	const array: string[] = [];
	for (let i = start; i <= end; i++) {
		!i.toString().includes("5") && array.push(i.toString());
	}
	return array.length;
}

dontGiveMeFive(4, 17);