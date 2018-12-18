// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
 return drivers.push(name);
}

function destructivelyPrependDriver(name) {
 return drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  return drivers.pop();
}

function destructivelyRemoveFirstDriver() {
 return drivers.shift();
}

function appendDriver(name) {
return [...drivers, name];
}

function prependDriver(name) {
  return [name, ...drivers];
}

function removeLastDriver() {
  list = [...drivers];
  list.pop();
  return list;
}

function removeFirstDriver() {
  list = [...drivers];
  list.shift();
  return list;
}