$(function () {
	let fechaFull = new Date();
	// Hora con formato
	let hora = fechaFull.toLocaleTimeString('es-cl', {
		hour: 'numeric',
		minute: 'numeric',
	});
	// Fecha con formato
	let fecha = fechaFull.toLocaleDateString('es-cl', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
	});

	// Selectores
	let containerHora = $('#insertTime');
	let containerFecha = $('#insertDate');
	let numeroVuelo = $('#flightNumber');
	let terminal = $('#terminalNumber');

	// Generador numero random
	let generator = (min, max) => {
		return Math.floor(Math.random() * (max - min) + min);
	};

	// Inyección de contenido
	containerHora.text(hora);
	containerFecha.text(fecha);
	numeroVuelo.text(generator(1, 9999));
	terminal.text(generator(1, 10));
});
