export default function getSudentsIdsSum(students) {
  return students.reduce((acc, student) => acc + student.id, 0);
}
