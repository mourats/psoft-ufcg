/*
UFCG
Aluno: Thiago Santos de Moura - 116210967
Disciplina: Projeto de Software
*/


const listagem_view = document.getElementById('listagem');

const mensagens = [];
var msg = {};

function update_view() {
    const items = mensagens.map(e => `<li>${e.title}, ${e.msg}, ${e.created_at}, ${e.author}</li>`).join("\n");
    listagem_view.innerHTML = '<ul>' + items + '</ul>';
}

function cadastrar() {
	
	const listagem_view = document.getElementById('titulo');
	const listagem_view = document.getElementById('mensagem');
	const listagem_view = document.getElementById('author');
	
	msg = {
		"credentials": "tmoura:t1997",
		"title": document.getElementById('titulo').value,
		"msg": document.getElementById('mensagem').value,
		"author": document.getElementById('author').value	
	}
	
	
	fetch('http://150.165.85.16:9900/api/msgs',{
		
		 method: "POST",
		 body: JSON.stringify(msg)
	}).then(response => response.json())
	.then(data => console.log("Resposta:", data));

}


function mudarEstado(entrada) {
	  var display = document.getElementById(entrada).style.display;
	  if (display == "none")
	    document.getElementById(entrada).style.display = 'block';
	  else
	    document.getElementById(entrada).style.display = 'none';
}




fetch('http://150.165.85.16:9900/api/msgs')
.then(r => r.json())
.then(data => {
    Object.assign(mensagens, data);
    update_view();
})


