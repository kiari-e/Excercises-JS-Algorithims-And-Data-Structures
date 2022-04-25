/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/
function bubbleSort(nums){
  let swapped = false;
  do{
  swapped =false;

for (let b = 0; b <= nums.length; b++ ){
  if(nums[b] > nums[b + 1]){
    let temp = nums[b];
    nums[b] = nums[b + 1];
    nums[b + 1] = temp;
    swapped = true;
     }
}
 } while(swapped)
 return nums;
}

test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});


