let numeroTurno = document.querySelector(".numero-turno") as HTMLElement;
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

function borrarTurno(): void {
  if (numeroTurno !== null) {
    numeroTurno.innerHTML = "00";
    inputParaEscribir.value = inputParaEscribir.placeholder;
  }
}

function restarTurno(): void {
  if (numeroTurno !== null && numeroTurno !== undefined) {
    let numeroTurnoInterior: string = numeroTurno.innerHTML;
    let numeroTurnoInteriorParseado: number = parseInt(numeroTurnoInterior);
    let resultado: number = numeroTurnoInteriorParseado - 1;
    numeroTurno.innerHTML = resultado.toString().padStart(2, "0");
    if (resultado < 0) {
      borrarTurno();
    }
  }
}

function sumarTurno(): void {
  if (numeroTurno !== null && numeroTurno !== undefined) {
    let numeroTurnoInterior: string = numeroTurno.innerHTML;
    let numeroTurnoInteriorParseado: number = parseInt(numeroTurnoInterior);
    let resultado: number = numeroTurnoInteriorParseado + 1;
    numeroTurno.innerHTML = resultado.toString().padStart(2, "0");
  }
}

function escribirTurno(): void {
  const inputParaEscribirValue: string = inputParaEscribir.value;
  if (numeroTurno !== null) {
    numeroTurno.innerHTML = inputParaEscribirValue.padStart(2, "0");
  }
}

botonBorrar?.addEventListener("click", borrarTurno);
botonAnterior?.addEventListener("click", restarTurno);
botonSiguiente?.addEventListener("click", sumarTurno);
botonEnviar?.addEventListener("click", escribirTurno);
