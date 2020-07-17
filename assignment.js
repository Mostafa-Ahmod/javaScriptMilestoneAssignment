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
