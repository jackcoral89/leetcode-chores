/*
Santa Claus 🎅 has received a list of magical numbers representing gifts 🎁, but some of them are duplicated and must be removed to avoid confusion. Additionally, the gifts must be sorted in ascending order before being delivered to the elves.
Your task is to write a function that receives a list of integers (which may include duplicates) and returns a new list without duplicates, sorted in ascending order.
*/

export function prepareGifts(gifts: number[]): number[] {
	return [...new Set(gifts)].sort((a, b) => a - b)
}

const gifts1 = [3, 1, 2, 3, 4, 2, 5]
prepareGifts(gifts1);