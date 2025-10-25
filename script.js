// 🛒 VARIABLES
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const listaCarrito = document.getElementById("listaCarrito");
const contador = document.getElementById("contadorCarrito");
const totalTxt = document.getElementById("totalCarrito");
const panel = document.getElementById("carritoPanel");
const btnCarrito = document.getElementById("carritoBtn");
const cerrar = document.getElementById("cerrarCarrito");
const noti = document.getElementById("notificacion");

// 🛍️ Función para renderizar carrito
function renderCarrito() {
  listaCarrito.innerHTML = "";
  let total = 0;
  carrito.forEach((p) => {
    const li = document.createElement("li");
    li.textContent = `${p.nombre} - ${p.precio}`;
    listaCarrito.appendChild(li);
    total += parseFloat(p.precio.replace("S/", "").trim());
  });
  contador.textContent = carrito.length;
  totalTxt.textContent = `Total: S/ ${total.toFixed(2)}`;
  localStorage.setItem("carrito", JSON.stringify(carrito));
}
renderCarrito();

// ➕ Agregar productos
document.querySelectorAll(".btn-comprar").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const prod = e.target.closest(".producto");
    const nombre = prod.querySelector("h3").textContent;
    const precio = prod.querySelector(".precio").textContent;
    carrito.push({ nombre, precio });
    renderCarrito();
    mostrarNoti(`✅ ${nombre} agregado al carrito`);
  });
});

// 🔔 Notificación
function mostrarNoti(msg) {
  noti.textContent = msg;
  noti.style.display = "block";
  setTimeout(() => (noti.style.display = "none"), 2000);
}

// 🛒 Mostrar / cerrar panel
btnCarrito.addEventListener("click", () => panel.classList.toggle("visible"));
cerrar.addEventListener("click", () => panel.classList.remove("visible"));

// 💳 Finalizar compra
document.getElementById("finalizarCompra").addEventListener("click", () => {
  mostrarNoti("🎉 Gracias por tu compra!");
  carrito = [];
  renderCarrito();
});

// 🌙 MODO OSCURO / CLARO
const btnModo = document.getElementById("modoBtn");
btnModo.addEventListener("click", () => {
  document.body.classList.toggle("claro");
  btnModo.textContent = document.body.classList.contains("claro") ? "☀️" : "🌙";
  localStorage.setItem("modo", document.body.classList.contains("claro"));
});
if (localStorage.getItem("modo") === "true") {
  document.body.classList.add("claro");
  btnModo.textContent = "☀️";
}

     
