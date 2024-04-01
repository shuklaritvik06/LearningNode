import logUpdate from "log-update";

// const frames = ["Loading.", "Loading..", "Loading..."];
// let index = 0;

// setInterval(() => {
//   const frame = frames[index++ % frames.length];
//   logUpdate(frame);
// }, 80);

// const frames = ["Loading.", "Loading..", "Loading..."];
// let index = 0;

// setInterval(() => {
//   const frame = frames[index++ % frames.length];
//   logUpdate(`The current process is ${frame}`);
// }, 80);

const val = "▮";
const step = 5;
const total = 100;
let num = 1;

setInterval(() => {
  const frame = val.repeat(num);
  if (num < total / step) {
    num++;
  }
  logUpdate(`Loading [${frame}] ${num * step}%`);
}, 80);
