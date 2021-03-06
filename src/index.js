import { formatFromNumber, formatFromObj } from "./utils";
import { format } from "./core/format";
import { parse } from "./core/parse";

function formatDate(obj) {
  if (Object.prototype.toString.call(obj) === "[object Date]") {
    return formatFromObj(obj);
  }
  if (Object.prototype.toString.call(obj) === "[object Number]") {
    return formatFromNumber(obj);
  }
}

export { formatDate, format, parse };
