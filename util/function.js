import {days, months} from './constant';

export const getCurrentDate = () => {
  var now = new Date();
  var date = now.getDate();
  var year = now.getFullYear();

  return (
    days[now.getDay()] + ", " + months[now.getMonth()] + " " + date + ", " + year
  );
};

export const getRandomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
