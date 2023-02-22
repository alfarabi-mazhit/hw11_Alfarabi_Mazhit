let itemsArr = [];
if (!localStorage.length) {
  localStorage.setItem(
    "itemslist",
    JSON.stringify([
      {
        src: "https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F265269_1.jpg&w=1920&q=85",
        title: "iPhone 14",
        description: "IPhone 14 128Gb black",
        price: "100 000тг",
        isInStock: false,
      },
      {
        src: "https://static.massimodutti.net/3/photos//2023/V/0/1/p/6911/630/800/6911630800_1_1_16.jpg?t=1669713013746",
        title: "Сумка",
        description: "Сумка black",
        price: "10 000тг",
        isInStock: true,
      },
      {
        src: "https://media.frgroup.kz/images/c2/42/ea9b65f4d90540ee39c4736b9779.jpg",
        title: "Платье",
        description: "Платье black M",
        price: "23 000тг",
        isInStock: false,
      },
      {
        src: "https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F265269_1.jpg&w=1920&q=85",
        title: "iPhone 14",
        description: "IPhone 14 128Gb black",
        price: "100 000тг",
        isInStock: false,
      },
      {
        src: "https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F265269_1.jpg&w=1920&q=85",
        title: "iPhone 14",
        description: "IPhone 14 128Gb black",
        price: "100 000тг",
        isInStock: false,
      },
      {
        src: "https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F265269_1.jpg&w=1920&q=85",
        title: "iPhone 14",
        description: "IPhone 14 128Gb black",
        price: "100 000тг",
        isInStock: false,
      },
    ])
  );
}
itemsArr = JSON.parse(localStorage.getItem("itemslist"));

let createHeader = () => {
  let header = document.createElement("div");
  header.id = "header";
  let clearButton = document.createElement("button");
  clearButton.innerHTML = "Очистить хранилище";
  clearButton.addEventListener("click", (e) => {
    // e.preventDefault();
    if (confirm("Вы уверены?")) {
      localStorage.clear();
      location.reload();
    }
  });
  header.append(clearButton);
  let createButton = document.createElement("button");
  createButton.innerHTML = "Добавить товар";
  createButton.disabled = true;
  //   createButton.addEventListener("click", (e) => {
  //     e.preventDefault();
  //   });
  header.append(createButton);
  return header;
};

let createItem = (src, titleI, descI, priceI, isInStock, ind) => {
  let card = document.createElement("div");
  card.index = ind;
  card.classList.add("card");
  let img = document.createElement("img");
  img.classList.add("img");
  if (titleI.includes("Платье")) {
    img.style.height = "300px";
  }
  img.src = src;
  let cardText = document.createElement("div");
  cardText.classList.add("card-text");
  let title = document.createElement("h2");
  title.classList.add("title");
  title.innerHTML = titleI;
  let desc = document.createElement("p");
  desc.classList.add("description");
  desc.innerHTML = descI;
  let price = document.createElement("p");
  price.classList.add("price");
  price.innerHTML = priceI;
  if (!isInStock) {
    card.classList.add("NotInStock");
  }
  cardText.append(title);
  cardText.append(desc);
  cardText.append(price);
  card.append(img);
  card.append(cardText);
  let deleteButton = document.createElement("button");
  //   deleteButton.classList.add("delete-btn");
  deleteButton.innerHTML = "x";
  deleteButton.addEventListener("click", (e) => {
    card.remove();
    itemsArr.splice(card.index, 1);
    localStorage.setItem("itemslist", JSON.stringify(itemsArr));
  });
  card.append(deleteButton);
  let stockButton = document.createElement("button");
  //   stockButton.classList.add("stock-btn");
  stockButton.innerHTML = "stock";
  stockButton.addEventListener("click", (e) => {
    card.classList.toggle("NotInStock");
    itemsArr[card.index].isInStock = !itemsArr[card.index].isInStock;
    localStorage.setItem("itemslist", JSON.stringify(itemsArr));
  });
  card.append(stockButton);
  return card;
};

let draw = () => {
  let body = document.getElementById("alik");
  body.prepend(createHeader());
  let container = document.getElementById("itemslist");
  itemsArr.map((val, i) => {
    container.append(
      createItem(
        val.src,
        val.title,
        val.description,
        val.price,
        val.isInStock,
        i
      )
    );
  });
};

draw();
