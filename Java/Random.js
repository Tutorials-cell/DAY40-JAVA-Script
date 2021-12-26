const Is_Absent=0
let empcheck=Math.floor(Math.random()*10)%2;
if(empcheck==Is_Absent){
    console.log("Employee is Absent");
}
else{
    console.log("Employee is present");
} 
const Is_Part_Time=1;
const Is_Full_Time=2;
const Part_Time_Hours=4;
const Full_Time_Hours=8;
const Wage_Per_Hour=20;
{
    let empHrs=0;
    let empcheck=Math.floor(Math.random()*10)%3;
    switch(empcheck){
        case Is_Part_Time:
            empHrs=Part_Time_Hours;
            break;
            case Is_Full_Time:
                empHrs=Full_Time_Hours;
                break;
                default:
                    empHrs=0;

    }
    let empwages=empHrs*Wage_Per_Hour;
    console.log("UC2 - Employee Wage: " + empWage);
}
const findTotal=(totalVal,dailyVal)=>{
    return totalVal+dailyVal;
}
let count=0;
let totalHours=Array.from(empDailyWageMap.values()).reduce(findTotal,0);
let totalSalary=empDailyWageArr.filter(dailyWage=>dailyWage>0).reduce(findTotal,0);
console.log("UC9 - Emp with Arrow : "+"Total hours :"+ totalHours+"Total Wages :"+totalSalary);

let nonWorkingDays=new Array();
let PartWorkingDays=new Array();
let FullWorkingDays=new Array();
const findTotal=(totalVal,dailyVal)=>{
    return totalVal+dailyVal;
}
let count=0;
let totalHours=Array.from(empDailyWageMap.values()).reduce(findTotal,0);
let totalSalary=empDailyWageArr.filter(dailyWage=>dailyWage>0).reduce(findTotal,0);
console.log("UC9 - Emp with Arrow : "+"Total hours :"+ totalHours+"Total Wages :"+totalSalary);

let nonWorkingDays=new Array();
let PartWorkingDays=new Array();
let FullWorkingDays=new Array();
empDailyWageMap.forEach((value,key,map)=>{
    if(value==160) FullWorkingDays.push(key);
    else if(value==80) PartWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full working Days:"+fullWorkingDays);
console.log("part working Days:"+ PartWorkingDays);
console.log("non Working Days :"+ nonWorkingDays);