export const calcAge = (dateString) => {
  let birthday = +new Date(dateString);
  return ~~((Date.now() - birthday) / 31557600000);
};
