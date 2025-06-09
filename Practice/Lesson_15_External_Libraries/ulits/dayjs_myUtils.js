//15_F
function isWeekend(date){
    let dayName = date.format('dd');
    if (dayName === 'Su'){
        return 'Sunday';
    }else if(dayName === 'Sa'){
        return 'Saturday';
    }
    else{
        return 'Not a Weekend !';
    }
}
export default isWeekend;