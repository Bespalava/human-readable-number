module.exports = function toReadable (number) {
 var num = new Map();
 num.set(0, 'zero').set(1, 'one').set(2, 'two').set(3, 'three').set(4, 'four').set(5, 'five').set(6, 'six').set(7, 'seven').set(8, 'eight').set(9, 'nine').set(10, 'ten')
  .set(11, 'eleven').set(12, 'twelve').set(13, 'thirteen').set(14, 'fourteen').set(15, 'fifteen').set(16, 'sixteen').set(17, 'seventeen').set(18, 'eighteen').set(19, 'nineteen')
  .set(20, 'twenty').set(30, 'thirty').set(40, 'forty').set(50, 'fifty').set(60, 'sixty').set(70, 'seventy').set(80, 'eighty').set(90, 'ninety');
    
  let newNum = String(number).split('');

    if (number <= 20 || (newNum.length == 2 && number % 10 == 0)) {
        return num.get(number);
    } 
    if (newNum.length == 2 && number % 10 != 0) {
        return `${num.get((+newNum[0])*10)} ${num.get(+newNum[1])}`
    }
    if (newNum.length == 3) {
        if (number % 100 == 0) {
            return `${num.get(+newNum[0])} hundred`
        }
        
        else if (number % 10 == 0) {
            let index = +(newNum.splice(1).join(''));
            return `${num.get(+newNum[0])} hundred ${num.get(index)}`
        }
        
        else if (number % 10 != 0 && newNum[1] == 0) {
            return `${num.get(+newNum[0])} hundred ${num.get(+newNum[2])}`
        }
        
        else if(number%100 > 20) {
            return `${num.get(+newNum[0])} hundred ${num.get((+newNum[1])*10)} ${num.get(+newNum[2])}`
        }
        else {
            return `${num.get(+newNum[0])} hundred ${num.get((number % 100))}`
        }
    }  
}
