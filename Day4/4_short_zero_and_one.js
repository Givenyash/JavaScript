let nums = [0, 1, 0, 1, 0, 0, 1, 0, 1];

let i = 0;
let j =0;

while(i < nums.length){
    if(nums[i] == 0){
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j++;
    }
    else{
        i++;
    }
}

console.log(nums);