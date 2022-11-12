const params = new URLSearchParams(window.location.search);
const respostas = params.get("respostas").split(",");
const nota = params.get("nota");
const gabarito = [3, 3, 3, 2, 1, 2, 1, 2, 4, 4];
const containerNotaFinal = document.querySelector(".nota-final");

containerNotaFinal.innerHTML = `<h2 class="nota-gabarito titulo-gabarito">Você acertou ${nota} de 10 questões!</h2>`;

const itemTabela = document.querySelectorAll(".tg-nsxs");

respostas.forEach((resposta, index) => {
	if(resposta == "%") {
	}else if (resposta == gabarito[index]) {
		itemTabela[index].classList.add("slc");
		itemTabela[index+10].classList.add("slc");
	} else if (resposta != gabarito[index]) {
		itemTabela[index].classList.add("err");
		itemTabela[index+10].classList.add("err");
	}
});
