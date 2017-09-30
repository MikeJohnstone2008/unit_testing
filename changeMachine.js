(function(){
    function changeMachine(amount){
        let billArray = []
        
        let twenties = Math.floor(amount / 20);
        let remainder = amount % 20;
        billArray.push(twenties);
        
        let tens = Math.floor(remainder / 10);
        remainder = remainder % 10;
        billArray.push(tens);
        
        let fives = Math.floor(remainder / 5);
        remainder = remainder % 5;
        billArray.push(fives);
        
        let ones = Math.floor(remainder / 1);
        billArray.push(ones);
        
        
        return billArray;
    };
    module.exports = changeMachine;
    // console.log(changeMachine(47))
})()