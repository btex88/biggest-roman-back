import { handleRomanValues, romanPattern } from '../helpers';

function getRomanValues(text: string): [number, object] {
  const resultArr: Array<string> = handleRomanValues(text);
  console.log(resultArr);
  return [200, {}];
}

export { getRomanValues };
