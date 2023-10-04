// var nums = [31,11,12,34,534,2,4,6,34,222,33,43,234]
// var newNums = []
// for (let index = 0; index < nums.length; index++) {
//     newNums.push(nums[index])
// }
// console.log(newNums,'lll')
// console.dir(global, 'global')

/* 
    利用构造函数创建一副扑克牌
*/
/* 
Deck：一副扑克牌
Poker：一张扑克牌
*/

/**
 * 
 * @param {number} number  1-1,...11-J,12-Q,13-K,14-小王，15-大王
 * @param {color} color 1-黑桃，2-红桃，3-梅花，4-方片
 */
function Poker(number, color) {
    this.number = number
    this.color = color
    this.print = function () {
        if (this.number == 14) {
            console.log('小王')
            return
        }
        if (this.number == 15) {
            console.log('大王王')
            return
        }
        var color = ''
        if (this.color === 1) {
            color = '♠️'
        }
        if (this.color === 2) {
            color = '♥️'
        }
        if (this.color === 3) {
            color = '♣️'
        }
        if (this.color === 4) {
            color = '♦️'
        }
        console.log('color', color);
        return color
    }
}
var p1 = new Poker(1, 1)

p1.print();