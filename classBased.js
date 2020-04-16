const compare = (itemPropValue, eq, val) => {
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

class Query {
  users;
  constructor(users){    this.users = users  }

  where(prop,eq,val){
    this.users = this.users.filter((item) => compare(item[prop],eq, val));
    return this
  }
}

module.exports = {Query}