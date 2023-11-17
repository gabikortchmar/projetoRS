function toggleMode() {
  const html = document.documentElement /* acessando o html */
  html.classList.toggle("light")

  // pegar a tag img
  const img =
    document.querySelector(
      "#profile img"
    ) /* mesmo seletor css que trabalhamos a imagem */

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/gabiavatar-light.png")
  } else {
    // se tiver sem light mode, manter a normal
    img.setAttribute("src", "./assets/gabiavatar.png")
  }
}
