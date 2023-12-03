let IntervId;
let iniciado = false;

function iniciar() {
	if (!iniciado) {
  	document.querySelector('#contador').style.color = 'black';
    IntervId = setInterval(function () {
          document.querySelector('[id="contador"]').textContent = relogio();  	
    }, 1000);
    iniciado = true;
  }
}

function relogio() {
		let hoje = new Date();
		let hora = hoje.getHours().toString().padStart(2, '0');
    let minuto = hoje.getMinutes().toString().padStart(2, '0');
    let segundo = hoje.getSeconds().toString().padStart(2, '0');
    
    return `${hora}:${minuto}:${segundo}`;
}

function parar(){
	if (iniciado) {
  	iniciado = false;
		document.querySelector('#contador').style.color = 'red';
		clearInterval(IntervId);
  }
}

function desligar(){
	clearInterval(IntervId);
	document.querySelector('[id="contador"]').textContent = "";  	
}
