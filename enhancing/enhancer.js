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
  const { enhancement , durability } = item;
  
  enhancement>16 ? {...item, durability: durability - 10, enhancement: enhancement -1} : enhancement 
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
