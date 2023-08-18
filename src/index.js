module.exports = function toReadable (number) {

	if (number === 0) {
		return 'zero'
	}

	const getExpandNumberArray = n => n.toString().split('').reverse().map((a, i) => a * Math.pow(10, i)).filter(a => a > 0).reverse();

	const sumLastNumberIfTeens = (arr) => {
		if (arr[arr.length-2] === 10 && arr.length > 1) {
			arr[arr.length - 1] += 10;
			arr.splice(arr.length-2, 1);
		}
		return arr;
	}

	const getNumberWord = (n) => {
		switch(n) {
			case 1: return 'one';
			case 2: return 'two';
			case 3: return 'three';
			case 4: return 'four';
			case 5: return 'five';
			case 6: return 'six';
			case 7: return 'seven';
			case 8: return 'eight';
			case 9: return 'nine';
			case 10: return 'ten';
			case 11: return 'eleven';
			case 12: return 'twelve';
			case 13: return 'thirteen';
			case 14: return 'fourteen';
			case 15: return 'fifteen';
			case 16: return 'sixteen';
			case 17: return 'seventeen';
			case 18: return 'eighteen';
			case 19: return 'nineteen';
			case 20: return 'twenty';
			case 30: return 'thirty';
			case 40: return 'forty';
			case 50: return 'fifty';
			case 60: return 'sixty';
			case 70: return 'seventy';
			case 80: return 'eighty';
			case 90: return 'ninety';
			default: return '';
	 	}
	}

	let numberWord = '';
	let expandNumberArray = sumLastNumberIfTeens(getExpandNumberArray(number));

	if (number < 100) {
			for (el of expandNumberArray) {
					numberWord = `${numberWord}${getNumberWord(el)} `;
			}

			return numberWord.trim()
	}

	if (number < 1000) {
		const hundredths = `${number}`.slice(0, 1)
		for (el of expandNumberArray) {
				numberWord = `${numberWord}${getNumberWord(el)} `;
		}

		return `${getNumberWord(+hundredths)} hundred ${numberWord.trim()}`.trim()
	}
}
