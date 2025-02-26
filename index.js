// [1,2,3, ...100000] -> map -> [2,3,4, .....100000] (modified but of the length as input) 
// [1,2,4] -> foreach -> undefined -> it will process each element with the given function 
// [1,2,3] => reduce -> 5
// [3,1,2] -> sort -> [1,2,3]
// (0,-1) -> Math.min() -> -1
// (100, 200) -> Math.max() -> 200

// useEffect 
// useState 


const inputArr = [2,1,5,3,6,7,9]


function findMissingNumbers(arr) {

    let min = Math.min(...arr)
    let max = Math.max(...arr)

    let myCompleteArray = []

    for (let i = min; i <= max; i++) {
        myCompleteArray.push(i);
      }

      let missingNumbers = []

    for (let index = 0; index < myCompleteArray.length; index++) {
        if(!arr.includes(myCompleteArray[index])) {
            missingNumbers.push(myCompleteArray[index])

        }
        // else {
        //      missingNumbers.push(myCompleteArray[index])
        // }
            
    }

    console.log("missingNumbers ::: ", missingNumbers)


}

findMissingNumbers(inputArr)


// find missing numbers 