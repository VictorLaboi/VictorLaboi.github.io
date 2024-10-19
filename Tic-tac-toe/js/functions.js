let tablero = ["", "", "", "", "", "", "", "", ""];
let jugadorActual = "X";
let juegoActivo = true;

const combinacionesGanadoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
];

function hacerMovimiento(celda, index) {
    if (tablero[index] === "" && juegoActivo) {
        tablero[index] = jugadorActual;
        celda.textContent = jugadorActual;
        verificarGanador();
        jugadorActual = jugadorActual === "X" ? "O" : "X";
    }
}

function verificarGanador() {
    for (let i = 0; i < combinacionesGanadoras.length; i++) {
        const [a, b, c] = combinacionesGanadoras[i];
        if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
            document.getElementById("resultado").textContent = `El jugador ${tablero[a]} ha ganado!`;
            juegoActivo = false;
            return;
        }
    }
    if (!tablero.includes("")) {
        document.getElementById("resultado").textContent = "Es un empate!";
        juegoActivo = false;
    }
}

function limpiecito() {
    tablero = ["", "", "", "", "", "", "", "", ""];
    juegoActivo = true;
    document.querySelectorAll("td").forEach(celda => celda.textContent = "");
    document.getElementById("resultado").textContent = "";
}