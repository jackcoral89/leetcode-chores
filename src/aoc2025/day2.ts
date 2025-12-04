export function manufactureGifts(giftsToProduce: Array<{ toy: string, quantity: any }>): string[] {
	let arr: string[] = [];
	for (let i = 0; i < giftsToProduce.length; i++) {
		const element = giftsToProduce[i];
		for (let j = 0; j < element.quantity; j++) {
			if (Number.isFinite(element.quantity)) {
				arr.push(element.toy);
			}
		}
	}
	console.log(arr)
	return arr;
}

const production1 = [
	{ toy: 'car', quantity: -1 },
	{ toy: 'doll', quantity: '1' },
	{ toy: 'ball', quantity: 2 },
	{ toy: 'cat', quantity: 0 },
	{ toy: 'cat', quantity: 3 },
]

// manufactureGifts(production1)