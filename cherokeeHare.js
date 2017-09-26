//original code:
// (function(){

//       let numberHares = 0   //  x
//       let startingPopulation = 200;
//       let birthRate = 0.1    // = 10%
//       let numberOfWeeks = 5  // y
//       // let countOfWeeks = 0

//       for(let i = 1; i <= numberOfWeeks; i++){
//         numberHares += (startingPopulation + numberHares) * birthRate
//       }

//       totalHares = numberHares + startingPopulation;

//       // while (countOfWeeks > numberOfWeeks) {
//       //   numberHares =((startingPopulation * birthRate) + startingPopulation)
//       //   countOfWeeks++
//       // }//closing bracket for while loop

//     console.log("\n\n\nThere will be " + totalHares + " Cherokee Hares after " + numberOfWeeks + " weeks\n\n\n\n\n");

//     })()
(function () {
    function totalHares(startingPopulation, birthRate, numberOfWeeks) {

        for (let i = 1; i <= numberOfWeeks; i++) {
            var rabbitCount = startingPopulation * birthRate;
            startingPopulation += rabbitCount;
        }

        return Math.floor(rabbitCount);

    };
    console.log(totalHares(200, 0.1, 5))
    module.exports = totalHares;
})()


