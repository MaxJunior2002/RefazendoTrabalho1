function resposta(preco,categoria,situacao) {
    var numero = window.document.getElementById("price");
    var categoria= document.getElementById("category");
    var situacao= document.getElementById("situation");
	var imposto, aumento, novopreco;
	preco= Number(price.value)
	categoria = Number(category.value)

	if(situacao == 'R'){
		situacao = 1;
	}else {
		situacao = 2;
	}

	

    //Valor de aumento de acordo com a tabela 1
	if(preco <= 25){
		if(categoria==1){
            (aumento=preco*5/100);
		}
		else
			if(categoria==2){
                (aumento=preco*8/100);
			}	
			else
				if(categoria==3){
                    (aumento=preco*10/100);
				}
				else{ ;
				}
	}
	if(preco > 25){
		if(categoria==1){
            (aumento=preco*12/100);
		}
		else
			if(categoria==2){
                (aumento=preco*15/100);
			}	
			else
				if(categoria==3){
                    (aumento=preco*18/100);
				}
				else{
				}
	}
	
	//Valor do imposto de acordo com a tabela 2
	if((categoria==1) || (situacao==1)) { 
        (imposto= preco*5/100);
	}
	else
		if((categoria ==2) || (categoria ==3) || (situacao==2)) { 
            (imposto = preco*8/100);
		}
		else{
		}
		
	//Calculo do novo preco
	novopreco= (preco + aumento + imposto);

	//Classificação final
	window.document.getElementById('finalprice').innerHTML = novopreco;
	if(novopreco < 50){
		window.document.getElementById('finalclassification').innerHTML = 'barato';
	}
	else
		if((novopreco >= 50) && (novopreco <= 120)){
        window.document.getElementById('finalclassification').innerHTML = 'normal';
		}
		else
			if(novopreco > 120){
                window.document.getElementById('finalclassification').innerHTML = 'caro';
			}
			else{
            window.document.getElementById('finalclassification').innerHTML = 'null';
            }
    return(novopreco);
}
