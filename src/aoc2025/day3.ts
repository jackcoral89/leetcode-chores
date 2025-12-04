

export function drawGift(size: number, symbol: string): string {

	if (size < 2) {
		return '';
	}

	let gift: string[] = [];
	for (let i = 0; i < size * size; i++) {
		gift.push(symbol)
		if ((i + 1) % size === 0 && i < size * size - 1) {
			gift.push("\n");
		}
	}

	for (let row = 1; row < size - 1; row++) {
		for (let col = 1; col < size - 1; col++) {
			const index = row * (size + 1) + col;
			gift[index] = " ";
		}
	}
	return gift.join("");
}

drawGift(3, '*')
drawGift(4, '+')
drawGift(5, '-')
drawGift(2, '°')