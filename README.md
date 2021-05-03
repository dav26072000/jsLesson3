# its my home work

### I did it , I have no questions

---

![Drag Racing](https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)

---

### some parts of my code

```javascript
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

console.log(parseIntFunction("-5000"));
```

---

---

[my fb](https://www.facebook.com/david.matiasvili.5)
