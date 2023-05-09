const _ = require("lodash");

const item = [1,[1,23,[3,45,5]]]

const newItems = _.flattenDeep(item);
console.log(newItems);