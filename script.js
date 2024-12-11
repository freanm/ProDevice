document.addEventListener("DOMContentLoaded", () => {
  // Lista de productos con la columna "Estado"
  const productos = [
    {
      nombre: "Notebook Acer Aspire 3",
      precio: "$670.000 o U$D600",
      especificaciones: `- Procesador: Intel i7-1255U<br>
                        - RAM: 8GB<br>
                        - Almacenamiento: 512GB SSD<br>
                        - Pantalla: 15.6" FHD<br>
                        - Sistema Operativo: Windows 11`,
      estado: "Nuevo", // Agregar estado
      imagenes: [
        "images/Notebook Acer Aspire 3/3298060_1_1.webp",
        "images/Notebook Acer Aspire 3/3298060_2_1.webp",
        "images/Notebook Acer Aspire 3/3298060_3_1.webp",
        "images/Notebook Acer Aspire 3/3298060_4_1.webp"
      ]
    },
    {
      nombre: "Notebook Asus VivoBook 15 (M1502QA-BH74)",
      precio: "$650.000 o U$D580",
      especificaciones: `- Procesador: AMD R7-5800HS<br>
                         - RAM: 16GB<br>
                         - Almacenamiento: 512GB SSD<br>
                         - Pantalla: 15.6" FHD<br>
                         - Sistema Operativo: Windows 11`,
      estado: "Nuevo",
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
      precio: "$560.000 o U$D500",
      estado: "Nuevo",
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
      precio: "$500.000 o U$D450",
      estado: "Nuevo",
      imagenes: [
        "images/Notebook HP 15-dy2795wm/4573852_1_aef3_1.webp",
        "images/Notebook HP 15-dy2795wm/4573852_2_3e2e_1.webp",
        "images/Notebook HP 15-dy2795wm/4573852_3_6ba9_1.webp"
      ]
    }
  ];

  // Referencia al cuerpo de la tabla
  const tablaCuerpo = document.querySelector("#product-table tbody");

  // Crear filas de productos dinámicamente
  productos.forEach((producto, index) => {
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
    const celdaEspecificaciones = document.createElement("td");
    celdaEspecificaciones.innerHTML = `
      <strong>${producto.nombre}</strong>
      <p>${producto.especificaciones}</p>
    `;
    fila.appendChild(celdaEspecificaciones);
    
    // Celda del estado
    const celdaEstado = document.createElement("td");
    celdaEstado.textContent = producto.estado;
    fila.appendChild(celdaEstado);

    // Celda del precio
    const celdaPrecio = document.createElement("td");
    celdaPrecio.textContent = producto.precio;
    fila.appendChild(celdaPrecio);

    // Agregar la fila a la tabla
    tablaCuerpo.appendChild(fila);
  });
});
