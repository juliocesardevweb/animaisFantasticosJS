export default function outsideClick(element, events, callback) {
  // cria funçao outsideclick que a ideia é remover a classe active quando clicar fora do dropdown.
  const html = document.documentElement; // seleciona o html inteiro.
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick); // adiciona ao html um evento de click com a callback
        //handleOutsideClick
      });
    });

    element.setAttribute(outside, "");
  }
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });

      callback(); // ativa o parametro callback como uma funcao de callback.
    }
    // funcao criada e será chamada dentro da função quando o clique que ativa a classe active, ocorrer.
  }
}
