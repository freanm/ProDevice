document.addEventListener("DOMContentLoaded", function () {
  const productos = [
     {
      nombre: "Notebook MSI SWORD 16 HX B14VFKG",
      precio: "$1.630.000",
      especificaciones: `- Procesador: Intel i7-14650HX<br>
                        - RAM: 16GB<br>
                        - Almacenamiento: 1TB SSD<br>
                        - Gráfica: RTX4060 8GB
                        - Pantalla: 16" FHD<br>
                        - Sistema Operativo: Windows 11`,
      estado: "Nuevo", // Agregar estado
      marca: "MSI", // Agregar marca
      imagenes: [
        "images/Notebook MSI SWORD 16 HX B14VFKG/4300496_1_1.webp",
        "images/Notebook MSI SWORD 16 HX B14VFKG/4300496_2_1.webp",
        "images/Notebook MSI SWORD 16 HX B14VFKG/4300496_3_1.webp",
        "images/Notebook MSI SWORD 16 HX B14VFKG/4300496_4_1.webp"
      ]
    },
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

const renderBlocks = (productos) => {
    const blocksContainer = document.getElementById("product-blocks");
    blocksContainer.innerHTML = "";

    productos.forEach((producto) => {
      const productBlock = document.createElement("div");
      productBlock.classList.add("product-block");

      // Carrusel de imágenes
      const imageCell = document.createElement("div");
      const carouselDiv = document.createElement("div");
      carouselDiv.classList.add("carousel", "slide", "carousel-fade");
      carouselDiv.setAttribute("data-bs-ride", "carousel");

      const carouselInner = document.createElement("div");
      carouselInner.classList.add("carousel-inner");

      producto.imagenes.forEach((img, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) item.classList.add("active");

        const imgElement = document.createElement("img");
        imgElement.src = img;
        imgElement.alt = producto.nombre;
        item.appendChild(imgElement);
        carouselInner.appendChild(item);
      });

      carouselDiv.appendChild(carouselInner);

      const prevControl = document.createElement("button");
      prevControl.classList.add("carousel-control-prev");
      prevControl.setAttribute("type", "button");
      prevControl.setAttribute("data-bs-target", `#carouselExampleControls${producto.nombre}`);
      prevControl.setAttribute("data-bs-slide", "prev");

      const prevIcon = document.createElement("span");
      prevIcon.classList.add("carousel-control-prev-icon");
      prevIcon.setAttribute("aria-hidden", "true");
      prevControl.appendChild(prevIcon);

      const nextControl = document.createElement("button");
      nextControl.classList.add("carousel-control-next");
      nextControl.setAttribute("type", "button");
      nextControl.setAttribute("data-bs-target", `#carouselExampleControls${producto.nombre}`);
      nextControl.setAttribute("data-bs-slide", "next");

      const nextIcon = document.createElement("span");
      nextIcon.classList.add("carousel-control-next-icon");
      nextIcon.setAttribute("aria-hidden", "true");
      nextControl.appendChild(nextIcon);

      carouselDiv.appendChild(prevControl);
      carouselDiv.appendChild(nextControl);
      imageCell.appendChild(carouselDiv);

      // Detalles del producto
      const detailsCell = document.createElement("div");
      detailsCell.classList.add("product-details");

      const productName = document.createElement("h3");
      productName.innerHTML = producto.nombre;
      detailsCell.appendChild(productName);

      const productSpecs = document.createElement("p");
      productSpecs.innerHTML = producto.especificaciones;
      detailsCell.appendChild(productSpecs);

      const productStatus = document.createElement("p");
      productStatus.textContent = `Estado: ${producto.estado}`;
      detailsCell.appendChild(productStatus);

      const productPrice = document.createElement("p");
      productPrice.textContent = `Precio: ${producto.precio}`;
      detailsCell.appendChild(productPrice);

      productBlock.appendChild(imageCell);
      productBlock.appendChild(detailsCell);

      blocksContainer.appendChild(productBlock);
    });
  };

  renderBlocks(productos);
});
