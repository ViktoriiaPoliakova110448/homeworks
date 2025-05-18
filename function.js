function pow(x, y) {
    let start = 1;
    if (y >= 0) {
      for (let i = 0; i < y; i++) {
        start *= x;
      }
    } else {
        console.log("Bad Request")
        start = 400
    }
    return start;
  }

console.log(pow(2, 3))