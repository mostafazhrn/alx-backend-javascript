export default function getListStudentIds(students) {
  if (!Array.isArray(students)) return [];
  return students.map((stu) => stu.id);
}
