const infor = {
    name: "Nguyễn Văn A",
    age: 28,
    employee: "EMP001",
    department: "Kế toán"
};
function printInfor(infor) {
    console.log(`${infor.name} ${infor.age}, Mã nhân viên: ${infor.employee} - Phòng: ${infor.department}`);
}

printInfor(infor);