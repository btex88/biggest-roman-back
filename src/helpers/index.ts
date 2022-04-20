export const romanPattern: Array<string> = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

export const checkInput = (inputValue: string) => inputValue.length > 0;

export const validateInput = (inputValue: string) => inputValue.split('')
  .some((letter) => romanPattern.includes(letter));
