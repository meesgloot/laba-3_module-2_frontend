function run() {
    let li = document.createElement("li");
	li.innerHTML = 'run';
	spisok.prepend(li);
}
function theatre() {
	let li = document.createElement("li");
	li.innerHTML = 'theatre';
	let size = document.querySelector('#spisok').childNodes.length;
	
	if(size > 1 && size < 3){
		let zero = spisok.children[0].innerText;
		if(zero === 'run'){
			spisok.append(li);
		}else{
			spisok.prepend(li);
		}
	}else if(size > 2){
		let y = spisok.children[Math.floor(size / 2)];
		y.insertAdjacentHTML("beforebegin", "<li>theatre</li>");
	}
	else{
		spisok.append(li);
	}
} 
function exhibition() {
	let li = document.createElement("li");
	li.innerHTML = 'exhibition';
	spisok.append(li);
}
function aqua(){
	let block = document.querySelector('#block');
	if(block.style.backgroundColor === "aqua"){
		block.innerText = "passed 10 december";
		block.style.backgroundColor = "pink";
	}else{
		block.innerText = "Assesment 2";
		block.style.backgroundColor = "aqua";
	}
}
function pink(){
	let block = document.querySelector('#oooy');
	if(block.style.backgroundColor === "pink"){
		block.innerText = "passed 10 labs";
		block.style.backgroundColor = "aqua";
	}else{
		block.innerText = "Number labs";
		block.style.backgroundColor = "pink";
	}
}
setInterval(() => mig.hidden = !mig.hidden, 1000)
