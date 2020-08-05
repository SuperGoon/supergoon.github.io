//Bài 1: Fn kiểm tra chuỗi nằm trong chuỗi:
function checkString(stringOne, stringTwo) {
    var check = stringOne.indexOf(stringTwo)
    if (check >= 0) {
        result = true;
    } else {
        result = false;
    }
    return result;
}
//Cách 2: kiểm tra luôn xem đầu vào có phải là 1 string hay không
function stringInString(haystack, needle) {
    var check = haystack.indexOf(needle);
    if (check >= 0) {
        result = true
    } else {
        result = false;
    }
    if (typeof haystack !== 'string' || typeof needle !== 'string') {
        result = false
    }
    return result;
}

//Cách 3:
function checkStringExist(string1, string2) {
    return string1.includes(string2);
}

console.log(stringInString('acb df', 'ac'))

//Bài 2: Fn rút ngắn chuỗi:
function shortenString(stringThree) {
    let newString = stringThree.slice(0, 8);
    return `${newString}...`;
}


//Bải 3: Fn chỉ viết hoa chữ cái đầu tiên các từ trong chuỗi

function upperCaseFirstWord(stringThreeBonus) {
    let array = stringThreeBonus.split(" ")
    let arrayBonus = []
    for (let i = 0; i < array.length; i++) {
        let arr = array[i].toLowerCase();
        arr = arr.charAt(0).toUpperCase() + arr.substring(1);
        arrayBonus.push(arr)
    }
    return arrayBonus.join(" ")
}

let a = 'aDSAGd sfagaSDf saSDFSF sdfsDFSFA ầDF'
console.log(upperCaseFirstWord(a))

//Bài 4+5: Cho 1 chuỗi, viết Fn sao chép chuỗi lên 10 lần 
function repeatString(stringFour) {
    let arr = stringFour.split(","); //Biến 1 chuỗi thành 1 mảng
    let newArr = []; //Tạo mảng mới
    for (let i = 0; i < 10; i++) {
        newArr.push(arr); //Push bằng vòng lặp
    }

    let newRepeatString = newArr.join("-") //Chuyển mảng về chuỗi cùng dấu gạch -
    console.log(arr)
    console.log(newArr)
    console.log(newRepeatString);
    return newArr.join(" "); //Chuyển mảng về chuỗi
}
stringFour = 'A'
console.log(repeatString(stringFour))

//Cách 2: 
function repeatString1(stringFour1) {
    let newStringFour1 = stringFour1;
    for (let i = 0; i < 9; i++) {
        newStringFour1 += `-${stringFour1}`;
    }
    return newStringFour1;
}

//Bài 6: Sao chép chuỗi lên n lần
function repeatStringN(stringFourN, n) {
    let arr = stringFourN.split(","); //Biến 1 chuỗi thành 1 mảng
    let newArr = []; //Tạo mảng mới
    for (let i = 0; i < n; i++) {
        newArr.push(arr) //Push bằng vòng lặp
    }
    return newArr.join("-") //Chuyển mảng về chuỗi
}
//Cách 2: 
function repeatStringN2(stringFourN2, n) {
    let newstringFourN2 = stringFourN2;
    for (let i = 0; i < n; i++) {
        newstringFourN2 += `-${stringFourN2}`
    }
    return newstringFourN2;
}

//Bài 7: Viết hàm đảo ngược chuỗi

function reverseString(stringFive) {
    let newReverseString = "";
    for (i = stringFive.length - 1; i >= 0; --i) {
        newReverseString += stringFive[i];
    }
    return newReverseString;
}

//Bài 8: Kiểm tra chuỗi đối xứng:

function testString(stringSix) {
    let arrTest = stringSix.split(" "); //chuyển về mảng, bỏ space

    let newString = arrTest.join(""); //chuyển lại về chuỗi sau khi bỏ space

    let newString1 = newString.toLowerCase(); //chuỗi ban đầu chuyển về viết thường và k còn space

    let newStringTest = ""; //tạo chuỗi đảo ngược của chuỗi sau khi bỏ space và viết thường

    for (i = newString1.length - 1; i >= 0; --i) {
        newStringTest += newString1[i]
    }

    if (newString1 == newStringTest) {
        result = true;
    } else {
        result = false;
    }
    return result;
}


//Bài tập về Array:

//Bài 1: Viết hàm tìm số nhỏ nhất trong mảng:
let arr2 = [23, 145, , 234, 234, 234, 234, 12, 11]

function minNumber(array) {
    return array.sort((a, b) => a - b)[0]
}
console.log(minNumber(arr2))
    //Bài 2: Tìm số lớn thứ 2 trong mảng
function maxSecondNumber(array) {
    arr = array.sort((a, b) => b - a)
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] < 0) {
            return arr[i]
        }
    }
    return;

}

console.log(maxSecondNumber(arr2))

//Bài 3: 
function name(array) {
    let arr = array.sort()
    let arr1 = []
    for (let i = arr.length - 1; i >= 0; i--) {
        arr1.push(arr[i])
    }
    return arr1
}
var arr3 = ["Thắng", "Hưng", "Anh", "Maria", "Thịnh", "Yamamoto"]
console.log(name(arr3))

//Bài 4: Tính tổng các số chia hết cho 5 từ 0-100:

let arr = []
for (i = 0; i <= 100; i++) {
    if (i % 5 == 0) {
        arr.push(i)
    }
}
let arr4 = arr.reduce((a, b) => a + b)
console.log(arr);
console.log(arr4)
    //Cách 2:
let sum = 0;
for (i = 0; i <= 100; i++) {
    if (i % 5 == 0) {
        sum += i
    }
}
console.log(sum)

//Bài 5:

function parameter(array) {
    let arr = []
    array.map(function(a, b) {
        arr.push(a % 2)
            //console.log(arr)
    })
    return arr;
}
let arr5 = [4, 5, 2, 6, 2, 325, 5345]
console.log(parameter(arr5))

//Bài 6: 

function filterArray(array) {
    let arr7 = array.sort((a, b) => b.length - a.length)
    let arr8 = []
    arr7.filter(function(a, b) {
        if (a.length == arr7[0].length) {
            arr8.push(a)
        }
    })
    return arr8
}

let arr6 = ['ageg', 'saaaaaa', 'fdaaaaa', 'saaafaf', 'faaaasd', 'ffsa']
console.log(filterArray(arr6))