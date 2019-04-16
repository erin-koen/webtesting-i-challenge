module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  let newItem = { ...item };
  newItem.enhancement < 20 ? newItem.enhancement++ : (newItem.enhancement = 20);
  return newItem;
}

function fail(item) {
  //
  const { enhancement, durability } = item;

 return enhancement > 16 // if the item's enhancement is greater than 16, it'll knowck on durability and enhancement
    ? { ...item, durability: durability - 10, enhancement: enhancement - 1 }
    : //but if it's greater than or equal to 15 but less than 16 it'll just knock durability
    enhancement >= 15
    ? { ...item, durability: durability - 10 }
    : // and if it's less than 15, it'll knock only durability and for less
      { ...item, durability: durability - 5 };
}

//Accepts an item object and returns a new item object with durability restored to 100
function repair(item) {
  newItem = { ...item };
  newItem.durability = 100;
  return newItem;
}

function get(item) {
  return { ...item };
}
