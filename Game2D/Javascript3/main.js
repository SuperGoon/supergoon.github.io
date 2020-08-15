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
        name: "hiên",
        age: 22,
        isStatus: true
    }, {
        name: "Huy",
        age: 28,
        isStatus: true
    }
]

//Bài 1: Viết hàm lọc ra những sinh viên nào có tên bắt đầu bằng chữ ''H'' hoặc ''h''.
function filterName(arr) {
    return arr.map((element) => element.name).filter(function(elementName) {
        if (elementName[0] == 'H' || elementName[0] == 'h') {
            return elementName
        }
    })
}
console.log(filterName(listUser))

//Bài 2 : Viết hàm tính ra số tuổi trung bình của toàn bộ sinh viên.
function tuoi(arr) {
    return arr.map(a => a.age).reduce((a, b) => a + b) / arr.length
}
console.log(tuoi(listUser))

// bài 3:
function ziczac(m, n) {
    let arr = []
    let arr2 = []

    for (let i = 1; i <= m * n; ++i) {
        arr.push(i)
    }
    for (let i = 0; i < arr.length; i += n) {
        let littleArr = arr.slice(i, i + n)
        arr2.push(littleArr)
    }
    for (let i = 0; i < arr2.length; ++i) {
        if (i % 2 !== 0) {
            arr2[i].reverse()
        }
    }

    return arr2
}

console.log(ziczac(5, 3))

//Bài 4:
function filterArray(arr1, arr2) {
    //sử dụng includes:
    newArray1 = arr1.filter(function(value) {
        if (arr2.includes(value) == false) {
            return value;
        }
    });
    //sử dụng indexOf
    newArray2 = arr2.filter(function(value) {
        if (arr1.indexOf(value) === -1) {
            return value;
        }
    });

    newArray = newArray1.concat(newArray2);

    return newArray
};
console.log(filterArray([1, 2, 3, 8, 5, 2], [2, 4, 5, 6, 8]))

//Bài 5:
function Fibonacci(n) {
    var a = 0,
        b = 1,
        number,
        sum = 0;
    for (let i = 0; i < n; i++) {
        number = a
        a = a + b;
        b = number
            // console.log(number)
        if (number >= n) {
            break
        }
        if (number % 2 == 0) {
            sum += number;
        }
    }
    return sum
}
console.log(Fibonacci(50))

//Bài 7:
function time(x, y, h) { //vận tốc z = (x- y)(m/ngày)
    return a = h / (x - y) //(ngày)
}
console.log(time(5, 3, 10))

//bài 8: 
function sortNumberMin(n) {
    if (!Number.isInteger(n)) {
        return false
    } else {
        let arr = n.toString().split('').sort()
        if (arr[0] == 0) {
            arr.splice(1, 0, arr.shift())
        }
        return parseInt(arr.join(''))
    }
}

console.log(sortNumberMin(970124))