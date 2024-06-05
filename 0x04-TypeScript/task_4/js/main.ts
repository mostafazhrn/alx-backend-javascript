export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const react: Subjects.React = new Subjects.React();
export const java: Subjects.Java = new Subjects.Java();

export const cTeacher: Subjects.TeacherInterface = {
  firstName: 'Mo',
  lastName: 'salah',
  experienceTeachingC: 10,
}

console.log('C++')
cpp.teacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
console.log('React')

react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
