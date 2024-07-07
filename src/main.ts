let numeroTurno = document.querySelector(".numero-turno");
const botonAnterior = document.querySelector(
  ".previous-button"
) as HTMLButtonElement;
const botonSiguiente = document.querySelector(
  ".next-button"
) as HTMLButtonElement;
const botonBorrar = document.querySelector(
  ".reset-button"
) as HTMLButtonElement;
const inputParaEscribir = document.querySelector(".input") as HTMLInputElement;
const botonEnviar = document.querySelector(
  ".submit-button"
) as HTMLButtonElement;

botonAnterior?.addEventListener("click", restarTurno);

function restarTurno(): void {
  if (numeroTurno !== null) {
    let numeroTurnoInterior: string = numeroTurno.innerHTML;
    let numeroTurnoInteriorParseado: number = parseInt(numeroTurnoInterior);
    let resultado: number = numeroTurnoInteriorParseado - 1;
    numeroTurno.innerHTML = resultado.toString().padStart(2, "0");
    if (resultado < 0) {
      borrarTurno();
    }
  }
}

botonSiguiente?.addEventListener("click", sumarTurno);

function sumarTurno(): void {
  if (numeroTurno !== null) {
    let numeroTurnoInterior: string = numeroTurno.innerHTML;
    let numeroTurnoInteriorParseado: number = parseInt(numeroTurnoInterior);
    let resultado: number = numeroTurnoInteriorParseado + 1;
    numeroTurno.innerHTML = resultado.toString().padStart(2, "0");
  }
}

botonBorrar?.addEventListener("click", borrarTurno);

function borrarTurno(): void {
  if (numeroTurno !== null) {
    numeroTurno.innerHTML = "00";
  }
}

botonEnviar?.addEventListener("click", escribirTurno);

function escribirTurno(): void {
  const inputParaEscribirValue: string = inputParaEscribir.value;
  if (numeroTurno !== null) {
    numeroTurno.innerHTML = inputParaEscribirValue.padStart(2, "0");
  }
}
