// https://leetcode-cn.com/problems/last-stone-weight-ii/
// 输入：stones = [31,26,33,21,40]
// 输出：5

// 思路
// 猜测：是否需要分成两个组，两个组互相比大小进行消除，并且每个组内的数值仅能和另一个组的数值进行比大小，差额归数值大的那个组，直到剩余最后一个数值
// 假设a、b两组
// a: 33 40 -> 73
// b: 31 26 21 -> 78
// 首先随机让40和31比大小
// 得到
// a [33, 9]
// b [26, 21]
// 让33和21比较
// 得到
// a [12,9]
// b [26]
// 让12和26比较
// 得到
// a [9]
// b [14]
// 最后让9和14比较
// 得到
// a []
// b [5]
// 所以数组中两两相减后得到最小的值为5
// 比较路程：
// [26,33,21,9] -> [26,12,9] -> [14,9] -> [5]

// 如果以上猜测正确
// 思考：如何划分为两个组？
// 目前思路为：算出总值再除以2得到平均值，对数组排序，从大到小把值放入第一个组中，直到总值刚好低于平均值
// 步骤：
// 1. 先找出总值
// 2. 计算平均值
// 3. 划分组
// 思考：怎么进行比较大小扣除值，并把差保留在数值大的数组中呢
// 漏洞？两个组总值相减即为最小值

/**
 * @param {number[]} stones
 * @return {number}
 */
// var lastStoneWeightII = function (stones) {
//   var total = stones.reduce((acc, cur) => acc + cur, 0)
//   // var _stones = stones.slice(0).sort((x, y) => y - x)
//   var average = Math.ceil(total / 2)
//   console.log(average);

//   var dp = []
//   stones.forEach(s => {
//     for (var i = average; i >= s; i--){
//       dp[i] = Math.max(dp[i], dp[i - s] + s)
//     }
//   })
//   console.log(dp);
//   return total - 2 * dp[average]
// }
// 官方题解
// 背包问题，需要动态规划
// 呜呜呜，不会这个啊
var lastStoneWeightII = function(stones) {
  let sum = 0
  stones.forEach(element => sum += element)
  let half = sum >> 1
  let dp = new Array(half + 1).fill(0)
  for (let stone of stones) {
      for (let j = half; j >= stone; j--) {
          dp[j] = Math.max(dp[j], dp[j - stone] + stone)
      }
  }
  return sum - dp[half] * 2
};
console.log('lastStoneWeightII([2,7,4,1,8,1]): ', lastStoneWeightII([2,7,4,1,8,1]));
