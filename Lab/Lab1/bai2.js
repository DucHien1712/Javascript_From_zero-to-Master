// Tạo hàm tính trung bình Toán, Lý, Hóa
// Hàm nhận vào 3 điểm số (sử dụng tham số)
// Trả về điểm trung bình sử dụng return

const diemToan = 8;
const diemLy = 7;
const diemHoa = 6;

const tinhDiemTrungBinh = (toan, ly, hoa) => {
    return (toan + ly + hoa) / 3;
}

console.log("Điểm trung bình: ",tinhDiemTrungBinh(diemToan, diemHoa, diemLy));

// Tạo hàm xếp loại điểm tb
// Dựa vào điểm tb để xếp loại
// Từ 9 - 10: Xuất sắc
// Từ 8 - 8.9: Giỏi
// Từ 7 - 7.9: Khá
// Từ 5 - 6.9: Trung bình
// Dưới 5: Yếu
// Dùng if/ else-if/ else để kiểm tra và trả về xếp loại

const xepLoaiDiem = (diemTB) => {
    if (diemTB >= 9 && diemTB <= 10) {
        return "Xuất sắc"; 
    } else if (diemTB >= 8 && diemTB < 9) {
        return "Giỏi"; 
    } else if (diemTB >= 7 && diemTB < 8) {
        return "Khá"; 
    } else if (diemTB >= 5 && diemTB < 7) {
        return "Trung bình"; 
    } else {
        return "Yếu"; 
    }       
}
console.log("Xếp loại: ", xepLoaiDiem(tinhDiemTrungBinh(diemToan, diemHoa, diemLy)));

// Bài tập với if / else if / else

// Nhập vào một số (ví dụ let n = 7;).

// Nếu n > 0 → in ra "Số dương".

// Nếu n < 0 → in ra "Số âm".

// Nếu n == 0 → in ra "Số 0".

let n = 0;

const checkNumber = (n) => {
    if (n>0) {
        return "Số dương";
    }else if (n<0) {
        return "Số âm";
    } else {
        return "Số 0";
    }
}

console.log(`Số của bạn là: ${checkNumber(n)}`);

// Nhập vào tuổi (let age = 20;).

// Nếu age < 13 → in "Trẻ em".

// Nếu 13 <= age < 18 → in "Thanh thiếu niên".

// Nếu 18 <= age < 60 → in "Người lớn".

// Ngược lại → in "Người già".


let age = 20;

const checkAge = (age) => {
    if (age < 13) {
        return "Trẻ em"; 
    } else if (age >= 13 && age < 18) {
        return "Thanh thiếu niên";
    } else if (age >= 18 && age < 60) {
        return "Người lớn";
    } else {
        return "Người già";
    }   
}

console.log(`Bạn thuộc nhóm tuổi: ${checkAge(age)}`);


// Nhập 3 số, in ra số lớn nhất.

let no1 = 5, no2 = 10, no3 = 7;

const findMaxNumber = (no1, no2, no3) => {
    let max = no1;
    if (no2 > max) {
        max = no2;
    }else if (no3 > max) {
        max = no3;
    }else {
        max = no1;
    }  
    return max;
}

console.log(`Số lớn nhất là: ${findMaxNumber(no1, no2, no3)}`);

// Bài tập với switch case

// Nhập vào một số day = 1..7. In ra thứ trong tuần:

// 1 → Thứ Hai, 2 → Thứ Ba, … 7 → Chủ Nhật.

let day = 3;

switch (day) {
    case 1:
        console.log("Thứ Hai");
        break;
    case 2:
        console.log("Thứ Ba");
        break;
    case 3:
        console.log("Thứ Tư");
        break;
    case 4:
        console.log("Thứ Năm");
        break;
    case 5:
        console.log("Thứ Sáu");
        break;
    case 6:
        console.log("Thứ Bảy");
        break; 
    case 7:
        console.log("Chủ Nhật");   
    default:
        break;
}

// Nhập một ký tự (let char = "a";).

// Nếu là nguyên âm (a, e, i, o, u) → in "Nguyên âm".

// Còn lại → "Phụ âm"

let char = "b";
switch (char) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Nguyên âm");
        break;
    default:
        console.log("Phụ âm");
        break;
}

// Bài tập với for loop
// In ra các số từ 1 → 10.

for (let i = 1; i <=10; i++){
    console.log(`Số: ${i}`); // In ra số từ 1 đến
}

// Tính tổng các số từ 1 → 100.

let sum = 0;
for (let i1 = 1; i1 <= 100; i1++) {
    sum += i1; // sum = sum + i
    console.log(`Tổng từ 1 đến ${i1} là: ${sum}`);
}


// In bảng cửu chương của 5.

for (let a = 1; a <=10; a++) {
    console.log(`5 x ${a} = ${5*a}`);
    
}