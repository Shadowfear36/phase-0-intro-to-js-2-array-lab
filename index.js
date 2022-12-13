// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(cat) {
    cats.push(cat);
};

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name) {
    let newCats = cats.slice()
    newCats.push(name);
    return newCats;
}

function prependCat(name) {
    let newCats2 = cats.slice();
    newCats2.unshift(name);
    return newCats2;
}

function removeLastCat() {
    let newCats3 = cats.slice();
    newCats3 = cats.slice();
    newCats3.pop();
    return newCats3;

}

function removeFirstCat() {
    let newCats4 = cats.slice();
        newCats4.shift();
        return newCats4;
}