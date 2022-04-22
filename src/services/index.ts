import { handleRomans, handleValues, handleResult } from '../helpers';

export default function getRomanValues(text: string): [number, object] {
  const romansArr = handleRomans(text);
  console.log('01 - ', romansArr);
  const valuesArr = handleValues(romansArr);
  console.log('02 - ', valuesArr);
  const resultObj = handleResult(romansArr, valuesArr)
  console.log('03 - ', resultObj);
  return [200, resultObj];
}
