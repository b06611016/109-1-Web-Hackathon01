var cells = document.getElementsByClassName("date")
var input = document.getElementById("cal-input")
var color = document.getElementById("cal-color")
var button = document.getElementById("cal-button")
input.value = ''
color.value = '#b0b0b0'
let previous = cells[0];
cells[0].style.background = "black";
let click = false;
for(i = 0; i < cells.length; ++i)
	cells[i].addEventListener("click", e => {
		e.target.style.background = "black";
		e.target.style.color = "white";
		if (!click){
			click = true;
			previous.style.background = "white";
			previous.style.color = "black";
			previous = e;
		}
		else{
			previous.path[0].target.style.background = "white";
			previous.pathe[0].style.color = "black"
			previous = e;
		}
	});
input.addEventListener('keyup', event =>{
		if (event.keyCode === 13 && event.target.value !== ''){
			const content = document.createElement("h1");
			content.innerText = input.value;
			content.style.color = color.value;
			//console.log(input.value);
			//console.log(previous);
			if (click){
				previous.path[0].innerHTML = '';
				previous.path[0].appendChild(content);
				input.value = '';
			}
			else{
				previous.innerHTML = '';
				previous.appendChild(content);
				input.value = '';
			}
		}
})
button.addEventListener('click', e => {
	if (input.value !== ''){
		const content = document.createElement("h1");
		content.innerText = input.value;
		content.style.color = color.value;
		if (click){
			previous.path[0].innerHTML = '';
			previous.path[0].appendChild(content);
			input.value = '';
		}
		else{
			previous.innerHTML = '';
			previous.appendChild(content);
			input.value = '';
		}
	}
})
color.addEventListener('click', e => {
	color.value = document.target.value;
})



//Sets the page's theme. No need to modify
var themeButton = document.getElementsByClassName("ChooseTheme")
for(var i=0; i<themeButton.length; ++i) {
    themeButton[i].addEventListener('click', e => {
        document.body.setAttribute('class', e.target.id)
    }, false)
}
