import outsideClick from "./outsideclick.js";

export default function initDropDownMenu() {
  const dropDownMenus = document.querySelectorAll("[data-dropdown]");

  dropDownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      // array de eventos a serem executados. com esse codigo, podemos aplicar inumeros eventos em um mesmo codigo
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active"); // this em funcoes, faz referencia ao proprio elemento selecionado. nesse caso ao atributo data-dropdown
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("active");
    }); // funcao sendo executada após a adicao da classe active. "Parametro a ser usado aqui será a callback que foi passada como 1 parametro"
  }
}
