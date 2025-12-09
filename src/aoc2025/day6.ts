/*

In Santa's workshop, the elves have found a mountain of magical gloves in complete disarray. Each glove is described by two values:

hand: indicates whether it is a left (L) or right (R) glove
color: the color of the glove (string)
Your task is to help them match gloves: A valid pair is a left glove and a right glove of the same color.

You must return a list with the colors of all the pairs found. Keep in mind that there may be several pairs of the same color. The order is determined by whichever pair can be made first.

🧩 Examples
const gloves = [
	{ hand: 'L', color: 'red' },
	{ hand: 'R', color: 'red' },
	{ hand: 'R', color: 'green' },
	{ hand: 'L', color: 'blue' },
	{ hand: 'L', color: 'green' }
]

matchGloves(gloves)
// ["red", "green"]

const gloves2 = [
	{ hand: 'L', color: 'gold' },
	{ hand: 'R', color: 'gold' },
	{ hand: 'L', color: 'gold' },
	{ hand: 'L', color: 'gold' },
	{ hand: 'R', color: 'gold' }
]

matchGloves(gloves2)
// ["gold", "gold"]

const gloves3 = [
	{ hand: 'L', color: 'red' },
	{ hand: 'R', color: 'green' },
	{ hand: 'L', color: 'blue' }
]

matchGloves(gloves3)
// []

const gloves4 = [
	{ hand: 'L', color: 'green' },
	{ hand: 'L', color: 'red' },
	{ hand: 'R', color: 'red' },
	{ hand: 'R', color: 'green' }
]

matchGloves(gloves4)
// ['red', 'green']

*/

type Glove = { hand: 'L' | 'R'; color: string }

export function matchGloves(gloves: Glove[]): string[] {
	const left = new Map<string, number>();  // contatore dei L
	const right = new Map<string, number>(); // contatore dei R
	const result: string[] = [];

	for (const g of gloves) {
		if (g.hand === 'L') {
			left.set(g.color, (left.get(g.color) ?? 0) + 1);

			// Se ci sono R in attesa → fai subito la coppia
			if ((right.get(g.color) ?? 0) > 0) {
				result.push(g.color);
				right.set(g.color, right.get(g.color)! - 1);
				left.set(g.color, left.get(g.color)! - 1);
			}
		} else {
			right.set(g.color, (right.get(g.color) ?? 0) + 1);

			// Se ci sono L in attesa → fai subito la coppia
			if ((left.get(g.color) ?? 0) > 0) {
				result.push(g.color);
				left.set(g.color, left.get(g.color)! - 1);
				right.set(g.color, right.get(g.color)! - 1);
			}
		}
	}

	return result;
}


const gloves4: Glove[] = [
	{ hand: 'L', color: 'green' },
	{ hand: 'L', color: 'red' },
	{ hand: 'R', color: 'red' },
	{ hand: 'R', color: 'green' }
]

matchGloves(gloves4)

const gloves2: Glove[] = [
	{ hand: 'L', color: 'gold' },
	{ hand: 'R', color: 'gold' },
	{ hand: 'L', color: 'gold' },
	{ hand: 'L', color: 'gold' },
	{ hand: 'R', color: 'gold' }
]

matchGloves(gloves2)

const gloves: Glove[] = [
	{ hand: 'L', color: 'red' },
	{ hand: 'R', color: 'red' },
	{ hand: 'R', color: 'green' },
	{ hand: 'L', color: 'blue' },
	{ hand: 'L', color: 'green' }
]

matchGloves(gloves)