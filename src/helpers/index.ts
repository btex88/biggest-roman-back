export const romanPattern: Array<string> = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

type objRomanValues = {
  I: number;
  V: number;
  X: number;
  L: number;
  C: number;
  D: number;
  M: number;
};

export const romanValues: objRomanValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export const validateInput = (text: string) => {
  if (text.length) {
    const textArr: Array<string> = text.split('');
    return textArr.some((letter) => romanPattern.includes(letter.toUpperCase()));
  }
  return false;
};

export const handleRomans = (text: string) => {
  const textArr: Array<string> = text.toUpperCase().split('');
  const result: string = textArr.reduce((acc, letter) => {
    if (romanPattern.includes(letter)) acc += letter;
    else acc += ' ';
    return acc;
  }, '');
  return result.split(' ').filter((value) => value !== '');
};

export const handleValues = (arr: Array<string>) => {
  const resultArr: Array<number> = arr.reduce((acc, curr) => {
    const valuesArr = curr.split('').map((value) => romanValues[value]);
    acc.push(valuesArr.reduce((accum, current) => accum + current));
    return acc;
  }, []);
  return resultArr;
};

export const handleResult = (arrRoman: string[], arrValues: number[]) => {
  const sortedValues: number[] = [...arrValues].sort((value1, value2) => value2 - value1);
  const numIndex: number = arrValues.indexOf(sortedValues[0]);
  return {
    number: arrRoman[numIndex],
    value: arrValues[numIndex],
  }
};
