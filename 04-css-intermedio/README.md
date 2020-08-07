# 04 - CSS Intermedio
Sigamos jugando con CSS.

## Bordes
[https://www.w3schools.com/css/css_border.asp](https://www.w3schools.com/css/css_border.asp)

```css
.border-solid {
    border-style: solid;
}

.border-dashed {
    border-style: dashed;
}
```

```html
<p class="border-solid">Lorem ipsum dolor sit amet.</p>
<a class="border-dashed" ref="#">Enlace</a>
```

## Display
[https://www.w3schools.com/css/css_display_visibility.asp](https://www.w3schools.com/css/css_display_visibility.asp)
La propiedad ``display`` es sumamente importante para controlar el diseño de nuestra página web.

### Elementos de bloque
```css
elemento {
    display: block;
}
```
Un elemento de nivel de bloque siempre comienza en una nueva línea y ocupa todo el ancho disponible (se extiende hacia la izquierda y la derecha tanto como sea posible).

#### Ejemplos de elementos a nivel de bloque:
* ``<div>``
* ``<h1> - <h6>``
* ``<p>``
* ``<form>``
* ``<encabezado>``
* ``<footer>``
* ``<sección>``

### Elementos en línea
```css
elemento {
    display: inline;
}
```
Un elemento en línea no comienza en una nueva línea y solo ocupa el ancho que sea necesario.

#### Ejemplos de elementos en línea:
* ``<span>``
* ``<a>``
* ``<img>``

#### HTML estilos por defecto
[https://www.w3schools.com/cssref/css_default_values.asp](https://www.w3schools.com/cssref/css_default_values.asp)

## Padding
Las paddingpropiedades CSS se utilizan para generar espacio alrededor del contenido de un elemento, dentro de cualquier borde definido.
Con CSS, tienes control total sobre el relleno. Hay propiedades para configurar el relleno para cada lado de un elemento (arriba, derecha, abajo e izquierda).
[https://www.w3schools.com/css/css_padding.asp](https://www.w3schools.com/css/css_padding.asp)

```css
.clase {
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
}
```

```css
.clase {
  padding: 25px 50px 75px 100px;
}
```

```css
.clase {
  padding: 25px 50px;
}
```

```css
div {
  width: 300px;
  padding: 25px;
}
```
Aquí, el elemento ``<div>`` tiene un ancho de 300 px. Sin embargo, el ancho real del elemento `` <div>`` será de 350 px (300 px + 25 px de relleno izquierdo + 25 px de relleno derecho)


## Margin
Las marginpropiedades CSS se utilizan para crear espacio alrededor de los elementos, fuera de los bordes definidos.
[https://www.w3schools.com/css/css_margin.asp](https://www.w3schools.com/css/css_margin.asp)

```css
margin-top
margin-right
margin-bottom
margin-left
```

## Altura y ancho
Las propiedades ``height`` y ``width`` se utilizan para establecer el alto y el ancho de un elemento.
[https://www.w3schools.com/css/css_dimension.asp](https://www.w3schools.com/css/css_dimension.asp)

```css
.caja {
  height: 100px;
  width: 500px;
  background-color: powderblue;
}
```

## Display: inline-block
En comparación con ``display: inline``, la principal diferencia es que ``display: inline-block`` permite establecer un ancho y alto en el elemento.
Además, con display: ``inline-block``, se respetan los márgenes / rellenos superiores e inferiores, pero con ``display: inline`` no.
En comparación con ``display: block``, la principal diferencia es que ``display: inline-block`` no agrega un salto de línea después del elemento, por lo que el elemento puede sentarse junto a otros elementos.

[https://www.w3schools.com/css/css_inline-block.asp](https://www.w3schools.com/css/css_inline-block.asp)


## Modelo de caja
[https://www.w3schools.com/css/css_boxmodel.asp](https://www.w3schools.com/css/css_boxmodel.asp)


<!-- Ver antes los anchos para conocer box -->
## box-sizing
Para mantener el ancho a 300 px, sin importar la cantidad de relleno, puede usar la propiedad ``box-sizing``. Esto hace que el elemento mantenga su ancho; Si aumenta el relleno, el espacio de contenido disponible disminuirá.

[https://www.w3schools.com/css/css3_box-sizing.asp](https://www.w3schools.com/css/css3_box-sizing.asp)

Use la propiedad de tamaño de caja para mantener el ancho a 300 px, sin importar la cantidad de relleno:
```css
div {
  width: 300px;
  padding: 25px;
  box-sizing: border-box;
}
```

## Normalize CSS
[https://necolas.github.io/normalize.css/](https://necolas.github.io/normalize.css/)

Normalize.css hace que los navegadores procesen todos los elementos de manera más consistente y en línea con los estándares modernos. Precisamente se dirige solo a los estilos que necesitan normalizarse.

## Práctica
Prácticando lo aprendido:

### Normalize

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi primer sitio web con CSS</title>
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/estilos.css">
</head>
```

### Container centrado

```html
<body class="mt-5 container mx-auto">

    <!-- logo -->
    <div class="bg-primary w-500 mx-auto text-center">
        <a href="#" class="logo text-white">Logo Empresa</a>
    </div>

</body>
```

```css
/* Utilidades */
* {
    box-sizing: border-box;
}
.container {
    width: 90%;
}
.logo {
    text-decoration: none;
    font-size: 50px;
    display: inline-block;
    padding: 30px 0;
    text-transform: uppercase;
}

/* Margenes */
.mx-auto {
    margin-left: auto;
    margin-right: auto;
}
.mt-5 {
    margin-top: 5px;
}

/* Medidas */
.w-500 {
    width: 500px;
}

/* Textos */
.text-center{
    text-align: center;
}
.text-white {
    color: #ffffff;
}

/* Colores */
.bg-primary {
    background-color: #007bff;
}


```

### botones

```html
<!-- botones -->
<div class="my-5">
    <a href="" class="btn bg-primary text-white">primary</a>
    <a href="" class="btn bg-secondary text-white">secondary</a>
    <a href="" class="btn bg-danger text-white">danger</a>
    <a href="" class="btn bg-info text-white">info</a>
    <a href="" class="btn bg-success text-white">success</a>
</div>
```

```css
.bg-primary {
    background-color: #007bff;
}

.bg-secondary {
    background-color: #383e56;
}

.bg-danger {
    background-color: #e7305b;
}

.bg-info {
    background-color: #fb7813;
}

.bg-success {
    background-color: #184d47;
}

.btn {
    display: inline-block;
    text-align: center;
    padding: 10px 20px;
    border-radius: 2px;
    text-decoration: none;
}
```

### Cards

```html
<!-- cards -->
<div class="card w-300">
    <img src="images/800x600.jpg" class="card-img" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        <a href="#" class="btn bg-primary text-white">Go somewhere</a>
    </div>
</div>
```

```css
.w-300 {
    width: 300px;
}

.card {
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: 5px;
}

.card-img {
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.card-body {
    padding: 18px;
}

.card-title {
    font-size: 20px;
    margin: 0;
    color: #383e56;
}

.card-text {
    line-height: 1.5;
}
```

## Fuentes
[https://fonts.google.com/specimen/Montserrat?sidebar.open=true&selection.family=Montserrat:wght@100;300;400;500;600;700;800;900](https://fonts.google.com/specimen/Montserrat?sidebar.open=true&selection.family=Montserrat:wght@100;300;400;500;600;700;800;900)

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Práctica</title>

    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/estilos.css">
    
</head>
```

```css
*{
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}
```