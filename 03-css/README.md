# 03 - CSS Fundamentos
* CSS (en inglés Cascading Style Sheets) Hojas de estilo en Cascada. 
* Es el responsable de todo lo visual de nuestro sitio web.
* CSS describe cómo deben mostrarse los elementos HTML.

## Vista rápida
Ingresa el siguiente código
```html
<h1 style="color: peru;">Título del sitio web</h1>
```
Y wualá cambiamos el color del título de nuestro sitio web.

## Archivos separados
Como estamos trabajando con un lenguaje diferente a HTML podemos ordenar nuestro código en archivos con la extensión ``.css``

Dentro del ``<head>`` escribe los siguiente:
```html
<link rel="stylesheet" href="estilos.css">
```

Crea el archivo en cuestión ``estilos.css``
Y ahora escribamos nuestras primeras lineas de código CSS.

```css
h1{
    font-size: 50px;
}
```
Ten en cuenta que ahora todos los ``<h1>`` que crees tendrás los mismos estilos.

## Sintaxis
Definamos las reglas generales para escribir código CSS.

<img src='https://www.w3schools.com/css/selector.gif'>

* El selector apunta al elemento HTML que desea diseñar.
* El bloque de declaración contiene una o más declaraciones separadas por punto y coma.
* Cada declaración incluye un nombre de propiedad CSS y un valor, separados por dos puntos.
* Múltiples declaraciones CSS están separadas por punto y coma, y ​​los bloques de declaración están rodeados por llaves.

## Alernativas
Dentro del head puedes incluir código CSS:
```html
<style>
    p {
        color: palevioletred;
    }
</style>
```

## colores
[https://www.w3schools.com/css/css_colors.asp](https://www.w3schools.com/css/css_colors.asp)

#### Por nombre: (muy limitado)
* [https://www.w3schools.com/colors/colors_names.asp](https://www.w3schools.com/colors/colors_names.asp)

#### Colores en hexadecimal: (lo más utilizado)
* [https://www.w3schools.com/css/css_colors_hex.asp](https://www.w3schools.com/css/css_colors_hex.asp)
* [https://colorhunt.co/](https://colorhunt.co/)

#### RGB y RGBA: (podemos agregar transparencia)
* [https://www.w3schools.com/css/css_colors_rgb.asp](https://www.w3schools.com/css/css_colors_rgb.asp)


## Selectores
Hace referencia a como aplicamos estilos a determinados elementos HTML.
[https://www.w3schools.com/css/css_selectors.asp](https://www.w3schools.com/css/css_selectors.asp)

#### Elementos HTML
Estilos generales: Ya que todos nuestros párrafos tendrás el mismo diseño.
```css
p {
  text-align: center;
  color: red;
}
```

#### ID
Cuidado: Los ID son únicos por cada documento HTML por lo tanto <b>no puede haber dos o más elementos HTML con el mismo ID</b>.
```css
#mi_id_unico {
  text-align: center;
  color: red;
}
```
```html
<p id="mi_id_unico">Lorem ipsum dolor sit amet</p>
```

#### Clase
Ventaja: Podemos agregar esa clase a más de un elemento HTML.
```css
.mi-clase {
    background-color: #e8505b;
    color: #f3ecc2;
}
```
```html
<button class="mi-clase">Mi botón</button>
```

## Ejercicios
Trata de resolver los siguientes ejercicios:

* [Ejercicio 1](https://www.w3schools.com/css/exercise.asp?filename=exercise_selectors1)
* [Ejercicio 2](https://www.w3schools.com/css/exercise.asp?filename=exercise_selectors2)
* [Ejercicio 3](https://www.w3schools.com/css/exercise.asp?filename=exercise_selectors3)

## Práctica