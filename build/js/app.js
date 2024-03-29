// @Author: Enrique Fernández - Campoamor Fernández
// @Github: https://github.com/Kikenvt/examen-tema6-dwec-diw

document.addEventListener("DOMContentLoaded", function () {
  crearGaleria()
  fixedNav()
  scrollNav()
})

function crearGaleria() {
  const galeria = document.querySelector(".galeria-imagenes")

  for (let i = 1; i <= 9; i++) {
    const picture = document.createElement("PICTURE")
    picture.innerHTML = `
        <source srcset='build/imgs/thumbs/${i}.webp' type='image/webp' />
        <source srcset='build/imgs/thumbs/${i}.jpeg' type='image/jpeg' />
        <img scr='build/imgs/thumbs/${i}.jpeg' atl='Imagen ${i}' />
        `
    picture.onclick = function () {
      mostrarImagen(i)
    }
    galeria.appendChild(picture)
  }
}

function mostrarImagen(i) {
  const picture = document.createElement("PICTURE")
  picture.innerHTML = `
        <source srcset='build/imgs/bigs/${i}.webp' type='image/webp' />
        <source srcset='build/imgs/bigs/${i}.jpeg' type='image/jpeg' />
        <img scr='build/imgs/bigs/${i}.jpeg' atl='Imagen ${i}' />
    `
  const overlay = document.createElement("DIV")
  overlay.appendChild(picture)
  overlay.classList.add("overlay")
  overlay.onclick = function () {
    const body = document.querySelector("body")
    body.classList.remove("fijar-body")
    overlay.remove()
  }

  const cerrarModal = document.createElement("P")
  cerrarModal.textContent = "X"
  cerrarModal.classList.add("btn-cerrar")
  cerrarModal.onclick = function () {
    const body = document.querySelector("body")
    body.classList.remove("fijar-body")
    overlay.remove()
  }
  overlay.appendChild(cerrarModal)

  const body = document.querySelector("body")
  body.appendChild(overlay)
  body.classList.add("fijar-body")
}

function scrollNav() {
  const enlaces = document.querySelectorAll(".navegacion-principal a")

  enlaces.forEach((enlace) =>
    enlace.addEventListener("click", function (e) {
      e.preventDefault
      const sectionScroll = e.target.attributes.href.value
      const section = document.querySelector(sectionScroll)
      section.scrollIntoView({ behavior: "smooth" })
    })
  )
}

function fixedNav() {
  const barra = document.querySelector(".header")
  const video = document.querySelector(".video")
  const body = document.querySelector("body")

  window.addEventListener("scroll", function () {
    if (
      video.getBoundingClientRect().bottom < 0 &&
      this.window.innerWidth >= 768
    ) {
      barra.classList.add("fijo")
      body.classList.add("body-scroll")
    } else {
      barra.classList.remove("fijo")
      body.classList.remove("body-scroll")
    }
  })
}
