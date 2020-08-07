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