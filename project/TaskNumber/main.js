const result = document.getElementsByClassName('result')

const btn1 = document.getElementById('btn-1');
btn1.addEventListener('click', calculateVolume)

function calculateVolume() {
    let R = Number(document.getElementById('input1').value)
    if (typeof(R) == 'number' && R > 0) {
        result[0].innerHTML = (4 / 3 * Math.PI * Math.pow(R, 3)).toFixed(6)
    } else result[0].innerHTML = false;
}

const btn2 = document.getElementById('btn-2');
btn2.addEventListener('click', calculateTotal)

function calculateTotal() {
    let a = Number(document.getElementById('input2.1').value)
    let b = Number(document.getElementById('input2.2').value)

    if (Number.isInteger(a, b)) {
        let min = a
        let max = b
        let sum = 0;
        if (min > b) {
            min = b
            max = a
        }
        for (let i = (min + 1); i < max; i++) {
            sum += i
        }
        result[1].innerHTML = sum
    } else result[1].innerHTML = false;
}

const btn3 = document.getElementById('btn-3');
btn3.addEventListener('click', checkPrimeNumber)

function checkPrimeNumber() {
    let number3 = Number(document.getElementById('input3').value)
    if (Number.isInteger(number3) == true && number3 > 0) {
        let check = true;
        if (number3 < 2 || number3 % 2 == 0) {
            check = false;
        }
        if (number3 == 2) {
            check = true;
        } else {
            for (let i = 3; i < number3; i += 2) {
                if (number3 % i == 0) {
                    check = false;
                    break;
                }
            }
        }
        result[2].innerHTML = check;
    } else result[2].innerHTML = false
}

const btn4 = document.getElementById('btn-4');
btn4.addEventListener('click', totalPrimeNumber)

function checkPrimeNumber2(n) {
    if (Number.isInteger(n) == true && n > 0) {
        let check = true;
        if (n < 2 || n % 2 == 0) {
            check = false;
        }
        if (n == 2) {
            check = true;
        } else {
            for (let i = 3; i < n; i += 2) {
                if (n % i == 0) {
                    check = false;
                    break;
                }
            }
        }
        return check;
    } else return false
}

function totalPrimeNumber() {
    let number4 = Number(document.getElementById('input4').value)
    let sum = 0
    for (let i = 0; i <= number4; i++) {
        if (checkPrimeNumber2(i) === true) {
            sum += i
            console.log(sum)
        }
    }
    result[3].innerHTML = sum;
}

const btn5 = document.getElementById('btn-5');
btn5.addEventListener('click', totalDivisor)

function totalDivisor() {
    let number5 = Number(document.getElementById('input5').value)
    let sum = 0;
    for (let i = 1; i <= number5; i++) {
        if (number5 % i == 0) {
            sum += i
        }
    }
    result[4].innerHTML = `Tổng các ước của số truyền vào là: ${sum}`
}