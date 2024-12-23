const coffees = [
    {
      image: "arabica.jpg",
      description: "arabica. понятная классика.",
      price: 1500
    },
    {
      image: "black-iwory.jpg",
      description: "black iwory. слоновый.",
      price: 40000
    },
    {
      image: "blue-mountain.jpg",
      description: "blue mountatin. ямайка.",
      price: 20000
    },
    {
      image: "chanchamayo.jpg",
      description: "chanchamayo. перу.",
      price: 33000
    },
    {
      image: "luwak.jpg",
      description: "luwak. горькая бразилия.",
      price: 12000
    },
    {
      image: "mogiana.jpg",
      description: "mogiana. терпкая бразилия.",
      price: 14000
    },
    {
        image: "robusta.jpg",
        description: "robusta. зарядись.",
        price: 2500
      },
      {
        image: "jacu-bird.jpg",
        description: "jacu bird. птичий вкус.",
        price: 90000
      },
      {
        image: "geisha-la-esmeralda.jpg",
        description: "la esmeralda. панама.",
        price: 3000
      }
      
  ];
  
  // Функция для создания блока с информацией о свитере
  function createProductBlock(coffee) {
    const block = document.createElement("div");
    block.classList.add("product-block");
  
    const image = document.createElement("img");
    image.src = coffee.image;
    image.width= 210;
    image.height = 210;
    block.appendChild(image);
  
    const description = document.createElement("h3");
    description.textContent = coffee.description;
    block.appendChild(description);
  
    const price = document.createElement("p");
    price.textContent = `Цена: ${coffee.price} руб.`;
    block.appendChild(price);
    return block;}
    const productContainer = document.getElementById("product-container");

coffees.forEach(coffee => {
  const productBlock = createProductBlock(coffee);
  productContainer.appendChild(productBlock);
});
