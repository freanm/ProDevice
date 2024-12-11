document.addEventListener("DOMContentLoaded", () => {
  // Lista de productos con la columna "Estado"
  const productos = [
    {
      nombre: "Notebook Acer Aspire 3",
      precio: "$670.000",
      especificaciones: `- Procesador: Intel i7-1255U<br>
                        - RAM: 8GB<br>
                        - Almacenamiento: 512GB SSD<br>
                        - Pantalla: 15.6" FHD<br>
                        - Sistema Operativo: Windows 11`,
      estado: "Nuevo", // Agregar estado
      marca: "Acer", // Agregar marca
      imagenes: [
        "images/Notebook Acer Aspire 3/3298060_1_1.webp",
        "images/Notebook Acer Aspire 3/3298060_2_1.webp",
        "images/Notebook Acer Aspire 3/3298060_3_1.webp",
        "images/Notebook Acer Aspire 3/3298060_4_1.webp"
      ]
    },
    {
      nombre: "Notebook Asus VivoBook 15 (M1502QA-BH74)",
      precio: "$650.000",
      especificaciones: `- Procesador: AMD R7-5800HS<br>
                         - RAM: 16GB<br>
                         - Almacenamiento: 512GB SSD<br>
                         - Pantalla: 15.6" FHD<br>
                         - Sistema Operativo: Windows 11`,
      estado: "Nuevo",
      marca: "Asus",
      imagenes: [
        "images/Notebook Asus VivoBook 15 (M1502QA-BH74)/4641964_1_29cc_1.webp",
        "images/Notebook Asus VivoBook 15 (M1502QA-BH74)/4641964_2_cff7_1.webp",
        "images/Notebook Asus VivoBook 15 (M1502QA-BH74)/4641964_3_5c61_1.webp"
      ]
    },
    {
      nombre: "Notebook Lenovo IdeaPad 1 15AMN7",
      especificaciones: `Procesador: AMD Ryzen 5 7520U<br>
                         - RAM: 8GB<br>
                         - Almacenamiento: 512GB SSD<br>
                         - Pantalla: 15.6" FHD<br>
                         - Sistema Operativo: Windows 11`,
      precio: "$560.000",
      estado: "Nuevo",
      marca: "Lenovo",
      imagenes: [
        "images/Notebook Lenovo IdeaPad 1 15AMN7/4596691_1_c708_1.webp",
        "images/Notebook Lenovo IdeaPad 1 15AMN7/4596691_2_3b04_1.webp"
      ]
    },
    {
      nombre: "Notebook HP 15-dy2795wm",
      especificaciones: `Procesador: Intel i5-1135G7<br>
                         - RAM: 8GB<br>
                         - Almacenamiento: 256GB SSD<br>
                         - Pantalla: 15.6" FHD<br>
                         - Sistema Operativo: Windows 11<br>
                         - De Regalo: Speaker Altomax`,
      precio: "$500.000",
      estado: "Nuevo",
      marca: "HP",
      imagenes: [
        "images/Notebook HP 15-dy2795wm/4573852_1_aef3_1.webp",
        "images/Notebook HP 15-dy2795wm/4573852_2_3e2e_1.webp",
        "images/Notebook HP 15-dy2795wm/4573852_3_6ba9_1.webp"
      ]
    }
  ];

  // Referencia al cuerpo de la tabla
  const tablaCuerpo = document.querySelector("#product-table tbody");

  // Función para renderizar productos
  function renderProductos(filteredProducts) {
    tablaCuerpo.innerHTML = ''; // Limpiar tabla antes de agregar productos filtrados

    filteredProducts.forEach((producto, index) => {
      const fila = document.createElement("tr");

      // Celda del carrusel de imágenes
      const celdaImagenes = document.createElement("td");
      celdaImagenes.innerHTML = ` 
        <div id="carousel-${index}" class="carousel slide" data-bs-ride="false">
          <div class="carousel-inner">
            ${producto.imagenes
              .map((img, idx) => `
                <div class="carousel-item ${idx === 0 ? "active" : ""}">
                  <img src="${img}" class="d-block w-100" alt="Imagen ${idx + 1}">
                </div>
              `)
              .join("")}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${index}" data-bs-slide="prev" style="color: black;">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carousel-${index}" data-bs-slide="next" style="color: black;">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Siguiente</span>
          </button>
        </div>
      `;
      fila.appendChild(celdaImagenes);

      // Celda del nombre y especificaciones
      const celdaNombre = document.createElement("td");
      celdaNombre.innerHTML = `
        <strong>${producto.nombre}</strong><br>
        ${producto.especificaciones}
      `;
      fila.appendChild(celdaNombre);

      // Celda del estado
      const celdaEstado = document.createElement("td");
      celdaEstado.textContent = producto.estado;
      fila.appendChild(celdaEstado);

      // Celda del precio
      const celdaPrecio = document.createElement("td");
      celdaPrecio.textContent = producto.precio;
      fila.appendChild(celdaPrecio);

      // Añadir fila a la tabla
      tablaCuerpo.appendChild(fila);
    });
  }

  // Filtrar productos por marca y precio
  function filtrarProductos() {
    const marcaSeleccionada = document.getElementById('brand-filter').value;
    const precioSeleccionado = document.getElementById('price-filter').value;

    let productosFiltrados = productos;

    // Filtrar por marca
    if (marcaSeleccionada) {
      productosFiltrados = productosFiltrados.filter(producto => producto.marca === marcaSeleccionada);
    }

    // Filtrar por precio
    if (precioSeleccionado) {
      let rangoPrecio = precioSeleccionado.split('-');
      if (rangoPrecio.length === 2) {
        const minPrecio = parseInt(rangoPrecio[0]);
        const maxPrecio = parseInt(rangoPrecio[1]);
        productosFiltrados = productosFiltrados.filter(producto => {
          const precioProducto = parseInt(producto.precio.replace('$', '').replace('.', '').trim());
          return precioProducto >= minPrecio && precioProducto <= maxPrecio;
        });
      } else if (precioSeleccionado === "1000000+") {
        productosFiltrados = productosFiltrados.filter(producto => {
          const precioProducto = parseInt(producto.precio.replace('$', '').replace('.', '').trim());
          return precioProducto > 1000000;
        });
      }
    }

    renderProductos(productosFiltrados);
  }

  // Funciones de ordenación por precio
  function ordenarPrecioAsc() {
    const productosOrdenados = [...productos].sort((a, b) => parseFloat(a.precio.replace('$', '').replace('.', '').trim()) - parseFloat(b.precio.replace('$', '').replace('.', '').trim()));
    renderProductos(productosOrdenados);
  }

  function ordenarPrecioDesc() {
    const productosOrdenados = [...productos].sort((a, b) => parseFloat(b.precio.replace('$', '').replace('.', '').trim()) - parseFloat(a.precio.replace('$', '').replace('.', '').trim()));
    renderProductos(productosOrdenados);
  }

  // Eventos de los botones de filtrado
  document.getElementById('brand-filter').addEventListener('change', filtrarProductos);
  document.getElementById('price-filter').addEventListener('change', filtrarProductos);

  // Eventos de los botones de ordenación
  document.getElementById('sort-price-asc').addEventListener('click', ordenarPrecioAsc);
  document.getElementById('sort-price-desc').addEventListener('click', ordenarPrecioDesc);

  // Inicializar tabla con productos
  renderProductos(productos);
});
