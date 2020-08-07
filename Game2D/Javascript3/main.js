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

function filterName(arr) {
    return arr.map((element) => element.name).filter(function(elementName) {
        if (elementName[0] == 'H' || ele[0] == 'h') {
            return elementName
        }
    })
}
console.log(filterName(listUser))