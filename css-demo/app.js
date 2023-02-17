// export function sayHello() {
//     console.log("say hello");
// }

let memo = {};
function fibMemo(n) {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];
    console.log(`I have to add ${n} to the stack`);
    let result = fibMemo(n - 1) + fibMemo(n - 2);
    memo[n] = result;
    return result;
}

function fibonacci(n) {
    const memo = new Map();
    if (n <= 0) return n;
    if (memo.has(n)) return memo.get(n);
    console.log(`I have to add ${n} to the stack`);
    let result = fibMemo(n - 1) + fibMemo(n - 2);
    memo.set(n, result);
    return result;
}

fibonacci(20)



