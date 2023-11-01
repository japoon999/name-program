let array = ["aziz", "ismayil", "edqar", "rehim"];

let name = prompt("Ad elave et!");

let number = array.indexOf(name);

if (number !== -1) {
    alert(number)
}

else {

    alert(-1)
}