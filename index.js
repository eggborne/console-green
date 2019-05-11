console.green = (...msgarguments) => {
  coloredConsole('#afa', msgarguments);
};
console.orange = (...msgarguments) => {
  coloredConsole('orange', msgarguments);
};
console.pink = (...msgarguments) => {
  coloredConsole('pink', msgarguments);
};
console.color = (message, color='salmon') => {
  console.log('%c' + message + ' -------------------', `color:${color}`);
};
console.big = (message, color='red', size='20px') => {
  console.log('%c' + message + ' -------------------', `color:${color}; font-size:${size}; font-weight:bold`);
};
const coloredConsole = (color, msgarguments) => {
  let args = [...msgarguments];
  let output = [];
  args.map(msg => {
    if (typeof msg === 'number') {
      msg = `${msg} (int)`
    }
    output.push(msg);
  });
  output = output.join(' ');
  console.info('%c' + output, `color:${color}; font-size:14px; font-weight:bold`);
};