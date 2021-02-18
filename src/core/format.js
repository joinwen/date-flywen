import { getYear, getMonth, getDate, getHours, getMinutes, getSeconds, getMilliSeconds, getTimeZone } from "../utils/dateGetUtil";
const DEFAULT_PATTERN = "yyyy-MM-dd hh:mm:ss";
function format(pattern, date) {
  if(typeof pattern == "object") {
    date = pattern;
    pattern = pattern || DEFAULT_PATTERN;
  }
  return pattern
    .replace(/yyyy/, getYear(date))
    .replace(/yy/, getYear(date, 2))
    .replace(/MM/, getMonth(date, 2))
    .replace(/M/, getMonth(date))
    .replace(/dd/, getDate(date, 2))
    .replace(/d/, getDate(date))
    .replace(/hh/, getHours(date, 2))
    .replace(/h/, getHours(date))
    .replace(/mm/, getMinutes(date, 2))
    .replace(/m/, getMinutes(date))
    .replace(/ss/, getSeconds(date, 2))
    .replace(/s/, getSeconds(date))
    .replace(/SS/, getSeconds(date,4))
    .replace(/S/, getMilliSeconds(date))
    .replace(/O/, getTimeZone(date))
}
export { format };
