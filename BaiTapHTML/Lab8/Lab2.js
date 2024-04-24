// cau 1
// a. Sin của một số
function sinValue(number) {
    return Math.sin(number);
}

// b. Cosin của một số
function cosValue(number) {
    return Math.cos(number);
}

// c. Tan của một số
function tanValue(number) {
    return Math.tan(number);
}

// Sử dụng các hàm trên
let number = 45; // Đổi số này thành số bạn muốn tính
console.log("Sin:", sinValue(number));
console.log("Cos:", cosValue(number));
console.log("Tan:", tanValue(number));


// cau 2
let table = new Array(10);
for (let i = 0; i < table.length; i++) {
    table[i] = new Array(10);
    for (let j = 0; j < table[i].length; j++) {
        table[i][j] = (i + 1) * (j + 1);
    }
}

// In ra bảng kết quả
for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table[i].length; j++) {
        console.log(`${i + 1} * ${j + 1} = ${table[i][j]}`);
    }
}
