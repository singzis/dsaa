/**
 * https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
 * 找出数组中重复的数字。
 * 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
 * 数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
 * 请找出数组中任意一个重复的数字。

 * 示例 1：
 * 输入：
 * [2, 3, 1, 0, 2, 5, 3]
 * 输出：2 或 3 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function (nums) {
  let medium = []
  let value
  for (let i of nums) {
    if (medium.includes(i)) {
      value = i
      break
    }
    medium.push(i)
  }
  return value
}

console.log('findRepeatNumber([2, 3, 1, 0, 2, 5, 3])', findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));

// 虽然第一次就通过了，但看网站反馈，还需优化

// 看别人的评论和解法，还需要考虑时间优先还是空间优先等因素

// 鸽巢原理 因为出现的元素值 < nums.size(); 所以我们可以将见到的元素，放到索引的位置，如果交换时，发现索引处已存在该元素，则重复（i++），时间O(N) 空间O(1)

var findRepeatNumber = function (nums) {
  for (let i = 0; i < nums.length; i++){
    // 当比较到nums[i] !== i时还没找到目标值，就跳出while，i++
    while (nums[i] !== i) {
      if (nums[nums[i]] === nums[i]) return nums[i]
      let tmp = nums[i]
      nums[i] = nums[tmp]
      nums[tmp] = tmp
    }
  }
  return -1
}