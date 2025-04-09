let time = 17;

switch (true){
    case time <11:
        console.log("Good Morning");
        break;
    case time >= 11 && time < 15:
        console.log("Good Afternoon");
        break;
    case time > 16 && time < 19:
        console.log("Good Evening");
        break;
    case time > 19 && time <= 24:
        console.log("Night");
        break;
    default:
        console.log("You entered a wrong time");
        break;    
}