const sentence = "hello there from lighthouse labs";
let timeoutCount = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timeoutCount);
  timeoutCount += 50;
}

setTimeout(() => {
  process.stdout.write('\n');
}, timeoutCount);
