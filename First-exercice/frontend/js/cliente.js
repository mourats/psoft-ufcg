/*
UFCG
Aluno: Thiago Santos de Moura - 116210967
Disciplina: Projeto de Software
*/


if(typeof moment!=="undefined"){moment.locale("pt-BR")}

const listagem_view = document.getElementById('listagem');

const mensagens = [];
var msg = {};

function update_view() {
       
    const items = mensagens.map(e => {
    	
    	if(e.author !== "Ígaru"){
    	const color = generate_color();
    	const msg=`<p>${e.msg}</p>`;
    	const title=`<div class="title">${e.title}</div>`;
    	const who_when=`<div class="dono font-italic">${e.author}, há ${moment(e.created_at).fromNow()}</div>`;
    	const tudo=`<div>${title}${msg}${who_when}</div>`;
    	
    	return`<div class="mensagem ${color}">${tudo}</div>`}}).join("");
    
    
    listagem_view.innerHTML='<div class="mural">'+items+"</div>";
}

function generate_color() {
	  return Math.floor(Math.random()*(4-1))+1 === 1?  "bg-mycolor" : "bg-primary";
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



fetch('http://150.165.85.16:9900/api/msgs') .then(r => r.json()) .then(data => {
	Object.assign(mensagens, data);
	mensagens.sort((a,b)=>moment(b.created_at)-moment(a.created_at));
	update_view(); })


/*
function load_messages(){
	const promise = fetch("http://150.165.85.16:9900/api/msgs")
	.then(r=>r.json())
	.then(data=>{Object.assign(mensagens,data);mensagens.sort((a,b)=>moment(b.created_at)-moment(a.created_at))})
	.catch(()=>{alert("Sem conexão para a Internet?")});return promise}

(function(){load_messages().then(()=>update_view());
frontend_id = frontend_input.value=localStorage.getItem("frontend_id");
secret=secret_input.value=localStorage.getItem("secret");
update_button_new_message()})();
*/
