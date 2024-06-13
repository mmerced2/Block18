const FirstArray = [3, 2, 1];
const SecondArray = [9, 1, 1, 1, 4, 15, -1];

function concatOdds(FirstArray,SecondArray) {
    if (!Array.isArray(FirstArray) || !Array.isArray(SecondArray)) {
        return []
      }
    
      if (!FirstArray.every(input => typeof input === 'number') || !SecondArray.every(input => typeof input === 'number')) {
        return []
      }
      const combinedSortedOddsArray = FirstArray.concat(SecondArray).filter(num => (num % 2 === 1) || num % 2 === -1).sort((a, b) => a - b)
      const result = []
    
      for (let num of combinedSortedOddsArray) {
        if (!result.includes(num)) {
          result.push(num)
        }
      }
      
      return result
}

module.exports = concatOdds;