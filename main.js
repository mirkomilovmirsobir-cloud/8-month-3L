let elList = document.querySelector(".js-list");

let slicedElectronic = electronics.slice(0, 10);

// console.log(slicedPokemon);

let elForm = document.querySelector("form");
let elInput = elForm.querySelector("input");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  elList.innerHTML = "";

  let inputValue = elInput.value.trim();

  elInput.value = "";

  let findelectr = electronics.filter((electr) => electr.name.includes(inputValue));

  console.log(findelectr);

  findelectr.forEach((electr) => {
    elList.innerHTML += `

     <li>
        <img src="${electr.image}" alt="${electr.name}" width="200">
        <h3>${electr.name}</h3>
        <p>${electr.category} | ${electr.brand}</p>
        <p>${electr.price.toLocaleString()} so'm</p>
        <mark>${electr.id}</mark>
      </li>
  
  `;
  });
});
