function formatFromNumber(number) {
  let date = new Date(number);
  return formatFromObj(date);
}

function formatFromObj(obj) {
  let date = [obj.getFullYear(), obj.getMonth() + 1, obj.getDate()].join("-"),
    time = [obj.getHours(), obj.getMinutes(), obj.getSeconds()].join(":"),
    datetime = [date, time].join(" ");
  return datetime;
}
export { formatFromNumber, formatFromObj};
