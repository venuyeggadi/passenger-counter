//document.getElementById("count-el").innerText = 5

let count = 0;
let countEl = document.getElementById('count-el');
let savedEl = document.getElementById("saved-el");

function increment() {
	count = count + 1;
	countEl.textContent = count;
}

function decrement() {
	count = count - 1;
	countEl.textContent = count;
}

function save() {
	savedEl.textContent +=(count + ", ");
	countEl.textContent = 0;
	count = 0;
}
//alternative for innerText is textContent which doesn't trim the text we get from an element
//it is also computationally smaller.