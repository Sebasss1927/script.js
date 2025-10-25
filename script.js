 // 🛒 Función de compra (simulada)
document.querySelectorAll(".btn-comprar").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("🛒 Producto añadido al carrito (modo demo)");
  });
});

// 🎮 Minijuego
let puntaje = 0;
const cuadro = document.getElementById("cuadro");
const puntajeTxt = document.getElementById("puntaje");
const reiniciar = document.getElementById("reiniciar");

if (cuadro) {
  moverCuadro();

  cuadro.addEventListener("click", () => {
    puntaje++;
    puntajeTxt.textContent = puntaje;
    moverCuadro();
  });

  reiniciar.addEventListener("click", () => {
    puntaje = 0;
    puntajeTxt.textContent = puntaje;
    moverCuadro();
  });
}

function moverCuadro() {
  const area = document.getElementById("area-juego");
  const x = Math.random() * (area.clientWidth - 50);
  const y = Math.random() * (area.clientHeight - 50);
  cuadro.style.left = `${x}px`;
  cuadro.style.top = `${y}px`;
}
     