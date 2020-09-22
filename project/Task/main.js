let result = document.getElementsByClassName('result')
let string1 = null;
let string2 = '';


function getData() {
    string1 = document.getElementById('input1').value;
    string2 = document.getElementById('input2').value;
    if (string1.length < 9) {
        document.getElementsByClassName('noti')[0].innerHTML = "Nhập ít nhất 8 ký tự. Vui lòng tải lại để tiếp tục"
    }
    return string1, string2;
}

function checkStringExist(string1, string2) {
    return result[0].innerHTML = string1.includes(string2);
}

function shortenString(string) {
    return result[1].innerHTML = `${string.slice(0, 8)}...`;
}

function upperCaseFirstWord(string) {
    return result[2].innerHTML = string.split(" ").map(a => a.charAt(0).toUpperCase() + a.substring(1).toLowerCase()).join(" ")
}

let string3 = '';
let number = null;

function getNumber() {
    string3 = document.getElementById('input3').value;
    number = document.getElementById('input4').value;
    if (number < 1 || isNaN(number) === true) {
        document.getElementsByClassName('noti-number-error')[0].innerHTML = "Vui lòng nhập số nguyên dương"
    } else document.getElementsByClassName('noti-number-success')[0].innerHTML = "Số hợp lệ"
}

console.log(number)

function repeatStringTask4(string) {
    let newString = string;
    for (let i = 0; i < 9; i++) {
        newString += `${string}`;
    }
    return result[3].innerHTML = newString;
}

function repeatStringTask5(string) {
    let newString = string;
    for (let i = 0; i < 9; i++) {
        newString += `-${string}`;
    }
    return result[4].innerHTML = newString;
}

function repeatStringTask6(string, n) {
    let newstring = string;
    for (let i = 0; i < n - 1; i++) {
        newstring += `-${string}`
    }
    return result[5].innerHTML = newstring;
}

function reverseString(string) {
    let newReverseString = "";
    for (i = string.length - 1; i >= 0; --i) {
        newReverseString += string[i];
    }
    return result[6].innerHTML = newReverseString;
}

function testString(string) {
    let stringReverse = "";
    let result1;
    let stringNew = string.split(' ').join('').toLowerCase()
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