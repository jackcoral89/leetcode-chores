/*
Santa Claus's elves 🧝🧝‍♂️ have found a bunch of mismatched magic boots in the workshop. Each boot is described by two values:

type indicates if it's a left boot (I) or a right boot (R).
size indicates the size of the boot.
Your task is to help the elves pair all the boots of the same size having a left and a right one. To do this, you should return a list of the available boots after pairing them.

Note: You can have more than one pair of boots of the same size!

const shoes = [
	{ type: 'I', size: 38 },
	{ type: 'R', size: 38 },
	{ type: 'R', size: 42 },
	{ type: 'I', size: 41 },
	{ type: 'I', size: 42 }
]

organizeShoes(shoes)
// [38, 42]

const shoes2 = [
	{ type: 'I', size: 38 },
	{ type: 'R', size: 38 },
	{ type: 'I', size: 38 },
	{ type: 'I', size: 38 },
	{ type: 'R', size: 38 }
]
// [38, 38]

const shoes3 = [
	{ type: 'I', size: 38 },
	{ type: 'R', size: 36 },
	{ type: 'R', size: 42 },
	{ type: 'I', size: 41 },
	{ type: 'I', size: 43 }
]

organizeShoes(shoes3)
// []

*/

type Shoe = {
	type: 'I' | 'R'
	size: number
}

export function organizeShoes(shoes: Shoe[]): number[] {
	const I = new Set<number>();
	const R = new Set<number>();

	for (const s of shoes) {
		if (s.type === 'I') I.add(s.size);
		else if (s.type === 'R') R.add(s.size);
	}

	const result: number[] = ([...I] as number[]).filter(size => R.has(size)).flatMap(size => [size, size])
	return result;
}

const shoes: Shoe[] = [
	{ type: 'I', size: 38 },
	{ type: 'R', size: 38 },
	{ type: 'R', size: 42 },
	{ type: 'I', size: 41 },
	{ type: 'I', size: 42 }
]

organizeShoes(shoes)
// [38, 42]

const shoes2: Shoe[] = [
	{ type: 'I', size: 38 },
	{ type: 'R', size: 38 },
	{ type: 'I', size: 38 },
	{ type: 'I', size: 38 },
	{ type: 'R', size: 38 }
]
organizeShoes(shoes2)
// [38, 38]