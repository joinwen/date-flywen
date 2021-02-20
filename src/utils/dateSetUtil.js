function setDatePart(date, parts, value, local) {
  date[`set${parts}`](value);
}
function buildRegexp(pattern) {
  let local = pattern.indexOf("O") > -1;
  let matches = [
    {
      pattern: /y{1,4}/,
      regexp: "\\d{1,4}",
      fn: (date, value) => {
        setDatePart(date, "FullYear", value, local);
      }
    },
    {
      pattern: /M{1,2}/,
      regexp: "\\d{1,2}",
      fn: (date, value) => {
        setDatePart(date, "Month", value - 1, local);
      }
    },
    {
      pattern: /(?<!\\)(d{1,2})/,
      regexp: "\\d{1,2}",
      fn: (date, value) => {
        setDatePart(date, "Date", value, local);
      }
    },
    {
      pattern: /h{1,2}/,
      regexp: "\\d{1,2}",
      fn: (date, value) => {
        setDatePart(date, "Hours", value, local);
      }
    },
    {
      pattern: /m{1,2}/,
      regexp: "\\d{1,2}",
      fn: (date, value) => {
        setDatePart(date, "Minutes", value, local);
      }
    },
    {
      pattern: /s{1,2}/,
      regexp: "\\d{1,2}",
      fn: (date, value) => {
        setDatePart(date, "Seconds", value, local);
      }
    },
    {
      pattern: /S{1,2}/,
      regexp: "\\d{1,4}",
      fn: (date, value) => {
        setDatePart(date, "Milliseconds", value, local);
      }
    },
    {
      pattern: /O/,
      regexp: "[+-]\\d{4}",
      fn: (date, value) => {
        setDatePart(date, "Month", value, local);
      }
    }
  ];
  let regexp = matches.reduce((prev, next) => {
    if(next.pattern.test(prev.pattern)) {
      next.index = prev.pattern.match(next.pattern).index;
      prev.pattern = prev.pattern.replace(next.pattern, "(" + next.regexp + ")");
    } else {
      next.index = -1;
    }
    return prev;
  }, {pattern, index: []});
  matches = matches.filter(m => m.index > -1);
  return [regexp, matches];
}

export { buildRegexp, setDatePart };
