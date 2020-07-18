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

## box-sizing
Para mantener el ancho a 300 px, sin importar la cantidad de relleno, puede usar la propiedad ``box-sizing``. Esto hace que el elemento mantenga su ancho; Si aumenta el relleno, el espacio de contenido disponible disminuirá.

Use la propiedad de tamaño de caja para mantener el ancho a 300 px, sin importar la cantidad de relleno:
```css
div {
  width: 300px;
  padding: 25px;
  box-sizing: border-box;
}
```

## Margin
Las marginpropiedades CSS se utilizan para crear espacio alrededor de los elementos, fuera de los bordes definidos.
[https://www.w3schools.com/css/css_margin.asp](https://www.w3schools.com/css/css_margin.asp)

```css
margin-top
margin-right
margin-bottom
margin-left
```




