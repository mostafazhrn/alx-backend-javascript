export const weakMap = new WeakMap();
export function queryAPI(endPoi) {
  if (weakMap.has(endPoi)) {
    const query = weakMap.get(endPoi);
    if (query >= 4) throw new Error('Endpoint load is high');
    weakMap.set(endPoi, weakMap.get(endPoi) + 1);
  } else { weakMap.set(endPoi, 1); }
}
