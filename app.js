let button_up= document.getElementById('count_up');
let button_down= document.getElementById('count_down');
let number= document.getElementById('demo');
button_up.addEventListener('click',up);
button_down.addEventListener('click',down);
let count=0;
function up(){
	 var x = document.getElementById("mySelect").selectedIndex;
	 let option =document.getElementsByTagName("option")[x].value;
	if(count>=0){
		let num1 = Number(count)+Number(option);
		number.textContent=num1;
		count=num1;
		console.log(option);
	}else{
		number.textContent=count;
		count+=1;
	}
}
function down(){
	var x = document.getElementById("mySelect").selectedIndex;
	 let option =document.getElementsByTagName("option")[x].value;
	if(count>0){
		let num1 = count-option;
		number.textContent=num1;
		count=num1;
		number.textContent=count;
	}else{
		number.textContent=count;
		count-=1;
	}
}
