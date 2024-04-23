// pop up message
alert("Welcome to Javascript!");

// pop up to ask for name and greet
var name = prompt("What is your name?");
alert("Hello " + name + "!" + " How are you?");

var x = prompt("Enter the first number");
var y = prompt("Enter the second number");
alert();
alert(x + " - " + y + " = " + (parseInt(x) - parseInt(y)));
alert(x + " * " + y + " = " + (parseInt(x) * parseInt(y)));
alert(x + " / " + y + " = " + (parseInt(x) / parseInt(y)));


// set paragraph content to result of calculation
document.getElementById("demo").innerHTML = x + " + " + y + " = " + (parseInt(x) + parseInt(y));
document.getElementById("demo").innerHTML = x + " - " + y + " = " + (parseInt(x) - parseInt(y));
document.getElementById("demo").innerHTML = x + " * " + y + " = " + (parseInt(x) * parseInt(y));
document.getElementById("demo").innerHTML = x + " / " + y + " = " + (parseInt(x) / parseInt(y));

// solve quadratic equation
var a = prompt("Enter the first number");
var b = prompt("Enter the second number");
var c = prompt("Enter the third number");
var delta = b * b - 4 * a * c;
var x1 = (-b + Math.sqrt(delta)) / (2 * a);
var x2 = (-b - Math.sqrt(delta)) / (2 * a);
alert("x1 = " + x1 + " and x2 = " + x2);

// set paragraph content to result of calculation
document.getElementById("demo").innerHTML = "x1 = " + x1 + " and x2 = " + x2;

let tenLop = prompt("Nhập tên lớp: ");
if (/^20IT\d$/.test(tenLop)) {
    console.log("Tên lớp hợp lệ.");
} else {
    console.log("Tên lớp không hợp lệ.");
}

let maSV = prompt("Nhập mã sinh viên: ");
if (/^20IT\d{3}$/.test(maSV)) {
    console.log("Mã sinh viên hợp lệ.");
} else {
    console.log("Mã sinh viên không hợp lệ.");
}

let ten = "";
while (ten.trim() === "") {
    ten = prompt("Nhập tên: ");
    if (ten.trim() === "") {
        alert("Tên không được để trống. Vui lòng nhập lại.");
    }
}
console.log("Tên đã được nhập: ", ten);

let tuoi;
while (true) {
    tuoi = parseInt(prompt("Nhập số tuổi: "));
    if (!isNaN(tuoi) && tuoi > 1 && tuoi < 130) {
        console.log("Tuổi hợp lệ.");
        break;
    } else {
        alert("Tuổi không hợp lệ. Vui lòng nhập lại.");
    }
}


let mang = [];
for (let i = 0; i < 5; i++) {
    let phanTu = parseInt(prompt(`Nhập phần tử thứ ${i+1}: `));
    mang.push(phanTu);
}

console.log("Mảng sau khi khởi tạo: ", mang);
mang.sort((a, b) => a - b);
console.log("Mảng sau khi sắp xếp: ", mang);


let chuoi = prompt("Nhập chuỗi: ");
let chuoiReplace = chuoi.replace(/a/g, 'VietHan');
console.log(chuoiReplace);


let duongDan = prompt("Nhập đường dẫn: ");
let duongDanDoi = duongDan.replace(/\\/g, '/');
console.log(duongDanDoi);


class SinhVien {
    constructor(maSV, tenSV, diaChi, soDienThoai) {
        this.maSV = maSV;
        this.tenSV = tenSV;
        this.diaChi = diaChi;
        this.soDienThoai = soDienThoai;
    }
}

function kiemTraMaSV(maSV) {
    return /^20IT\d{3}$/.test(maSV);
}

function kiemTraSoDienThoai(soDienThoai) {
    return /^\d{6,10}$/.test(soDienThoai);
}

let tenSV, diaChi, soDienThoai;
while (true) {
    let maSV = prompt("Nhập mã sinh viên: ");
    if (kiemTraMaSV(maSV)) {
        break;
    } else {
        alert("Mã sinh viên không hợp lệ. Vui lòng nhập lại.");
    }
}

while (true) {
    tenSV = prompt("Nhập tên sinh viên: ");
    if (tenSV.trim() !== "") {
        break;
    } else {
        alert("Tên sinh viên không được để trống. Vui lòng nhập lại.");
    }
}

diaChi = prompt("Nhập địa chỉ liên lạc: ");

while (true) {
    soDienThoai = prompt("Nhập số điện thoại: ");
    if (kiemTraSoDienThoai(soDienThoai)) {
        break;
    } else {
        alert("Số điện thoại không hợp lệ. Vui lòng nhập lại.");
    }
}

let sinhVien = new SinhVien(maSV, tenSV, diaChi, soDienThoai);
console.log("Thông tin sinh viên:");
console.log("Mã sinh viên:", sinhVien.maSV);
console.log("Tên sinh viên:", sinhVien.tenSV);
console.log("Địa chỉ liên lạc:", sinhVien.diaChi);
console.log("Số điện thoại:", sinhVien.soDienThoai);



