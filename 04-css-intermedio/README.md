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