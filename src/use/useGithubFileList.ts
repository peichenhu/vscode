const fileNameList = [
    // 文件
    "canJump.js",
    "climbStairs.js",
    "compareVersion.js",
    "decodeString.js",
    "entityParser.js",
    "fib.js",
    "findContentChildren.js",
    "findDiagonalOrder.js",
    "intersect.js",
    "longestCommonPrefix.js",
    "longestCommonSubsequence.js",
    "maxArea.js",
    "maxProfit.js",
    "pascalsTriangle.js",
    "permute-2.js",
    "permute.js",
    "permuteUnique.js",
    "solveNQueens.js",
    "sortArray.js",
    "uniquePaths.js",
];

export default function () {
    const url_pre =
        "https://raw.githubusercontent.com/peichenhu/school/main/app/app-leetcode/";

    return fileNameList.map((name) => {
        return {
            name: name.split(".")[0],
            url: url_pre + name,
        };
    });
}
