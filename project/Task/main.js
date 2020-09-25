let result = $('.result')
let string1 = '';
let string2 = '';
let string3 = '';
let string4 = '';
let number = null;

const btn1 = $('#btn-1')

btn1.on('click', getData)
btn1.on('click', checkStringExist)
btn1.on('click', shortenString)
btn1.on('click', upperCaseFirstWord)
btn1.on('click', repeatStringTask4)
btn1.on('click', repeatStringTask5)
btn1.on('click', repeatStringTask6)
btn1.on('click', reverseString)
btn1.on('click', testString)

btn1.on('click', consoleLog)

function consoleLog() {
    console.log(string1.split(", "))
    console.log(string1)
}

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
    $(result[0]).html(string1.includes(string2));
}

function shortenString() {
    $(result[1]).html(`${string1.slice(0, 8)}...`);
}

function upperCaseFirstWord() {
    $(result[2]).html(string1.split(" ").map(a => a.charAt(0).toUpperCase() + a.substring(1).toLowerCase()).join(" "))
}

function repeatStringTask4() {
    let newString = string3;
    for (let i = 0; i < 9; i++) {
        newString += `${string3}`;
    }
    $(result[3]).html(newString);
}

function repeatStringTask5() {
    let newString = string3;
    for (let i = 0; i < 9; i++) {
        newString += `-${string3}`;
    }
    $(result[4]).html(newString);
}

function repeatStringTask6() {
    let newstring = string3;
    for (let i = 0; i < number - 1; i++) {
        newstring += `-${string3}`
    }
    $(result[5]).html(newstring);
}

function reverseString() {
    let newReverseString = "";
    for (i = string1.length - 1; i >= 0; --i) {
        newReverseString += string1[i];
    }
    $(result[6]).html(newReverseString);
}

function testString() {
    let stringReverse = "";
    let kq;
    let stringNew = string4.split(' ').join('').toLowerCase();
    for (i = stringNew.length - 1; i >= 0; --i) {
        stringReverse += stringNew[i]
    }
    if (stringNew == stringReverse) {
        kq = true;
    } else {
        kq = false;
    }
    $(result[7]).html(kq);
}

let array1, array2, array3;

const btn2 = $('#btn-2')

btn2.on('click', getDataArray)
btn2.on('click', minNumber)
btn2.on('click', maxSecondNumber)
btn2.on('click', sortName)
btn2.on('click', sum)
btn2.on('click', parameter)
btn2.on('click', filterArray)
    // $('#btn-2').click(() => maxSecondNumber())


function getDataArray() {
    array1 = $('#input-array-numbers').val().split(', ')
    array2 = $('#input-array-name').val().split(', ')
    array3 = $('#input-array-string').val().split(', ')
}

function minNumber() {
    $(result[8]).html(array1.sort((a, b) => a - b)[0])
}

function maxSecondNumber() {
    let arr = array1.sort((a, b) => b - a)
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] < 0) {
            $(result[9]).html(arr[i])
            break;
        }
    }
}

function sortName() {
    let arr = array2.sort();
    let arr1 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr1.push(arr[i])
    }
    $(result[10]).html(`[${arr1}]`)
}

function sum() {
    let sum = 0;
    for (i = 0; i <= 100; i++) {
        if (i % 5 == 0) {
            sum += i
        }
    }
    $(result[11]).html(sum)
}

function parameter() {
    $(result[12]).html(`[${array1.map(a => a % 2)}]`)
}

function filterArray() {
    let arr7 = array3.sort((a, b) => b.length - a.length)
    $(result[13]).html(arr7.filter(a => a.length == arr7[0].length))
}