function longestCommonSubstring(str1, str2) {
    let n = str1.length;
    let m = str2.length;

    let lcs = [];
    for (let i = 0; i <= n; i++) {
        lcs[i] = [];
        for (let j = 0; j <= m; j++) {
            lcs[i][j] = 0;
        }
    }

    let result = "";
    let max = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (str1[i] === str2[j]) {
                lcs[i + 1][j + 1] = lcs[i][j] + 1;
                if (lcs[i + 1][j + 1] > max) {
                    max = lcs[i + 1][j + 1];
                    result = str1.substring(i - max + 1, i + 1);
                    console.log(result);
                }
            }
        }
    }
    // console.log('LCS:', lcs);

    return result;
}

let str1 = "geeksForGeeks";
let str2 = "Geekscode";

let result = longestCommonSubstring(str1, str2);

console.log("Longest Common Substring:", result);