# Fiber - Web Development Challenge by Codewell

## Table of contents

- [Fiber - Web Development Challenge by Codewell](#fiber---web-development-challenge-by-codewell)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [What I learned](#what-i-learned-1)
      - [HTML5](#html5)
      - [CSS](#css)
      - [JavaScript](#javascript)
  - [Author](#author)


## Overview

### Screenshot

![](./src/assets/images/fiber-preview.png)

### Links

- Solution URL: [Github](https://github.com/deividcode/fiber)
- Live Site URL: [Github Page](https://deividcode.github.io/fiber/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- PostCss
- [ViteJs](https://vitejs.dev/) - ViteJS  
  - [vite-plugin-image-optimizer](https://www.npmjs.com/package/vite-plugin-image-optimizer) - vite-plugin-image-optimizer
- [Animate.css](https://animate.style/) - Animate.Css


### What I learned

In the process of developing this website I learned some new things for me.

### What I learned

#### HTML5

```html
<img src="/src/assets/images/hero-Illustration.png" alt="portfolio" width="530" height="528"> 
<!-- Para un mejor Performance las propiedades width y height siempre deben estar presentes, con valores que abarquen el tamaño como estaran en nuestro sitio web -->

<h1>,<h2>,<h3>,<h4>,<h5>,<h6> 
<!-- Las etiquetas de titulo deben seguir una gerarquia empezando desde el H2 -->
```

#### CSS

```css
@font-face {
  font-family: "inter";
  src: url(../assets/fonts/Inter-Medium.ttf);
  font-weight: 500;
  font-display: swap;
}
/* Con este codigo podemos importar una fuente de nuestra carpeta y con la propiedad font-display se puede usar una fuente del sistema si la que estamos solicitando no a cargado */

--first-color: #4D13D1, yellow;
/* Podemos agregar una segunda opcion al crear nuestra variable de css, si por alguna razon no se cumple la primera esta variable tomara el segundo valor*/

```

#### JavaScript

```js

// Con la **API Intersection Observer** de Javascript, se puede conocer cuando un elemento esta dentro de la vista del usuario, se selecciona el elemento que se quiere observar y luego se pasa a la funcion
const elAnimation = document.querySelector('.animate__animated');

let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__fadeInUp');    
    }
  });
});

observer.observe(elAnimation);  

```

## Author

- Twitter - [@deividCoder](https://twitter.com/deividCoder)
