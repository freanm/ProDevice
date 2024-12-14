document.addEventListener("DOMContentLoaded", function () {
  const productos = [
    {
      nombre: "Notebook Acer Aspire 5",
      precio: "$389.000",
      especificaciones: `- Procesador: Intel Core i5<br>- RAM: 8GB<br>- Almacenamiento: 512GB SSD<br>- Pantalla: 15.6" Full HD<br>- Sistema Operativo: Windows 10`,
      estado: "Nuevo",
      marca: "Acer",
      imagenes: [
        "images/Notebook Acer Aspire 5/4300101_1_1.webp",
        "images/Notebook Acer Aspire 5/4300101_2_1.webp",
        "images/Notebook Acer Aspire 5/4300101_3_1.webp",
        "images/Notebook Acer Aspire 5/4300101_4_1.webp"
      ]
    },
    {
      nombre: "Notebook MSI SWORD 16 HX B14VFKG",
      precio: "$659.000",
      especificaciones: `- Procesador: Intel Core i7<br>- RAM: 16GB<br>- Almacenamiento: 1TB SSD<br>- Pantalla: 16" Full HD<br>- Sistema Operativo: Windows 11`,
      estado: "Nuevo",
      marca: "MSI",
      imagenes: [
        "images/Notebook MSI SWORD 16 HX B14VFKG/4300496_1_1.webp",
        "images/Notebook MSI SWORD 16 HX B14VFKG/4300496_2_1.webp",
        "images/Notebook MSI SWORD 16 HX B14VFKG/4300496_3_1.webp",
        "images/Notebook MSI SWORD 16 HX B14VFKG/4300496_4_1.webp"
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
