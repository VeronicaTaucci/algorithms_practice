def twoSum(nums, target):
    
        for i in range(len(nums)):
            if nums[i] < target:
                for j in range(i+1, len(nums)):
                    if nums[j]+nums[i] == target:
                        result = [i, j]
                        print(result)
                return result
        

twoSum([2, 7, 11, 15],9)
