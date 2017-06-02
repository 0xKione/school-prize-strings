// src/App.js

class App {
  constructor(totalDays) {
    this.totalDays = totalDays || 30;
    this.options = ['O', 'A', 'L'];
  }

  setTotalDays(totalDays) {
    this.totalDays = totalDays;
  }

  /*
   *  This was the attempt, assisted by referencing the approach/algorithm from:
   *  http://jsomers.net/blog/project-euler-problem-191-or-how-i-learned-to-stop-counting-and-love-induction
   *  to point me in the right direction, specifically the six categories and the use of induction,
   *  I was able to arrive at this solution. This solution is much more elegant, as it's only a few
   *  lines of code, but also runs extremely quickly (~1.3 ms) for a 30-day string.
   *
   *  Categories of 'prize' strings:
   *    1) String ending in AA
   *    2) String with no L's
   *    3) String ending with only one A
   *    4) String ending in AA with only 1 L
   *    5) String ending in A with only 1 L
   *    6) String with only 1 L and not ending in A
   *
   *  The values of each category and the number of prize strings for up to a 5-day span:
   *    day=1        day=2        day=3         day=4         day=5
   *    nPrizeStr=3  nPrizeStr=8  nPrizeStr=19  nPrizeStr=43  nPrizeStr=94
   *    cat1=0       cat1=1       cat1=2        cat1=5        cat1=12
   *    cat2=2       cat2=4       cat2=7        cat2=13       cat2=24
   *    cat3=1       cat3=2       cat3=5        cat3=12       cat3=27
   *    cat4=0       cat4=0       cat4=1        cat4=3        cat4=8
   *    cat5=0       cat5=1       cat5=3        cat5=8        cat5=19
   *    cat6=1       cat6=3       cat6=8        cat6=19       cat6=43
   *
   *  Therefore, the formula for each new day added can be written:
   *    day       => day + 1
   *    nPrizeStr => (2 * nPrizeStr) + (cat2 - cat1)
   *    cat1      => cat3
   *    cat2      => (2 * cat2) - (cat1 - cat4)
   *    cat3      => nPrizeStr - (cat1 + cat3)
   *    cat4      => cat5
   *    cat5      => cat6
   *    cat6      => nPrizeStr
   */
  run() {
    // Seed the algorithm with the values from day=1
    let day = 1;
    let nPrizeStr = 3;
    let cat1 = 0;
    let cat2 = 2;
    let cat3 = 1;
    let cat4 = 0;
    let cat5 = 0;
    let cat6 = 1;

    while (day < this.totalDays) {
      // Cache the values that will change
      const origNPrizeStr = nPrizeStr;
      const origCat1 = cat1;

      // Order matters so nothing is overwritten
      nPrizeStr = (2 * nPrizeStr) + (cat2 - cat1);
      cat2 = (2 * cat2) - (cat1 - cat4);
      cat1 = cat3;
      cat3 = origNPrizeStr - (origCat1 + cat3);
      cat4 = cat5;
      cat5 = cat6;
      cat6 = origNPrizeStr;

      day += 1;
    }

    return nPrizeStr;
  }
}

export default App;
