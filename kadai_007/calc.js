// 変数numに1以上の正の数を代入
let num = 15;

// 3と5の倍数かどうかを最初に判定
if (num % 3 === 0 && num % 5 === 0) {
    console.log("3と5の倍数です");
}
// 次に3の倍数かどうかを判定
else if (num % 3 === 0) {
    console.log("3の倍数です");
}
// 次に5の倍数かどうかを判定
else if (num % 5 === 0) {
    console.log("5の倍数です");
}
// 上記に当てはまらない場合
else {
    console.log(num);
}