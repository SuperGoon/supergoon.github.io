function findMonday() {
    let currentDay = new Date();
    let year = currentDay.getFullYear();
    let month = currentDay.getMonth();
    let day = currentDay.getDate();
    let a = currentDay.getDay();
    console.log(a, year, month, day);
}