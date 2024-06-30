const previousButton = document.querySelector(
  ".previous-button"
) as HTMLButtonElement;
const nextButton = document.querySelector(".next-button") as HTMLButtonElement;
const resetButton = document.querySelector(
  ".reset-button"
) as HTMLButtonElement;
const turnoDisplay = document.querySelector(".numero-turno") as HTMLElement;
const manualInput = document.querySelector(".input") as HTMLInputElement;
const submitButton = document.querySelector(
  ".submit-button"
) as HTMLButtonElement;

function forwardCounter(): void {
  if (turnoDisplay !== null) {
    const paintedNumber: string = turnoDisplay.innerHTML;
    const numberPaintedNumber: number = parseInt(paintedNumber);
    const resultado = numberPaintedNumber - 1;
    turnoDisplay.innerHTML = (resultado >= 0 ? resultado : 0)
      .toString()
      .padStart(2, "0");
  }
}

function backwardCounter(): void {
  if (turnoDisplay !== null) {
    const paintedNumber: string = turnoDisplay.innerHTML;
    const numberPaintedNumber: number = parseInt(paintedNumber);
    const resultado = numberPaintedNumber + 1;
    turnoDisplay.innerHTML = resultado.toString().padStart(2, "0");
  }
}

function resetCounter(): void {
  if (turnoDisplay !== null) {
    const resultado = 0;
    turnoDisplay.innerHTML = resultado.toString().padStart(2, "0");
    manualInput.value = "0";
  }
}

function manualCounter(): void {
  if (turnoDisplay !== null) {
    const inputNumber: number = parseInt(manualInput.value);
    if (!isNaN(inputNumber)) {
      turnoDisplay.innerHTML = inputNumber.toString().padStart(2, "0");
    }
  }
}

previousButton?.addEventListener("click", forwardCounter);
nextButton?.addEventListener("click", backwardCounter);
resetButton?.addEventListener("click", resetCounter);
submitButton?.addEventListener("click", manualCounter);
