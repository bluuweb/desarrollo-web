# 06 - CSS Flexbox [Práctica]

Comenzaremos a crear nuestro primer sitio web con Flexbox

## Utilidades

Ya habíamos trabajado con varios estilos por ende los vamos a reciclar:

- [https://necolas.github.io/normalize.css/](https://necolas.github.io/normalize.css/)
- Box-sizing: [https://css-tricks.com/box-sizing/](https://css-tricks.com/box-sizing/)
- Fuente [https://fonts.google.com/specimen/Ubuntu?sidebar.open=true](https://fonts.google.com/specimen/Ubuntu?sidebar.open=true)
- [https://www.w3schools.com/cssref/css_units.asp](https://www.w3schools.com/cssref/css_units.asp)

Otros recursos utilizados:

- [https://color.adobe.com/es/create/image](https://color.adobe.com/es/create/image)
- [https://lenguajecss.com/css/selectores/selectores-avanzados/](https://lenguajecss.com/css/selectores/selectores-avanzados/)
- [https://www.iloveimg.com/es/redimensionar-imagen](https://www.iloveimg.com/es/redimensionar-imagen)
- [https://developer.mozilla.org/es/docs/CSS/Media_queries](https://developer.mozilla.org/es/docs/CSS/Media_queries)

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ALTOS GAME</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/estilos.css" />
    <link
      href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
      rel="stylesheet"
    />
  </head>

  <body></body>
</html>
```

```css
html {
  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

.container {
  width: 80%;
}

/* Espaciados */
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

/* Textos */
.text-white {
  color: #ffffff;
}

.text-center {
  text-align: center;
}

/* Colores */
.bg-primary {
  background-color: #2d2c59;
}

.bg-secondary {
  background-color: #bf2a37;
}

.bg-danger {
  background-color: #18261c;
}

.bg-light {
  background-color: #9fbfa7;
}

.bg-dark {
  background-color: #151226;
}

/* Componentes */
.btn {
  display: inline-block;
  padding: 1rem 1.5rem;
  border-radius: 0.25rem;
  text-decoration: none;
  text-transform: uppercase;
}

.card {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 5px;
}

.card-img {
  width: 100%;
  height: 250px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.card-body {
  padding: 1.5rem;
}

.card-title {
  font-size: 2rem;
  font-weight: 300;
  margin: 0;
  color: #383e56;
}

.card-text {
  line-height: 1.5;
}
```

## Navbar

- Hover: [https://www.w3schools.com/cssref/sel_hover.asp](https://www.w3schools.com/cssref/sel_hover.asp)
- CSS selectores Avanzados [https://lenguajecss.com/css/selectores/selectores-avanzados/](https://lenguajecss.com/css/selectores/selectores-avanzados/)

```html
<div class="bg-dark">
  <nav class="container mx-auto navbar">
    <div class="navbar-logo">
      <a href="#">ALTOs WEB</a>
    </div>
    <div class="navbar-menu">
      <a href="#" class="btn bg-secondary">Inicio</a>
      <a href="#" class="btn bg-secondary">Nosotros</a>
      <a href="#" class="btn bg-secondary">Servicios</a>
      <a href="#" class="btn bg-secondary">Contacto</a>
    </div>
  </nav>
</div>
```

```css
.navbar {
  padding: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo a {
  text-decoration: none;
  color: white;
  font-size: 2rem;
}

.navbar-menu a {
  color: white;
}

.navbar-menu a:hover {
  background-color: black;
}
```

## Cards

```html
<section class="container mx-auto">
  <div class="center">
    <h1>Lorem, ipsum dolor.</h1>
    <hr />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, fuga?
      Alias porro autem veniam. Obcaecati velit necessitatibus possimus vero
      dignissimos tenetur maxime, reprehenderit animi placeat quam dolorum natus
      ab quibusdam.
    </p>
  </div>

  <div class="main-card">
    <!-- cards -->
    <div class="card">
      <img src="images/card-1.png" class="card-img" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn bg-primary text-white">Go somewhere</a>
      </div>
    </div>
    <!-- cards -->
    <div class="card">
      <img src="images/card-2.jpg" class="card-img" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn bg-primary text-white">Go somewhere</a>
      </div>
    </div>
    <!-- cards -->
    <div class="card">
      <img src="images/card-3.jpg" class="card-img" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn bg-primary text-white">Go somewhere</a>
      </div>
    </div>
  </div>
</section>
```

```css
/* Main seccion */
.card {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 5px;
  flex: 1;
}

.card a:hover {
  background-color: black;
}

.card-img {
  width: 100%;
  height: auto;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.center {
  text-align: center;
  margin: 3rem 0;
}
.center h1 {
  font-weight: 300;
  color: #383e56;
}
.center hr {
  border-style: solid;
  border-color: #383e56;
}

.main-card {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}
```

## Vertical Card

```html
<section class="container mx-auto">
  <div class="vertical-card bg-primary">
    <img src="images/perfil-dos.png" alt="" />
    <div class="vertical-card-content">
      <h3>Lorem, ipsum dolor.</h3>
      <hr />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
        architecto excepturi, nostrum error quam rem esse hic deserunt
        voluptates pariatur maiores officiis. Totam non, aperiam numquam quam
        suscipit et. Temporibus!
      </p>
      <a href="#" class="btn bg-secondary text-white">Go somewhere</a>
    </div>
  </div>
</section>
```

```css
/* Vertical Card */
.vertical-card {
  margin: 5rem 0;
  display: flex;
  align-items: center;
}

.vertical-card img {
  width: 400px;
}

.vertical-card-content {
  padding: 0 3rem;
  color: white;
}

.vertical-card-content h3 {
  font-weight: 300;
  font-size: 2rem;
}

.vertical-card-content p {
  font-weight: 300;
}

.vertical-card-contentd hr {
  border-style: solid;
  border-color: white;
}
```

## Web Responsive

```css
/* Responsive */
@media (max-width: 1090px) {
  /* navbar */
  .navbar {
    flex-direction: column;
  }
  .navbar-menu {
    margin-top: 2rem;
  }

  /* Vertical Card  */
  .vertical-card img {
    width: 300px;
  }
}

@media (max-width: 860px) {
  /* card */
  .main-card {
    flex-direction: column;
  }

  /* Vertical Card  */
  .vertical-card {
    flex-direction: column;
  }
  .vertical-card-content {
    padding-top: 2rem;
    padding-bottom: 3rem;
  }
  .vertical-card img {
    width: 100%;
    height: auto;
  }
}

@media (max-width: 685px) {
  /* navbar */
  .navbar-menu {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .navbar-menu a {
    text-align: center;
    margin-bottom: 1rem;
  }
}
```
