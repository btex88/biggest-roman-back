import { handleRomans, handleValues, handleResult } from '../helpers';

function getRomanValues(text: string): [number, object] {
  const romansArr = handleRomans(text);
  const valuesArr = handleValues(romansArr);
  const resultObj = handleResult(romansArr, valuesArr)
  console.log(resultObj);
  return [200, resultObj];
}

export { getRomanValues };

{
  number: 'VI'
  value: 6
}