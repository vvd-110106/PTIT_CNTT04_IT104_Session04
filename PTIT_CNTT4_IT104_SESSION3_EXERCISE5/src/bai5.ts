type Person = {
    name: string;
    age: number;
}

type Employee = {
    employee: string;
    department: string;
}

type Intersection = Person & Employee;

const infor: Intersection = {
    name: "Nguyễn Văn A",
    age: 28,
    employee: "EMP001",
    department: "Kế toán"
}

function printInfor(infor: Intersection): void {
    console.log(`${infor.name} ${infor.age}, Mã nhân viên: (${infor.employee} - Phòng: ${infor.department}`);
}