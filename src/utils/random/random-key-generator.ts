const generateRandomKey = (): string => {
  const randomKey =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  return randomKey;
};

export default generateRandomKey;
