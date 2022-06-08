/*Simple Timer
Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

*/
'use strict'

const args = process.argv;
const arg = args.slice(2);


const timer1 = function (param) {
  let argus = [];
  argus.push(param);

  for (let arg of argus) {
    let t = arg * 1000;

    if (arg > 0 && !isNaN) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, t);
    }
  }
};

timer1(arg);

//module.exports = timer1;
