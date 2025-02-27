enum Weekday {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}


enum Month {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}
console.log("---------weekday----------")
for (let day in Weekday) {
    if (isNaN(+day)) {
        console.log(day);
    }
}


console.log("---------monate----------")

console.log(Month);
for (let month in Month) {
    if (isNaN(+month)) {
        console.log(month);
    }
}