import { formatFromNumber, formatFromObj } from "./utils";

function formatDate(obj) {
  if (Object.prototype.toString.call(obj) === "[object Date]") {
    return formatFromObj(obj);
  }
  if (Object.prototype.toString.call(obj) === "[object Number]") {
    return formatFromNumber(obj);
  }
}
export {formatDate};
