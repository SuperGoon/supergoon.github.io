let result = document.getElementsByClassName('result')
let string1 = '';
let string2 = '';
let string3 = '';
let string4 = '';
let number = null;

const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2')

btn1.addEventListener('click', getData)
btn1.addEventListener('click', checkStringExist)
btn1.addEventListener('click', shortenString)
btn1.addEventListener('click', upperCaseFirstWord)
btn1.addEventListener('click', repeatStringTask4)
btn1.addEventListener('click', repeatStringTask5)
btn1.addEventListener('click', repeatStringTask6)
btn1.addEventListener('click', reverseString)
btn1.addEventListener('click', testString)

function getData() {
    string1 = document.getElementById('input1').value;
    string2 = document.getElementById('input2').value;
    string3 = document.getElementById('input3').value;
    string4 = document.getElementById('input4').value;
    number = document.getElementById('input-number').value;
    if (string1.length < 8) {
        document.getElementsByClassName('noti')[0].innerHTML = "Nhập ít nhất 8 ký tự. Vui lòng tải lại để tiếp tục"
    }
    if (number < 1 || isNaN(number) === true) {
        document.getElementsByClassName('noti-number-error')[0].innerHTML = "Vui lòng nhập số nguyên dương"
    }
}

function checkStringExist() {
    return result[0].innerHTML = string1.includes(string2);
}

function shortenString() {
    return result[1].innerHTML = `${string1.slice(0, 8)}...`;
}

function upperCaseFirstWord() {
    return result[2].innerHTML = string1.split(" ").map(a => a.charAt(0).toUpperCase() + a.substring(1).toLowerCase()).join(" ")
}

function repeatStringTask4() {
    let newString = string3;
    for (let i = 0; i < 9; i++) {
        newString += `${string3}`;
    }
    return result[3].innerHTML = newString;
}

function repeatStringTask5() {
    let newString = string3;
    for (let i = 0; i < 9; i++) {
        newString += `-${string3}`;
    }
    return result[4].innerHTML = newString;
}

function repeatStringTask6() {
    let newstring = string3;
    for (let i = 0; i < number - 1; i++) {
        newstring += `-${string3}`
    }
    return result[5].innerHTML = newstring;
}

function reverseString() {
    let newReverseString = "";
    for (i = string1.length - 1; i >= 0; --i) {
        newReverseString += string1[i];
    }
    return result[6].innerHTML = newReverseString;
}

function testString() {
    let stringReverse = "";
    let result1;
    let stringNew = string4.split(' ').join('').toLowerCase();
    for (i = stringNew.length - 1; i >= 0; --i) {
        stringReverse += stringNew[i]
    }
    if (stringNew == stringReverse) {
        result1 = true;
    } else {
        result1 = false;
    }
    return result[7].innerHTML = result1;
}