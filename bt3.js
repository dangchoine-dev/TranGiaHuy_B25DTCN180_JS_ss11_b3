// Function Declaration
sayHello();

function sayHello() {
    console.log("Hello");
}
// kết quả Hello

// Function Expression
sayHello();
const sayHello = function() {
    console.log("Hello");
};
// Kết quả: lỗi vì hàm phải được khai báo trước khi gọi

// Arrow Function
sayHello();
const sayHello = () => {
    console.log("Hello");
};
// Kết quả: lỗi vì hàm phải được khai báo trước khi gọi
/*
Trong dự án Smart Home IoT, nên thống nhất sử dụng Arrow Function làm chuẩn ES6+ để code ngắn gọn và nhất quán
Function Declaration có thể dùng cho các hàm tiện ích, còn Function Expression dùng khi cần hàm ẩn danh
*/