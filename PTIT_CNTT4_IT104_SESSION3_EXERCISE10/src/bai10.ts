// //mảng chauws danh sch sinh viên
// let students = [];
// //tạo hàm thêm thông tin sinh viên 
// function addStudent(id, name, age, subject) {
//     const newStudent = {
//         id: id,
//         name: name,
//         age: age,
//         subjects: subject
//     };
//     students.push(newStudent);
// }
// addStudent(1, "Nguyễn Văn A", 20, [{ subjectName: "Toán", score: 8 }, { subjectName: "Lý", score: 7 }, { subjectName: "Hóa", score: 9 }]);
// //hàm in thông tin sinh viên
// function printStudents() {
//     for (let i = 0; i < students.length; i++) {
//         console.log(`thông tin sinh viên vị trí thứ ${i + 1}`);
//     }
// }
// printStudents();
// //hàm xóa sinh viên
// function deleteStudent(id) {
//     //kiểm tra xem sinh viên có tồn tại trong mảng hay không
//     const index = students.findIndex(student => student.id === id);
//     if (index !== -1) {
//         students.splice(index, 1);
//         console.log(`Đã xóa sinh viên có id ${id}`);
//     }
//     else {
//         console.log(`Không tìm thấy sinh viên có id ${id}`);
//     }
// }