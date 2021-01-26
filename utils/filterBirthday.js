import { calcAge } from "./calculateAge";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const filterBirthday = (targetMonth = "", data = []) => {
  const targetMonths = data.filter((personObject) => {
    let [year, month, day] = personObject.birthdate.split("-");
    if (monthNames[parseInt(month) - 1] === targetMonth) {
      personObject.age = calcAge(personObject.birthdate);
      personObject.day = day;
      return personObject;
    }
  });
  const sortedData = targetMonths.sort((a, b) => a.day - b.day);
  return sortedData;
};

export default filterBirthday;
