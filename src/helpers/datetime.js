
import moment from 'moment';


function getMonthNumber() {
  return moment().format('MM');
}

function getYearNumber() {
  return moment().format('YYYY');
}

function getTodaysDate() {
  return moment().format('YYYY-MM-DD');
}

function isToday(dt) {
  const today = getTodaysDate();
  return dt === today;
}

function format(dt) {
  return moment(dt).fromNow();
}

function daysInMonth(year, month) {
  return moment(`${year}-${month}`, 'YYYY-MM').daysInMonth();
}

function displayDate() {
  return moment().format('DD MMMM, YYYY');
}

export default {
  getTodaysDate,
  isToday,
  format,
  displayDate,
  getMonthNumber,
  getYearNumber,
  daysInMonth,
};
