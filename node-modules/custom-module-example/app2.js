// Second way, you can import it in a desctructured way
const { inc, dec, getCount } = require("./myModule");

inc();
inc();
inc();

console.log(`The count is ${getCount()}`);
