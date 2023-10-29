//b1 

// =>> câu lệnh kiểm tra điều kiện : chỉ chạy khối lệnh bên trong khi điều trả về true
// if (điều_kiện) {
//     khối lệnh
// }

for (let number = 1; number < 61; number++ ) {
    // số chẵn =>> chia hết cho 2 =>> chia lấy dư cho 2 bằng 0 
    if (number % 2 ==0) {
    console.log(number);
    }
}

// B2

// khởi tạo đối tượng my info 
let myinfo = {
    name: "ĐỖ MINH VŨ",
    gender:"nam",
    age: "15",
    email: "dminhvu524gmail.com",
    address: "Đống Đa , Hà Nội",
    phone: "0972137006"
  }
  
  console.log("name của myinfo là: ", myinfo.name);
  console.log("gender của myinfo là:", myinfo.gender);
  console.log("age của myinfo là: ", myinfo.age);
  console.log("email của myinfo là:", myinfo.email)
  console.log("address của myinfo là: ", myinfo.address);
  console.log("phone của myinfo là: ", myinfo.phone);

  // =>> cật nhật code lên git khi đã khởi tạo dự án thành công
  // B1: chạy lệnh: git add để thêm những file vừa cập nhật 
  // B2: git comit -m "giải thích cho những thay đổi vừa rồi"
  // B3: git push