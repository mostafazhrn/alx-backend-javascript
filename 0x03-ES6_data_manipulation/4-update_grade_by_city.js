export default function updateStudentGradeByCity(students, city, nuevoGr) {
  return students
    .filter((x) => x.location === city)
    .map((student) => {
      const gra = nuevoGr
        .filter((x) => x.studentId === student.id)
        .map((y) => y.grade)[0];
      const grade = gra || 'N/A';
      return { ...student, grade };
    });
}
