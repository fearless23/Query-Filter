const compare = (val, eq) => (itemPropValue) => {
  switch (eq) {
    case '==':
      return itemPropValue === val;
    case '>':
      return itemPropValue > val;
    case '>=':
      return itemPropValue >= val;
    case '<':
      return itemPropValue < val;
    case '<=':
      return itemPropValue <= val;

    default:
      return true;
  }
};

const final = (item,q) => {
  let a = true;
  for (let prop in q) {
    const { eq, val } = q[prop];
    if(item[prop]===null || item[prop]=== undefined){
      return false
    }
    a = a && compare(val,eq)(item[prop])
  }
  return a
}

const transform = (arr, q) => {
  if (arr && q) {
    return arr.filter((item) => final(item,q));
  }
  return arr;
}

module.exports = {transform}