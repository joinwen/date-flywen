import { buildRegexp, setDatePart } from "../utils/dateSetUtil";
const now = new Date();
function parse(pattern, str) {
  if(!pattern) {
    throw new Error("pattern is undefined");
  }
  if(!str) {
    throw new Error("str is undefined");
  }
  let local = pattern.indexOf("O") > -1;
  let [regex, matches] = buildRegexp(pattern),
    parts = str.match(new RegExp(regex.pattern));
  matches.forEach((match,index) => {
    match.fn(now, parts[index + 1]);
  })
  return now;
}

export { parse };
