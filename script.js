let XorO = ["X","O"];
let indice = 0;
function executeCheck(){
	if(document.getElementById("button1").innerText=="X"){
		if(document.getElementById("button2").innerText=="X"){
			if(document.getElementById("button3").innerText=="X"){
				alert("X venceu!");
				location.reload();
			}
		}
	}
	if(document.getElementById("button1").innerText=="X"){
		if(document.getElementById("button4").innerText=="X"){
			if(document.getElementById("button7").innerText=="X"){
				alert("X venceu!");
				location.reload();
			}
		}
	}
	if(document.getElementById("button1").innerText=="X"){
		if(document.getElementById("button5").innerText=="X"){
			if(document.getElementById("button9").innerText=="X"){
				alert("X venceu!");
				location.reload();
			}
		}
	}
	if(document.getElementById("button4").innerText=="X"){
		if(document.getElementById("button5").innerText=="X"){
			if(document.getElementById("button6").innerText=="X"){
				alert("X venceu!");
				location.reload();
			}
		}
	}
	if(document.getElementById("button2").innerText=="X"){
		if(document.getElementById("button5").innerText=="X"){
			if(document.getElementById("button8").innerText=="X"){
				alert("X venceu!");
				location.reload();
			}
		}
	}
	if(document.getElementById("button7").innerText=="X"){
		if(document.getElementById("button5").innerText=="X"){
			if(document.getElementById("button3").innerText=="X"){
				alert("X venceu!");
				location.reload();
			}
		}
	}
	if(document.getElementById("button1").innerText=="X"){
		if(document.getElementById("button5").innerText=="X"){
			if(document.getElementById("button9").innerText=="X"){
				alert("X venceu!");
				location.reload();
			}
		}
	}
	if(document.getElementById("button4").innerText=="X"){
		if(document.getElementById("button5").innerText=="X"){
			if(document.getElementById("button6").innerText=="X"){
				alert("X venceu!");
				location.reload();
			}
		}
	}
	if(document.getElementById("button1").innerText=="X"){
		if(document.getElementById("button5").innerText=="X"){
			if(document.getElementById("button9").innerText=="X"){
				alert("X venceu!");
				location.reload();
			}
		}
	}
	if(document.getElementById("button7").innerText=="X"){
		if(document.getElementById("button8").innerText=="X"){
			if(document.getElementById("button9").innerText=="X"){
				alert("X venceu!");
				location.reload();
			}
		}
	}
	if(document.getElementById("button3").innerText=="X"){
		if(document.getElementById("button6").innerText=="X"){
			if(document.getElementById("button9").innerText=="X"){
				alert("X venceu!");
				location.reload();
			}
		}
	}
	if(document.getElementById("button1").innerText=="O"){
		if(document.getElementById("button2").innerText=="O"){
			if(document.getElementById("button3").innerText=="O"){
				alert("O venceu!");
				location.reload();
			}
		}
	}
	if(document.getElementById("button1").innerText=="O"){
		if(document.getElementById("button4").innerText=="O"){
			if(document.getElementById("button7").innerText=="O"){
				alert("O venceu!");
				location.reload();
			}
		}
	}
	if(document.getElementById("button1").innerText=="O"){
		if(document.getElementById("button5").innerText=="O"){
			if(document.getElementById("button9").innerText=="O"){
				alert("O venceu!");
				location.reload();
			}
		}
	}
	if(document.getElementById("button4").innerText=="O"){
		if(document.getElementById("button5").innerText=="O"){
			if(document.getElementById("button6").innerText=="O"){
				alert("O venceu!");
				location.reload();
			}
		}
	}
	if(document.getElementById("button2").innerText=="O"){
		if(document.getElementById("button5").innerText=="O"){
			if(document.getElementById("button8").innerText=="O"){
				alert("O venceu!");
				location.reload();
			}
		}
	}
	if(document.getElementById("button7").innerText=="O"){
		if(document.getElementById("button5").innerText=="O"){
			if(document.getElementById("button3").innerText=="O"){
				alert("O venceu!");
				location.reload();
			}
		}
	}
	if(document.getElementById("button1").innerText=="O"){
		if(document.getElementById("button5").innerText=="O"){
			if(document.getElementById("button9").innerText=="O"){
				alert("O venceu!");
				location.reload();
			}
		}
	}
	if(document.getElementById("button4").innerText=="O"){
		if(document.getElementById("button5").innerText=="O"){
			if(document.getElementById("button6").innerText=="O"){
				alert("O venceu!");
				location.reload();
			}
		}
	}
	if(document.getElementById("button1").innerText=="O"){
		if(document.getElementById("button5").innerText=="O"){
			if(document.getElementById("button9").innerText=="O"){
				alert("O venceu!");
				location.reload();
			}
		}
	}
	if(document.getElementById("button7").innerText=="O"){
		if(document.getElementById("button8").innerText=="O"){
			if(document.getElementById("button9").innerText=="O"){
				alert("O venceu!");
				location.reload();
			}
		}
	}
	if(document.getElementById("button3").innerText=="O"){
		if(document.getElementById("button6").innerText=="O"){
			if(document.getElementById("button9").innerText=="O"){
				alert("O venceu!");
				location.reload();
			}
		}
	}
}
function clique1(){
	indice +=1;
	if(indice>=2){
		indice = 0;
	}
	document.getElementById("button1").innerText = XorO[indice];
	executeCheck();
	document.getElementById("button1").onclick = {};
}
function clique2(){
	indice +=1;
	if(indice>=2){
		indice = 0;
	}
	document.getElementById("button2").innerText = XorO[indice];
	executeCheck();
	document.getElementById("button2").onclick = {};
}
function clique3(){
	indice +=1;
	if(indice>=2){
		indice = 0;
	}
	document.getElementById("button3").innerText = XorO[indice];
	executeCheck();
	document.getElementById("button3").onclick = {};
}
function clique4(){
	indice +=1;
	if(indice>=2){
		indice = 0;
	}
	document.getElementById("button4").innerText = XorO[indice];
	executeCheck();
	document.getElementById("button4").onclick = {};
}
function clique5(){
	indice +=1;
	if(indice>=2){
		indice = 0;
	}
	document.getElementById("button5").innerText = XorO[indice];
	executeCheck();
	document.getElementById("button5").onclick = {};
}
function clique6(){
	indice +=1;
	if(indice>=2){
		indice = 0;
	}
	document.getElementById("button6").innerText = XorO[indice];
	executeCheck();
	document.getElementById("button6").onclick = {};
}
function clique7(){
	indice +=1;
	if(indice>=2){
		indice = 0;
	}
	document.getElementById("button7").innerText = XorO[indice];
	executeCheck();
	document.getElementById("button7").onclick = {};
}
function clique8(){
	indice +=1;
	if(indice>=2){
		indice = 0;
	}
	document.getElementById("button8").innerText = XorO[indice];
	executeCheck();
	document.getElementById("button8").onclick = {};
}
function clique9(){
	indice +=1;
	if(indice>=2){
		indice = 0;
	}
	document.getElementById("button9").innerText = XorO[indice];
	executeCheck();
	document.getElementById("button9").onclick = {};
}
