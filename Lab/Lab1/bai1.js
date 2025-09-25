// Khai bao bien dung let or const

const fullName = "Tran Duc Hien";

const birthYear = 2005;

let isStudent = true;

// Tinh tuoi hien tai dua tren nam sinh

const today = new Date();
const currentYear = today.getFullYear();

const age = currentYear - birthYear;

console.log("Full Name:", fullName, "Age:", age, "Is Student:", isStudent);

console.log(`Toi ten la ${fullName} ${age} tuoi va toi la hoc sinh: ${isStudent}`);

// Bài 2
console.log(`------------------Bai 2------------------`);
const name = "Tran Duc Hien";
console.log(name);
const age1 = 18;
console.log(age1);

console.log(`Xin chao, minh la ${name}, nam nay ${age1} tuoi`);

// Bài 3

console.log(`------------------Bai 3------------------`);
let a=10, b=3;

console.log(
    `
    a + b = ${a + b}
    a - b = ${a - b}
    a * b = ${a * b}
    a / b = ${a / b}
    a % b = ${a % b}`
)

// Bài 4
console.log(`------------------Bai 4------------------`);

const chieuDai = 5, chieuRong = 3;

const dienTich = chieuDai * chieuRong;
const chuVi = (chieuDai + chieuRong) * 2;
console.log(`Dien tich hinh chu nhat: ${dienTich}`);
console.log(`Chu vi hinh chu nhat: ${chuVi}`);

// Bài 5
console.log(`------------------Bai 5------------------`);
const celsius = 30;
const fahrenheit = (celsius * 9/5) + 32;
console.log(`Celsius: ${celsius}°C = Fahrenheit: ${fahrenheit}°F`);

// Bài 6
console.log(`------------------Bai 6------------------`);

const money = 1000000;
const banh = 8000;

let soLuong = Math.floor(money / banh);
let tienThua = money % banh;

console.log(`So luong banh mua duoc: ${soLuong}`);
console.log(`Tien thua: ${tienThua}`);