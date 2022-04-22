import { handleRomans, handleValues, handleResult } from '../helpers';

export default function getRomanValues(text: string): [number, object] {
  const romansArr = handleRomans(text);
  const valuesArr = handleValues(romansArr);
  const resultObj = handleResult(romansArr, valuesArr)
  return [200, resultObj];
}
