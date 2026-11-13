//15_A
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import isSatSun from "./ulits/dayjs_myUtils.js";
let TodayDate = dayjs();
let FutureDate = TodayDate.add(5,'day');
console.log(FutureDate.format('MMMM d'));

//15_B
let days = TodayDate.daysInMonth();
console.log(days)

//15_C
let prevMonth = TodayDate.subtract(1,'month');
let prevMonthDate = prevMonth.format('D MMMM, YYYY');
console.log(prevMonthDate);

//15_D
let TodayDayFormated = TodayDate.format('dddd')
console.log(`${TodayDayFormated} of week`);


//15_E
// function isWeekend(date){
//     let dayName = date.format('dd');
//     if (dayName === 'Su'){
//         return 'Sunday';
//     }else if(dayName === 'Sa'){
//         return 'Saturday';
//     }
//     else{
//         return 'Not a Weekend !';
//     }
// }
// commented cz used this as library

console.log(isSatSun(TodayDate));