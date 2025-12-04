/*
It's time to put up the Christmas tree at home! 🎄 But this year we want it to be special. We're going to create a function that receives the height of the tree (a positive integer between 1 and 100) and a special character to decorate it.

The function should return a string that represents the Christmas tree, constructed as follows:

The tree is made up of triangles of special characters.
The spaces on the sides of the tree are represented with underscores _.
All trees have a trunk of two lines, represented by the # character.
The tree should always have the same length on each side.
You must ensure the tree has the correct shape using line breaks \n for each line.

Examples:

const tree = createXmasTree(5, '*')
console.log(tree)

____*____
___***___
__*****__
_*******_
*********
____#____
____#____

const tree2 = createXmasTree(3, '+')
console.log(tree2)

__+__
_+++_
+++++
__#__
__#__

const tree3 = createXmasTree(6, '@')
console.log(tree3)

_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____

*/

export function createXmasTree(height: number, ornament: string): string {
	let tree: string[] = [];

	const base1 = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1);
	const base2 = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1);

	let count = height - 1;
	let ornaments = ornament;
	for (let row = 0; row < height; row++) {
		const branch = '_'.repeat(count) + ornaments + '_'.repeat(count);
		tree.push(branch)
		count--;
		ornaments += ornament + ornament;
	}

	const result = [...tree, base1, base2].join("\n");
	return result;
}

createXmasTree(3, '+')
// createXmasTree(6, '@')