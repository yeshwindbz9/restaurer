const createEntry = (name, title, gifUrl) => {
  const mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", "content-item");

  const mainTitle = document.createElement("h1");
  mainTitle.innerHTML = name;
  mainTitle.setAttribute("id", "title");

  const subTitle = document.createElement("h3");
  subTitle.innerHTML = title;
  subTitle.setAttribute("id", "subheading");

  const img = document.createElement("img");
  img.setAttribute("src", gifUrl);
  img.setAttribute("width", "360");
  img.setAttribute("height", "360");
  img.setAttribute("alt", "bear-eating.gif");

  mainDiv.append(mainTitle, subTitle, img);

  return mainDiv;
};

export const createMenu = () => {
  const menuDiv = document.createElement("div");

  menuDiv.setAttribute("id", "content-menu");

  menuDiv.appendChild(
    createEntry(
      "Burger",
      "Savor the Classic Taste of Indulgence with Our Signature Burgers , Flavor in Every Bite!",
      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHlwODk2czNhbTl2dHAybGZtMmo1bW5nenhvOXVsaXRrY2txZnd5eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1qWN9dtmeSD25DCBq9/giphy.webp"
    )
  );
  menuDiv.appendChild(
    createEntry(
      "Pizza",
      "Experience the Slice of Heaven , Our Pizzas: A Symphony of Fresh Ingredients and Melting Flavors!",
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHR4OWFzam5qbnpoNXU0Z2dvd2I0aGI1cWVxNTRmanJucGY0eml0MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5vt9MLYzcB3OYAAgMy/giphy.webp"
    )
  );
  menuDiv.appendChild(
    createEntry(
      "Fries",
      "French fries: crispy, golden batons of delight!",
      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGt4OXliYW13ZzE3OG9vMjFjMWJkNnl6aGdja3o0NWkzaXZmZzd3MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FxljZEE7ebLj2/giphy.webp"
    )
  );
  menuDiv.appendChild(
    createEntry(
      "IceCream",
      "Indulge in the Creamy Delight! Our Ice Creams: A Symphony of Chilled Bliss and Irresistible Flavors! ",
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2pkNHlxcWlkbm5zZGd5N3c0aG16OWEzdzRtMmNpNW5rNnlrZzN1byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cX3qC7ixQVqWQ/giphy.webp"
    )
  );
  return menuDiv;
};

export default createEntry;
