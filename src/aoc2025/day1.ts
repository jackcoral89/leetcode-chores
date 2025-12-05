export function filterGifts(gifts: string[]): string[] {
  const newArr = gifts.filter(i => !i.includes('#'));
  return newArr;
}