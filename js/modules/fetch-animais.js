import initAnimaNumeros from "./anima-numeros.js";
export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const animaisResponde = await fetch(url); // realiza o fetch da url externa
      const animaisJSON = await animaisResponde.json(); // transforma a response reotornada em objeto JSON.
      const numerosGrid = document.querySelector(".numeros-grid"); // seleciona as classes com o valor numeros-grid
      animaisJSON.forEach((animal) => {
        // loop pelo objeto JASON na variavel animaisJSON
        const divAnimal = createAnimals(animal);
        numerosGrid.appendChild(divAnimal);
      });
      initAnimaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchAnimais("./animaisapi.json");

  // cria funcao que sera responsavel por criar cada animal.
  function createAnimals(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }
}
