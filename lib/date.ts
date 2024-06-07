export const convertDateFormat = (inputDate: Date) => {
  const months = [
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

  const month = months[inputDate.getMonth()]; // getMonth() returns a zero-based index
  const day = inputDate.getDate();
  const year = inputDate.getFullYear();

  return `${month} ${day}, ${year}`;
};
