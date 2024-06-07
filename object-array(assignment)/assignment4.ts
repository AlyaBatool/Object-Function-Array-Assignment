//Assignment 4: Student List Organizer
interface Student{
    name:string;
    senior:boolean;
    assignments:boolean;
};
const student1:Student={
    name:'Zain',
    senior:true,
    assignments:true,
};
const student2:Student={
    name:'Tasha',
    senior:true,
    assignments:false,
}
const student3:Student={
    name:'Jospeh',
    senior:false,
    assignments:true,
}
const students:Student[]=[student1,student2,student3];//array of students
function senior(studentList: Student[]): Student[] {
    return studentList.filter(student => student.senior && student.assignments);
}
function updateStudent(studentList: Student[]): Student[] {
    return studentList.filter(student => student.assignments);
}
console.log("Those who have completed assignment and also are senior: ", senior(students));
console.log('\n');
console.log("Updated List of Students are : ", updateStudent(students));