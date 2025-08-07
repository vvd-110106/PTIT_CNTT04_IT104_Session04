interface person {
    name:string,
    age:number,
    email:string
}

let student: person = {
    name: "Vũ Văn Đoàn",
    age: 20,
    email: "doan123@gmail.com"
}

console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}`);