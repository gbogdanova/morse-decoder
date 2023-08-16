const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let str = '';
    let box = '';

    back: for (let i = 0; i < expr.length; i = i + 10){
       arr = expr.slice(i,i+10).split('');
       if (arr[0] == '*'){
        str = str + ' ';
        continue back;
       }
       else {
        zero:for (let j = 0; j < 10; j = j + 2){
            if (arr[j] == '0'){continue zero;}
            else if(arr[j] == '1' && arr[j+1]== '0'){box = box + '.'}
            else {box = box + '-'}
        }
        str = str + MORSE_TABLE[box];
        box = '';
        arr = [];
       }
    }
   return str; 
}

module.exports = {
    decode
}