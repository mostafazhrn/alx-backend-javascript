export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) return [];
  return students.filter((etud) => etud.location === city);
}
