// #1
let elements = document.querySelectorAll(".u");

for (let caty = 0; caty < elements.length; caty++) {
  console.log(`Категорія: ${elements[caty].dataset.b}`);
  console.log(`Кількість елементів:${elements[caty].children.length}`);
}

// #2
let ul = document.querySelector("#ingredients");

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

for (let i of ingredients) {
  let li = document.createElement("li");
  li.textContent = i;
  ul.append(li);
}

// #3
let gallery = document.querySelector("#gallery");

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

for (let a of images) {
  let img = document.createElement("img");
  img.src = a.url;
  img.alt = a.alt;
  img.classList.add("img");
  gallery.append(img);
}

// #4
let btnPluse = document.querySelector(".increment");
let btnMines = document.querySelector(".decrement");
let value = document.querySelector("#value");

let counterValue = 0;

btnPluse.addEventListener("click", () => {
  counterValue++;
  value.textContent = counterValue;
});
btnMines.addEventListener("click", () => {
  counterValue--;
  value.textContent = counterValue;
});
