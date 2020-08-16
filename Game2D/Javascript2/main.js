//Bài 1: Tính thể tính hình cầu với bán kính r:
function calculateVolume(r) {
    if (typeof(r) == 'number' && r > 0) {
        return (4 / 3 * Math.PI * Math.pow(r, 3)).toFixed(6)
    } else return false;
}

console.log(calculateVolume(6))

//Bài 2: Tính tổng các số nguyên nằm giữa 2 số:

function calculateTotal(a, b) {
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
        return sum
    } else return false;
}

console.log(calculateTotal(8, 3))

//Bài 3: Cho 1 số kiểm tra xem nó có phải số nguyên tố không

function checkPrimeNumber(n) {
    if (Number.isInteger(n) == true && n > 0) {
        let check = true;
        if (n < 2 || n % 2 == 0) {
            check = false;
        } else if (n == 2) {
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
//Rút gọn
function checkPrimeNumber2(n) {
    let result = true;
    if (!Number.isInteger(n) || n < 2 || n % 2 == 0) {
        result = false;
    }
    if (n == 2) {
        result = true;
    } else {
        for (let i = 3; i < Math.sqrt(n); i += 2) {
            if (n % i == 0) {
                result = false;
                break;
            }
        }
    }
    return result
}

console.log(checkPrimeNumber(11))
console.log(checkPrimeNumber2(8.1))

//Bài 4: Tính tổng các số nguyên tố nhỏ hơn hoăc bằng tham số truyền vào
function totalPrimeNumber(x) {
    let sum = 0
    for (let i = 0; i <= x; i++) {
        if (checkPrimeNumber(i) == true) {
            sum += i
        }
    }
    return sum;
}
console.log(totalPrimeNumber(11))

//Bài 5: Tính tổng các ước số của tham số
function totalDivisor(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            sum += i
        }
    }
    return sum
}
console.log(totalDivisor(16))

//Phần Object:

let user = {
    name: "Trương Minh Thúy",
    age: 25,
    email: 'support@techmaster.vn'
}

//Bài 1: Viết hàm lấy danh sách các key của object:

function takeKeysObj(obj__1) {
    return Object.keys(obj__1)
}
console.log(takeKeysObj(user))

//Bải 2: Viết hàm để lấy danh sách các value của object

function takeValues(obj__2) {
    return Object.values(obj__2)
}

console.log(takeValues(user))

//Bài 3: Viết hàm kiểm tra key có tồn tại trong Object không:

function checkKey(key, users) {

    return takeKeysObj(users).includes(key)
}

console.log(checkKey('email', user))

//Bài 4: Viết hàm kiểm tra Object có độ dài bao nhiêu:
function checkLength(obj__4) {
    return takeKeysObj(obj__4).length
}
console.log(checkLength(user))

//Bài 5: Viết function lấy ra những user có tuổi > 25 và isStatus = true:

let listUser = [{
        name: "Thúy",
        age: 25,
        isStatus: true
    },
    {
        name: "Cường",
        age: 27,
        isStatus: false
    },
    {
        name: "Hiên",
        age: 22,
        isStatus: true
    }, {
        name: "Huy",
        age: 28,
        isStatus: true
    }
]

function chooseUser(arrList) {
    return arrList.filter((element) => element.age > 25 && element.isStatus == true)
}

function listAge(arrList) {
    return arrList.sort((a, b) => a.age - b.age)
}

console.log(chooseUser(listUser))
console.log(listAge(listUser))

console.log(Array.from(user))