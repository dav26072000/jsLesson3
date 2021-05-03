//  What will be the result and why?

// "" + 1 + 0     => "10" | string + number = string
// "" - 1 + 0     => NaN | string - number is not a number => NaN
// true + false   => true
// 6 / "3"        => 2 | string with all other operators try to convert string to number beside +
// "2" * "3"      => 6
// 4 + 5 + "px"   => "9px"
// "$" + 4 + 5    => "$45"
// "4" - 2        => "2"
// "4px" - 2      => NaN
// 7 / 0          => Infinity
// " -9 " + 5     => "-95"
// " -9 " - 5     => -14
// null + 1       => 1
// undefined + 1  => NaN

//Write logic that implements parseInt
function parseIntFunction(str, base) {
  str = str.split("");
  let newNum = [];
  let zeroInStart = false;
  if (str[0] === "-") {
    newNum.push("-");
  }
  for (let i = 0; i < str.length; i++) {
    if (
      !Number(str[i]) &&
      zeroInStart === false &&
      str[i] != "-" &&
      str[i] != "0"
    ) {
      return NaN;
    } else {
      if (
        typeof base !== "undefined" &&
        !Number(str[i]) &&
        zeroInStart === false
      ) {
      } else if (
        (str[i] === "0" && zeroInStart === false) ||
        (!Number(str[i]) && zeroInStart === false)
      ) {
        continue;
      }
      if (!Number(str[i]) && Number(str[i]) !== 0) {
        break;
      }
      newNum.push(str[i]);
      zeroInStart = true;
    }
  }
  if (typeof base !== "undefined") {
    let result = 0;
    for (let j = 0; j < newNum.length; j++) {
      result += Number(newNum[newNum.length - j - 1]) * Math.pow(base, j);
    }
    return result;
  } else {
    return newNum.join("");
  }
}

console.log(parseIntFunction("011110", 2));
