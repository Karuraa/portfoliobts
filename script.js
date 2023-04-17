function calculate() {
	// Prix
	var p1 = parseInt(document.getElementById('p1').value);
	var p2 = parseInt(document.getElementById('p2').value);
	var p3 = parseInt(document.getElementById('p3').value);
	var p4 = parseInt(document.getElementById('p4').value);
	var p5 = parseInt(document.getElementById('p5').value);
	var p6 = parseInt(document.getElementById('p6').value);
	var p7 = parseInt(document.getElementById('p7').value);
	var p8 = parseInt(document.getElementById('p8').value);
	var p9 = parseInt(document.getElementById('p9').value);
	var p10 = parseInt(document.getElementById('p10').value);
	var p11 = parseInt(document.getElementById('p11').value);
	var p12 = parseInt(document.getElementById('p12').value);
	var p13 = parseInt(document.getElementById('p13').value);
	const prix = p1+p2+p3+p4+p5+p6+p7+p8+p9+p10+p11+p12+p13;
	// Quantité
	var q1 = parseInt(document.getElementById('q1').value);
	var q2 = parseInt(document.getElementById('q2').value);
	var q3 = parseInt(document.getElementById('q3').value);
	var q4 = parseInt(document.getElementById('q4').value);
	var q5 = parseInt(document.getElementById('q5').value);
	var q6 = parseInt(document.getElementById('q6').value);
	var q7 = parseInt(document.getElementById('q7').value);
	var q8 = parseInt(document.getElementById('q8').value);
	var q9 = parseInt(document.getElementById('q9').value);
	var q10 = parseInt(document.getElementById('q10').value);
	var q11 = parseInt(document.getElementById('q11').value);
	var q12 = parseInt(document.getElementById('q12').value);
	var q13 = parseInt(document.getElementById('q13').value);
	const qte = q1+q2+q3+q4+q5+q6+q7+q8+q9+q10+q11+q12+q13;
	// Total
	var t1 = parseInt(document.getElementById('t1').value=p1*q1);
	var t2 = parseInt(document.getElementById('t2').value=p2*q2);
	var t3 = parseInt(document.getElementById('t3').value=p3*q3);
	var t4 = parseInt(document.getElementById('t4').value=p4*q4);
	var t5 = parseInt(document.getElementById('t5').value=p5*q5);
	var t6 = parseInt(document.getElementById('t6').value=p6*q6);
	var t7 = parseInt(document.getElementById('t7').value=p7*q7);
	var t8 = parseInt(document.getElementById('t8').value=p8*q8);
	var t9 = parseInt(document.getElementById('t9').value=p9*q9);
	var t10 = parseInt(document.getElementById('t10').value=p10*q10);
	var t11 = parseInt(document.getElementById('t11').value=p11*q11);
	var t12 = parseInt(document.getElementById('t12').value=p12*q12);
	var t13 = parseInt(document.getElementById('t13').value=p13*q13);
    const total = t1+t2+t3+t4+t5+t6+t7+t8+t9+t10+t11+t12+t13; 
	// Remise
	const remise = parseInt(document.getElementById('r').value);
	// Sous-Total
	const sousTotal = parseInt(document.getElementById('st').value=prix*qte);
	// Sous-Total sans les remises
	const sT_r = parseInt(document.getElementById('str').value=sousTotal-(remise/100));
	// Taux d'impots
	const tauxImpots = parseInt(document.getElementById('ti').value);
	// Taxe totale
	const totalTaxe = parseInt(document.getElementById('tt').value=Math.round(sousTotal*(tauxImpots/100)));
	// Solde
	const solde = parseInt(document.getElementById('solde').value=sT_r+totalTaxe);
    // Frais exp
    const fraisexp = parseInt(document.getElementById('em').value);
}
function acces(){
	var username =prompt("Idenfiant");
	var password =prompt("Mot de Passe");
	if (username == "Admin" && password =="Admin") {
		document.location.href="code.html";
		}
		else{
			alert("Identifiant ou Mot de Passe erroné");
		}
}