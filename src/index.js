  module.exports = function zeros(expression) {
      let kol = 0;
      let kol2 = 0;
      let m = 0;
      let arr = expression.split('*');
      for (let i = 0; i < arr.length; i++) {
          let elem = parseFloat(arr[i]);
          let count = [...arr[i]].filter(l => l === '!').length;
          if (count === 2 && elem % 2 === 0) {
              let c = elem / 2;
              for (let j = 5; c / j >= 1; j *= 5) {
                  kol += Math.floor(c / j);
              }
              kol2 += c;
          }
          if (count === 2 && (elem % 2 != 0)) {
              let e = elem - 1;
              for (let j = 5; elem / j >= 1; j *= 5) {
                  kol += Math.floor(elem / j);
              }
              let e1 = e / 2;
              for (let j = 5; e1 / j >= 1; j *= 5) {
                  kol -= Math.floor(e1 / j);
              }
          }
          if (count === 1) {
              for (let j = 5; elem / j >= 1; j *= 5) {
                  kol += Math.floor(elem / j);
              }
              for (let j = 2; elem / j >= 1; j *= 2) {
                  kol2 += Math.floor(elem / j);
              }
          }
      }

      m = Math.min(kol, kol2);
      return m;
  }