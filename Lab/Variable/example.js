// Khai báo biến (variable declaration) cú pháp chung <Từ khoá> <Tên biến> = <Giá trị>;

// Khai báo biến với từ khoá var
var fullName = 'Nguyễn Văn A';
console.log(fullName); // In ra giá trị của biến fullName

// Khai báo biến với từ khoá let
let age = 18;
console.log(age); // In ra giá trị của biến age

// Khai báo biến với từ khoá const
const isMarried = false;
console.log(isMarried); // In ra giá trị của biến isMarried

// Điểm khác nhau giữa let và const
// Biến khai báo với từ khoá let có thể thay đổi giá trị
let city = 'Hà Nội';
city = 'Hồ Chí Minh'; // Thay đổi giá trị
console.log(city); // In ra giá trị mới của biến city

// Biến khai báo với từ khoá const không thể thay đổi giá trị
const country = 'Việt Nam';
country = 'Lào'; // Lỗi: Assignment to constant variable.
console.log(country); // In ra giá trị của biến country

// Phân biệt let và var về phạm vi (scope)
// Biến khai báo với var có phạm vi toàn cục hoặc hàm dùng bất kỳ đâu trong hàm

// Biến khai báo với let có phạm vi khối (block scope) chỉ dùng trong khối lệnh nơi nó được khai báo
// Lưu ý: Nên dùng let và const thay vì var để tránh các lỗi không mong muốn do phạm vi của var.