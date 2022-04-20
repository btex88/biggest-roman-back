export const romanPattern: Array<string> = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

export const validateInput = (inputValue: string) => {
  if (inputValue.length) {
    const splitInput: Array<string> = inputValue.split('');
    return splitInput.some((letter) => romanPattern.includes(letter.toUpperCase()));
  }
  return false
};
