/*

The elves have found the encrypted code that protects the door to Santa’s workshop 🔐. The PIN has 4 digits, and it is hidden inside blocks like these:

[1++][2-][3+][<]
Write a function that deciphers the PIN from the code.

The code is made up of blocks between brackets [...] and each block generates one digit of the PIN.

A normal block has the form [nOP...], where n is a number (0-9) and after it there can be a list of (optional) operations.

The operations are applied in order to the number and are:

+ adds 1
- subtracts 1
The result is always a digit (mod 10 arithmetic), for example 9 + 1 → 0 and 0 - 1 → 9.

There is also the special block [<], which repeats the digit from the previous block.

If in the end there are fewer than 4 digits, you must return null.

🧩 Examples
decodeSantaPin('[1++][2-][3+][<]')
// "3144"

decodeSantaPin('[9+][0-][4][<]')
// "0944"

decodeSantaPin('[1+][2-]')
// null (only 2 digits)

*/

export function decodeSantaPin(code: string): string | null {

	// split values between [] into arrays
	const codes: string[] = [...code.matchAll(/\[(.*?)\]/g)].map(i => i[1]);

	if (codes.length < 4) {
		return null;
	}

	const results: number[] = [];

	for (let i = 0; i < codes.length; i++) {

		const code: string = codes[i];

		let sum = 0;
		for (let j = 0; j < code.length; j++) {

			if (!isNaN(Number(code[j]))) {
				sum += Number(code[j])
			}

			if (code[j] === "+") {
				sum = (sum + 1) % 10;
			}

			if (code[j] === "-") {
				sum = (sum + 9) % 10;
			}

			if (code[j] === "<") {
				sum = results[i - 1];
			}
		}

		results.push(sum);
	}

	return results.map(i => i.toString()).join("");
}

decodeSantaPin('[1++][2-][3+][<]')
decodeSantaPin('[9+][0-][4][<]')
decodeSantaPin('[1+][2-]')