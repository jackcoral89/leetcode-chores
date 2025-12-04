/*
Santa Claus 🎅 wants to frame the names of the good children to decorate his workshop 🖼️, but the frame must follow specific rules. Your task is to help the elves generate this magical frame.

Rules:

Given an array of names, you must create a rectangular frame that contains all of them.
Each name must be on a line, aligned to the left.
The frame is built with * and has a border one line thick.
The width of the frame automatically adapts to the longest name plus a margin of 1 space on each side.
*/

export function createFrame(names: string[]): string {

	let rows: string[] = [];
	const maxLen = Math.max(...names.map(n => n.length));
	const border = '*'.repeat(maxLen + 4);

	for (let i = 0; i < names.length; i++) {
		const name = names[i];
		const padding = ' '.repeat(maxLen - name.length);
		rows.push(`* ${name}${padding} *`)
	}
	const result = [border, ...rows, border].join('\n');
	return result;
}

createFrame(['midu', 'madeval', 'educalvolpz'])
// createFrame(['a', 'bb', 'ccc'])
// createFrame(['midu'])