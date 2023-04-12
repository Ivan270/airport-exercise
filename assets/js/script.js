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
	// Modal

	$('body').append(`
    <div
    class="modal fade in"
    id="aeroModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="aeroModalLabel"
>
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">Pasajero, se le recuerda que para abordar el avión debe tener en mano su pasaporte y su boleto de embarque. Manténgase atento a los avisos mediante esta plataforma.</div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    </div>
    `);
	$('#aeroModal').modal('show');
});
