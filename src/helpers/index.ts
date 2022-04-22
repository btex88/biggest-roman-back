type objRomanValues = {
  M: number;
  D: number;
  C: number;
  L: number;
  X: number;
  V: number;
  I: number;
};

const romanValuesObj: objRomanValues = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};

type romanObjType = {};

export const validateInput = (text: string) => {
  if (text.length) {
    const textArr: Array<string> = text.split('');
    const romanLabelsArr: Array<string> = Object.keys(romanValuesObj);
    return textArr.some((letter) => romanLabelsArr.includes(letter.toUpperCase()));
  }
  return false;
};

export const handleRomans = (text: string) => {
  const textArr: Array<string> = text.toUpperCase().split('');
  const romanLabelsArr: Array<string> = Object.keys(romanValuesObj);

  const result: string = textArr.reduce((acc, letter) => {
    if (romanLabelsArr.includes(letter)) acc += letter;
    else acc += ' ';
    return acc;
  }, '');

  return result.split(' ').filter((value) => value !== '');
};

const handleRomanValues = (romanStr: string) => {
  const romanInputArr = Array.from(romanStr);
  const romanLabelsArr = Object.keys(romanValuesObj);

  return romanInputArr.reduce((acc, curr, index) => {
    if (
      index < romanInputArr.length - 1 &&
      romanLabelsArr.indexOf(curr) > romanLabelsArr.indexOf(romanInputArr[index + 1])
    ) acc -= romanValuesObj[curr];
    else acc += romanValuesObj[curr];
    return acc;
  }, 0);
};

export const handleValues = (arr: Array<string>) => arr.map(handleRomanValues);

export const handleResult = (arrRoman: Array<string>, arrValues: Array<number>) => {
  const sortedValues: number[] = [...arrValues].sort((value1, value2) => value2 - value1);
  const numIndex: number = arrValues.indexOf(sortedValues[0]);
  return {
    number: arrRoman[numIndex],
    value: arrValues[numIndex],
  };
};
