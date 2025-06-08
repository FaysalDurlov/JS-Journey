//15_A
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
let TodayDate = dayjs();
let FutureDate = TodayDate.add(5,'day');
console.log(FutureDate.format('MMMM , dddd'));

//15_B
let days = TodayDate.daysInMonth();
console.log(days)