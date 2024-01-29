let N
while (true) {
    N = +prompt('Введите любое число N (длина строки)')

    if (N > 0 && Number.isInteger(N)) break
    else alert('Введите положительное целое число')
}
const generateString = generateRandStr(N)
console.log('Полученная случайная строка: ', generateString)

const firstChar = prompt('Введите символ(для замены всех букв в строке)')
const replacedStr1 = replaceLetters(generateString, firstChar)
console.log('Полученная строка после заменты всех букв: ', replacedStr1)

const secondChar = prompt('Введите символ(для замены всех цифр в строке)')
const replacedStr2 = replaceDigits(replacedStr1, secondChar)
console.log('Полученная строка после заменты всех цифр: ', replacedStr2)

const charCount = {}

replacedStr2.split('').forEach((c) => {
    if (charCount[c] === undefined) {
        charCount[c] = 1
    } else {
        charCount[c] += 1
    }
})

console.log(
    `Количество повторов первого символа (${firstChar}): ${charCount[firstChar]}`
)
console.log(
    `Количество повторов второго символа (${secondChar}): ${charCount[secondChar]}`
)
delete charCount[firstChar]
delete charCount[secondChar]
console.log(
    `Количество символов, которые не были заменены: ${
        Object.keys(charCount).length
    }`
)

function generateRandStr(N) {
    const alphabet = Array.from({ length: 26 }, (c, i) =>
        String.fromCharCode(97 + i)
    ).filter((c) => !['c', 'p', 's', 'x'].includes(c))
    alphabet.push(
        ...Array.from({ length: 10 }, (c, i) => String.fromCharCode(48 + i))
    )
    alphabet.push('+', '-', '_', '$', '~')
    const resultStr = new Array(N)
    for (let i = 0; i < N; i++) {
        resultStr[i] = alphabet[Math.floor(Math.random() * alphabet.length)]
    }
    return resultStr.join('')
}

function replaceLetters(string, replaceChar) {
    return string
        .split('')
        .map((char) =>
            char.charCodeAt() >= 97 && char.charCodeAt() <= 122
                ? replaceChar
                : char
        )
        .join('')
}

function replaceDigits(string, replaceChar) {
    return string
        .split('')
        .map((char) =>
            char.charCodeAt() >= 48 && char.charCodeAt() <= 57
                ? replaceChar
                : char
        )
        .join('')
}

// console.log('~'.charCodeAt())
// console.log(String.fromCharCode(44))
