function findRepeatNumber(nums: number[]): number[] {
    const res: Set<number> = new Set()
    for (let i = 0; i < nums.length; ) {
        if (nums[i] === i) {
            i++
            continue
        } 
        if (nums[i] === nums[nums[i]]) {
           res.add(nums[i])
        }
        let t = nums[i]
        nums[i] = nums[t]
        nums[t] = t
    }

    const fRes: number[] = []
    for (const m of res.values()) {
        fRes.push(m)
    }

    return fRes
};


console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))