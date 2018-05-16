/*
0 - PEDRA
1 - PAPEL
2 - TESOURA
*/

var vitoria=0, derrota=0, empatou=0; 

/*Função que vai reiniciar o jogo*/
function resetar (r){
	if(r==0){
		vitoria = vitoria *0;
		derrota = derrota *0;
		empatou = empatou *0;
		document.getElementById("placar-jogador").value = 0;
		document.getElementById("placar-computador").value = 0;
		document.getElementById("empates").value = 0;
		document.getElementById("i").innerHTML = "<b>Resultado</b>"; 			
		document.getElementById("i").style.color = "black"; 

			}
}

function escolha (t){
console.log("Seu Número: " +t);
 
var c= Math.floor((Math.random()*3));// gera o número aleatório
console.log("Número do COMPUTADOR É  = "+c);

if(t==c){
	empatou++;
	console.log("Você empatou ( "+empatou+" ) vezes!");
	document.getElementById("empates").value = empatou;
	document.getElementById("i").innerHTML = "<h1>Você empatou!</h1>";
	document.getElementById("i").style.color="blue";
	if ((t ==1)& (c == 1)) {document.getElementById("jogadapc").src ="imagem/iconmao48.png";}
	if (t ==2) {document.getElementById("jogadapc").src ="imagem/icontesoura48.png";}
	if (t ==0){document.getElementById("jogadapc").src ="imagem/iconpedra48.png";}
	}
	else{
		if((t==0) & (c==1)){
			derrota=derrota +1;
			console.log("Você jogou PEDRA e perdeu!");
			document.getElementById("i").innerHTML="Você jogou PEDRA e perdeu!";
			document.getElementById("jogadapc").src ="imagem/iconmao48.png";
			document.getElementById("i").style.color = "red";
			document.getElementById("placar-computador").value = derrota;


			}
		if((t==0) & (c==2)){
			vitoria = vitoria +1;
			console.log("Você jogou PEDRA e ganhou!");
			document.getElementById("i").innerHTML="Você jogou PEDRA e ganhou!";
			document.getElementById("jogadapc").src ="imagem/icontesoura48.png";
			document.getElementById("i").style.color = "green";
			document.getElementById("placar-jogador").value = vitoria;

			}
		if((t==1) & (c==0)){
			vitoria = vitoria +1;
			console.log("Você jogou PAPEL e ganhou!");
			document.getElementById("i").innerHTML="Você jogou PAPEL e ganhou!";
			document.getElementById("jogadapc").src ="imagem/iconpedra48.png";
			document.getElementById("i").style.color = "green";
			document.getElementById("placar-jogador").value = vitoria;

			}
		if((t==1) & (c==2)){
			derrota=derrota +1;			
			console.log("Você jogou PAPEL e Perdeu!");
			document.getElementById("i").innerHTML="Você jogou PAPEL e Perdeu!";
			document.getElementById("jogadapc").src ="imagem/icontesoura48.png";
			document.getElementById("i").style.color = "red";
			document.getElementById("placar-computador").value = derrota;

			}
		if((t==2) & (c==0)){
			derrota=derrota +1;			
			console.log("Você jogou TESOURA e Perdeu!");
			document.getElementById("i").innerHTML= "Você jogou TESOURA e Perdeu!";
			document.getElementById("i").style.color = "red";
			document.getElementById("jogadapc").src ="imagem/iconpedra48.png";
			document.getElementById("placar-computador").value = derrota;
		
			}
		if((t==2) & (c==1)){
			vitoria = vitoria +1;
			console.log("Você jogou TESOURA e ganhou!");
			document.getElementById("i").innerHTML="Você jogou TESOURA e ganhou!";
			document.getElementById("jogadapc").src ="imagem/iconmao48.png";
			document.getElementById("i").style.color = "green";
			document.getElementById("placar-jogador").value = vitoria;
			}
		
		

		}
			}
/*
var Resultado ="imagem/icontesoura48.png";

		document.getElementById("i").innerHTML = Resultado;
		document.getElementById("i").style.color = "red";
		document.writeln("Estou com sono não! ");


		var h;
		var l;
		var k = testedafuncao(2,3);
		function testedafuncao(h,l){
			var resposta = h+l-0.5;
			return resposta;

		}
		console.log("O resultado da função foi :" + k);*/
