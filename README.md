# Laboratorio 5: Funciones

**Cómo compilar el repositorio:**

- Clona el proyecto
- Instala npm install
- Ejecuta npm run dev

**Ejercicio:**

Queremos implementar una pantalla en la que aparezca un display con el turno actual de una clínica y un botón para pasar al siguiente turno y otro para volver al anterior.

A implementar:

Básico

- En grande se muestra el turno.
- El operario puede ir dándole a siguiente o anterior y el turno cambia.
- Además de esto vamos a añadir un botón de reset que pone el turno a 0.

Avanzado

- Como challenge puedes añadir una caja de texto y un botón que permita cambiar el turno a un valor que ponga el operario.

Challenge

- Sea el número que sea, lo quiero mostrar siempre con dos digitos (es decir el 1 -> 01, el 2 -> 02, el 10 -> 10, el 11 -> 11, etc), investiga como puedes formatear un número para que siempre tenga dos dígitos.
- Pista: Puedes usar la función padStart, la cual nos ayuda a añadir ceros o cualquier otro carácter que queramos al principio de una cadena de texto..
- Si lo implementas en TypeScript en modo estricto, mejor que mejor.

**Resultado**

![Captura de pantalla 2024-07-07 a las 15 18 58](https://github.com/sandrusmb/laboratorio-5-funciones/assets/44322246/a66ebcce-9c15-4c0f-858c-54a8a81bb4e6)

**Observaciones**
- He usado las 5 recomendaciones que nos proponían los apuntes: .?value, HTMLElement, if null, instanceof, typeof
- Sinceramente no entendí bien la teoría la primera vez y al principio me costó mucho entender qué debía hacer en el ejercicio para resolver los errores de TS y pedí ayuda a la IA pero seguía sin entender.
- Después de volver a repasar la teoría y de escribir a Antonio, lo volví a intentar, y a falta de saber la corrección del ejercicio, creo que ahora entiendo mejor cómo pasar los datos de un tipo a otro, verificar de qué tipo son y parar la comprobación cuando el dato es nulo o no está definido. 
