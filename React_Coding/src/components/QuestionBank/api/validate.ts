export const validateAnswer = (
  answer: string,
  correctAnswer: string
): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(answer === correctAnswer);
    }, 2000);
  });
};
