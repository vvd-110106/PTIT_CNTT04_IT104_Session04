"use strict";
function getCompletedStudents(course) {
    return course.students.filter(s => s.hasCompleted);
}
function calculateAverageScore(course) {
    const scores = course.students
        .filter(s => s.finalScore !== undefined)
        .map(s => s.finalScore);
    if (scores.length === 0) {
        return null;
    }
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
function printCourseReport(manager) {
    manager.courses.forEach((course, index) => {
        console.log(`${index + 1}.Khóa: ${course.title} (GV: ${course.instructor})`);
        console.log(`   - Tổng học viên: ${course.students.length}`);
        console.log(`   - Hoàn thành: ${getCompletedStudents(course).length} học viên`);
        const avg = calculateAverageScore(course);
        const avgStr = avg === null ? "N/A" : avg.toFixed(1);
        console.log(`   - Trung bình điểm: ${avgStr}`);
        console.log(`   - Trạng thái: ${course.isActive ? "ĐANG MỞ" : "ĐÃ ĐÓNG"}\n`);
    });
}
const manager = {
    schoolName: "Code School",
    year: 2025,
    courses: [
        {
            courseId: "C001",
            title: "TypeScript Cơ Bản",
            instructor: "Nguyễn Văn A",
            isActive: true,
            students: [
                {
                    studentId: "S1",
                    name: "Nam",
                    email: "nam@gmail.com",
                    hasCompleted: true,
                    finalScore: 9
                },
                {
                    studentId: "S2",
                    name: "Lan",
                    email: "lan@gmail.com",
                    hasCompleted: true,
                    finalScore: 8
                },
                {
                    studentId: "S3",
                    name: "Bình",
                    email: "binh@gmail.com",
                    hasCompleted: false
                }
            ]
        },
        {
            courseId: "C002",
            title: "HTML & CSS",
            instructor: "Trần Thị B",
            isActive: false,
            students: [
                {
                    studentId: "S4",
                    name: "Huy",
                    email: "huy@gmail.com",
                    hasCompleted: false
                },
                {
                    studentId: "S5",
                    name: "Minh",
                    email: "minh@gmail.com",
                    hasCompleted: false
                }
            ]
        }
    ]
};
printCourseReport(manager);

