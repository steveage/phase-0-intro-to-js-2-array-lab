let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}


function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const copyOfCats = getCopies();
    copyOfCats.push(name);
    return copyOfCats;
}

function getCopies() {
    return cats.slice();
}

function prependCat(name) {
    const copyOfCats = getCopies();
    copyOfCats.unshift(name);
    return copyOfCats;
}

function removeLastCat() {
    const copyOfCats = getCopies();
    copyOfCats.pop();
    return copyOfCats;
}

function removeFirstCat() {
    const copyOfCats = getCopies();
    copyOfCats.shift();
    return copyOfCats;
}