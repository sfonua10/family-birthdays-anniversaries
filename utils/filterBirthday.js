import { calcAge } from "./calculateAge";
import { ordinal_suffix_of } from "./ordinalNumberSuffix";

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
  console.log('filterBirthday 1');

  const targetMonths = data.filter((personObject) => {
    let [year, month, day] = personObject.birthdate.split("-");
    if (monthNames[parseInt(month) - 1] === targetMonth) {
      personObject.age = calcAge(personObject.birthdate);
      personObject.day = ordinal_suffix_of(day);
      console.log('filterBirthday 2');
      return JSON.parse(JSON.stringify(personObject));
    }
  });
  const sortedData = targetMonths.sort((a, b) => parseInt(a.day.slice(0,2)) - parseInt(b.day.slice(0,2)));
  console.log('sortedData', sortedData);
  return JSON.parse(JSON.stringify(sortedData));
};

export default filterBirthday;
