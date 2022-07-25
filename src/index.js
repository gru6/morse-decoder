const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let phrase = '';

    function check(item) {
        let code = '';
        for (j = 0; j < item.length; j += 2) {
            if (item.slice(j, j + 2) == '10') {
                code += '.';
            }
            if (item.slice(j, j + 2) == '11') {
                code += '-';
            }
        }
        phrase += MORSE_TABLE[code];
    }

    for (i = 0; i < expr.length; i += 10) {
        let item = expr.slice(i, i + 10);
        if (item == '**********') {
            phrase += ' ';
        } else {
            check(item);
        }
    }
    return phrase;
}

module.exports = {
    decode
}