function containsDuplicate(nums: number[]): boolean {
    const set = new Set();
    for(let i = 0; i < nums.length; i++) {
        let current_num = nums[i];
        if(set.has(current_num)) {
            return true;
        } set.add(current_num);
    }
    return false;
}
console.log(containsDuplicate([1,2,3,1]))

