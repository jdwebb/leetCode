461. Hamming Distance

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.


**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var bitX = x.toString(2);
    var bitY = y.toString(2);
    var lengthDiff = 0;
    var hamming = 0;
    
    if (bitX.length > bitY.length) {
        bitY = bitY.padStart(bitX.length, "0");
    }else if (bitX.length < bitY.length) {
        bitX = bitX.padStart(bitY.length, "0");
    }else if (bitX === bitY) {
        return hamming;
    }
    
    console.log(bitX);
    console.log(bitY);
        
    for (let i = 0; i < bitX.length; i++) {
        if(bitX.charAt(i) != bitY.charAt(i)) {
            hamming++;
        }
    }
    
    return hamming;
};