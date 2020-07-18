// Question No 1
function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}
var result =  feetToMile(10000);
console.log(result + " Mile ");
// End of Question No 1


// Question No.2
function woodCalculator(chair,table,bade) {
    
    let forChair = chair * 1;
    let forTable = table * 3;
    let forBade =  bade * 5;
    
    let total = forChair + forTable + forBade;
    return total
}
let overall  = woodCalculator(10,5,30);
console.log(overall +' Cubic tray');
// End of Question No.2

//Question No.3
function brickCalculator(floorNo){
    if (floorNo > 0){
        firstTen = 15 * 10;
        return firstTen;
    }
    else if (floorNo > 10){
         secondTen = 12 * 10;
          return secondTen;
    }
    else if(floorNo > 20){
        leftFloor = 10 * (floorNo - 20);
        return leftFloor;
    }
    
    let floorTogeather = firstTen  + secondTen + leftFloor;
    let brickNeed = floorTogeather *  1000;
    }
    //End of Question No.3