export default function guardrail(mathFunction) {
  const que = [];
  try {
    que.push(mathFunction());
  } catch (err) {
    que.push(err.toString());
  } finally {
    que.push('Guardrail was processed');
  }
  return que;
}
