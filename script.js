document.addEventListener("DOMContentLoaded", () => {
  const productos = [
    {
      nombre: "Notebook MSI SWORD 16 HX B14VFKG",
      precio: "$1.630.000",
      especificaciones: `- Procesador: Intel i7-14650HX<br>- RAM: 16GB<br>- Almacenamiento: 1TB SSD<br>- Pantalla: 16" FHD<br>- Sistema Operativo: Windows 11`,
      estado: "Nuevo",
      marca: "MSI",
      imagenes: [
        "images/Notebook MSI SWORD 16 HX B14VFKG/4300496_1_1.webp",
        "images/Notebook MSI SWORD 16 HX B14VFKG/4300496_2_1.webp",
        "images/Notebook MSI SWORD 16 HX B14VFKG/4300496_3_1.webp",
        "images/Notebook MSI SWORD 16 HX B14VFKG/4300496_4_1.webp"
      ]
    },
    {
      nombre: "Notebook Lenovo IdeaPad 1 15AMN7",
      precio: "$299.000",
      especificaciones: `- Procesador: Intel Celeron N4020<br>- RAM: 4GB<br>- Almacenamiento: 128GB SSD<br>- Pantalla: 15.6" HD<br>- Sistema Operativo: Windows 11`,
      estado: "Nuevo",
      marca: "Lenovo",
      imagenes: [
        "images/Notebook Lenovo IdeaPad 1 15AMN7/4300050_1_1.webp",
        "images/Notebook Lenovo IdeaPad 1 15AMN7/4300050_2_1.webp",
        "images/Notebook Lenovo IdeaPad 1 15AMN7/4300050_3_1.webp",
        "images/Notebook Lenovo IdeaPad 1 15AMN7/4300050_4_1.webp"
      ]
    }
  ];

  const renderBlocks = (productos) => {
    const blocksContainer = document.getElementById("product-blocks");
    blocksContainer.innerHTML = ""; // Limpiar bloques existentes

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

  const applyFilters = () => {
    const brandFilter = document.getElementById("brand-filter").value;
    const priceFilter = document.getElementById("price-filter").value;

    let filteredProducts = productos;

    if (brandFilter) {
      filteredProducts = filteredProducts.filter((producto) => producto.marca === brandFilter);
    }

    if (priceFilter) {
      const [minPrice, maxPrice] = priceFilter.split("-").map((v) => (v === "+" ? Infinity : parseInt(v)));
      filteredProducts = filteredProducts.filter(
        (producto) => parseInt(producto.precio.replace(/[^0-9]/g, "")) >= minPrice && parseInt(producto.precio.replace(/[^0-9]/g, "")) <= maxPrice
      );
    }

    renderBlocks(filteredProducts);
  };

  document.getElementById("brand-filter").addEventListener("change", applyFilters);
  document.getElementById("price-filter").addEventListener("change", applyFilters);

  renderBlocks(productos);
});
