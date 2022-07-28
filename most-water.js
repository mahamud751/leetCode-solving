var maxArea = function (height) {
    let total = 0
    let start = 0
    let end = height.length - 1

    while (start < end) {
        let heights = Math.min(height[start], height[end])
        let width = end - start

        let current = heights * width
        total = Math.max(total, current)

        if (height[start] <= height[end]) {
            start++
        }
        else {
            end--
        }
    }
    return total
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))


// var maxArea = function (height) {
//     let total = 0
//     for (let i = 0; i < height.length; i++) {
//         for (let j = i + 1; j < height.length; j++) {
//             let heights = Math.min(height[i], height[j])
//             // if (height[i] > height[j]) {
//             //     heights = height[j]
//             // }
//             // else {
//             //     heights = height[i]
//             // }
//             let width = j - i
//             let current = heights * width
//             total = Math.max(current, total)
//             // if (total < current) {
//             //     total = current
//             // }
//         }
//     }
//     return total
// };

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
