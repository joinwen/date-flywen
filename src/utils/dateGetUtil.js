const getYear = (date, w) => {
  [date, w] = helperOverload(date, w);
  return helperPadZero(date.getFullYear().toString(), w);
}

const getMonth = (date, w) => {
  [date, w] = helperOverload(date, w);
  return helperPadZero((date.getMonth() + 1).toString(), w);
}

const getDate = (date, w) => {
  [date, w] = helperOverload(date, w);
  return helperPadZero(date.getDate().toString(), w);
}

const getHours = (date, w) => {
  [date, w] = helperOverload(date, w);
  return helperPadZero(date.getHours().toString(), w);

}
const getMinutes = (date, w) => {
  [date, w] = helperOverload(date, w);
  return helperPadZero(date.getMinutes().toString(), w);
}

const getSeconds = (date, w) => {
  [date, w] = helperOverload(date, w);
  return helperPadZero(date.getSeconds().toString(), w);
}

const getMilliSeconds = (date, w) => {
  [date, w] = helperOverload(date, w);
  return helperPadZero(date.getMilliseconds().toString(), w);

}

const getTimeZone = (date) => {
  date = date || new Date();
  let timeZone = date.getTimezoneOffset(),
    zone = Math.abs(timeZone / 60),
    offset = timeZone % 60;
  zone = helperPadZero(zone.toString(), 2);
  offset = helperPadZero(offset.toString(), 2);
  return timeZone < 0 ? "+" + zone + offset : "-" + zone + offset;
}

const helperOverload = (date, w) => {
  if(typeof date === "number") {
    w = date;
    date = new Date();
  };
  return [ date, w ];
}

const helperPadZero = (str, w) => {
  w = w || str.length;
  for(let i = 0; i < w; i++) {
    str = "0" + str;
  }
  let reg = new RegExp(`(.{${w}})$`);
  return reg.exec(str)[1];
}
export {
  getYear,
  getMonth,
  getDate,
  getHours,
  getMinutes,
  getSeconds,
  getMilliSeconds,
  getTimeZone
}
