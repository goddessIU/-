var maxSubArray = function(nums) {
    let val = nums[0]
    let res = nums[0]
    let right = 0
    let left = 0
    for (let i = 1; i < nums.length; i++) {
        let d = 0
        m = nums[i]
        if (val + m < m) {
            val = m
            d = 1
        } else {
            val += m
        }
        if (val > res) {
            res = val
            if (d === 1) {
                left = i
                right = i
            } else {
                right = i
            }
        }
    }
    return nums.slice(left, right + 1)
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))