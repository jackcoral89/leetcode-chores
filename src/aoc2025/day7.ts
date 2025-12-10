/*

It’s time to decorate the Christmas tree 🎄! Write a function that receives:

height → the height of the tree (number of rows).
ornament → the ornament character (for example, "o" or "@").
frequency → how often (in asterisk positions) the ornament appears.
The tree is drawn with asterisks *, but every frequency positions, the asterisk is replaced by the ornament.

The position counting starts at 1, from the top to the bottom, left to right. If frequency is 2, the ornaments appear in positions 2, 4, 6, etc.

The tree must be centered and have a one-line trunk # at the end.

🧩 Examples
drawTree(5, 'o', 2)
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #

drawTree(3, '@', 3)
//   *
//  *@*
// *@**@
//   #

drawTree(4, '+', 1)
//    +
//   +++
//  +++++
// +++++++
//    #

*/

export function drawTree(height: number, ornament: string, frequency: number): string {
	let result: string[] = [];
	let globalPos = 1; // conta tutte le posizioni da cima a fondo

	for (let row = 1; row <= height; row++) {
		const stars = row * 2 - 1; // numero di * nella riga
		const spaces = " ".repeat(height - row); // centratura
		let line = "";

		for (let i = 0; i < stars; i++) {
			if (globalPos % frequency === 0) {
				line += ornament;
			} else {
				line += "*";
			}
			globalPos++;
		}

		result.push(spaces + line);
	}

	// tronco centrato
	result.push(" ".repeat(height - 1) + "#");

	return result.join("\n");
}

drawTree(5, 'o', 2)
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #

// o*o*o*o*o*o*o*o*o*o*o*o*

drawTree(4, '+', 1)
//    +
//   +++
//  +++++
// +++++++
//    #

drawTree(3, '@', 3)