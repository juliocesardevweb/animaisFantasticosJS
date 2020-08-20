export default function initFetchBitcoin() {
  fetch("https://www.blockchain.com/ticker")
    .then((response) => response.json())
    .then((bitcoin) => {
      const spanBitcoin = document.querySelector(".btc-preco");
      spanBitcoin.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
