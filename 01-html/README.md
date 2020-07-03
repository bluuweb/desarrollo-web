# 01 - HTML
Las siglas HTML vienen de “Hyper Text Markup Language” o Lenguaje Marcado de Hipertexto.
Comenzaremos con las instalaciones necesarias:

## Editor de código
Algunas alternativas:
* [Visual Studio Code](https://code.visualstudio.com/)
* [Atom](https://atom.io/)
* [SublimeText](https://www.sublimetext.com/)

## Navegador
* [Mozilla](https://www.mozilla.org/es-CL/firefox/new/)
* [Chrome](https://www.google.com/intl/es/chrome/)
* [Opera](https://www.opera.com/es)

## ¿Qué es HTML?
[https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics)

* HTML no es un lenguaje de programación.
* Es un lenguaje de marcado que define la estructura de tu contenido.
* Se basa en etiquetas o elementos o tagname.

<img src='https://mdn.mozillademos.org/files/11913/htmlexp.png'>

También podemos agregar atributos pero lo veremos más adelante:

<img src='https://mdn.mozillademos.org/files/11915/htmlatributos.png'>

## Hola mundo
Veamos un ejemplo rápido para poner marcha a nuestro código

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Mi página de prueba</title>
  </head>
  <body>
    <p>Hola mundo HTML!</p>
  </body>
</html>
```

* `<!DOCTYPE html>` Indica el tipo de documento, hoy día es simplemente un artefacto antiguo que a nadie le importa, pero que debe ser incluido para que todo funcione correctamente. Por ahora, eso es todo lo que necesitas saber.
* `<html lang="es"></html>` Este elemento encierra todo el contenido de la página entera y, a veces, se le conoce como el elemento raíz (root element).
* `<head></head>` No es contenido visible por los visitantes de la página. Incluye cosas como palabras clave (keywords), una descripción de la página que quieres que aparezca en resultados de búsquedas, código CSS para dar estilo al contenido, etc.
* `<meta charset="utf-8">` Este elemento establece el juego de caracteres que tu documento usará en utf-8, que incluye casi todos los caracteres de todos los idiomas humanos. 🔥 [https://unicode-table.com/es/](https://unicode-table.com/es/)
* `<title></title>` Título de la página.
* `<body></body>` Encierra todo el contenido que deseas mostrar a los usuarios web que visiten tu página.

## Etiquetas populares

#### Encabezados o títulos
```html
<h1>Título principal de nuestro sitio web.</h1>
<h2>Utilízala en los encabezados de secciones.</h2>
<h3>Utilízala en sub-secciones.</h3>
<h4>Utilízala en sub-sub-secciones. o como estimes conveniente</h4>
<h5>Más de lo mismo...</h5>
<h6>No existe el "<h7>" por lo tanto está es la última.</h6>
```

#### Párrafo
```html
<p>Tu primer párrafo.</p>
```

#### Formato
[https://www.w3schools.com/html/html_formatting.asp](https://www.w3schools.com/html/html_formatting.asp)
```html
<b>Texto en negrita</b>
<i>Texto en cursiva</i>
<s>Texto tachado</s>
<del>Texto eliminado</del>
<ins>Texto insertado</ins>
<sub>Texto de subíndice</sub>
<sup>Texto en superíndice</sup>
<small>Texto pequeño</small>
<mark>Texto marcado</mark>

<hr>

<strong>Texto importante</strong>  
<em>Texto enfatizado</em>

<p>
    Este es un párrafo <b>que contiene texto en negritas</b> y además
    de <i>un texto en cursivas</i> y como no
    un <b><s>Un texto tachado y en negritas.</s></b>
</p>
```

#### Listas e índices
```html
<ul>
   <li>Elemento 1</li>
   <li>Elemento 2</li>
   <li>Elemento 3</li>
   <li>Elemento 4</li>
</ul>

<!-- Más conocida como lista ordenada -->
<ol>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  ...
  <li>Elemento N</li>
</ol>
```

#### Comentarios: Son ayudas para documentar nuestro código.
```html
<!-- Este es un comentario -->
<!-- Esta etiqueta centra nuestro contenido
Se utilizaba en la versión 4
<center></center>
Maravilloso -->
```

#### Anclas o Hipervínculos
```html
<a href="https://youtube.com/bluuweb">Ir a página de Google</a>
```

#### Imágenes
```html
<!-- Sin etiqueta de cierre, ¿qué curioso no? -->
<img src="https://mdn.mozillademos.org/files/11913/htmlexp.png">
```

#### Divisiones
```html
<!-- Dividimos el sitio web en secciones -->
<div>
    <a href="https://google.com">Google</a>
</div>
<div>
    <img src="https://mdn.mozillademos.org/files/11913/htmlexp.png">
</div>
```

[https://devdocs.io/html/](https://devdocs.io/html/)

## Práctica
```html
<!-- este es el título de mi sitio web -->
<h1>Mi magnífica primera página web</h1>
<hr>
<!-- aquí está la imagen -->
<img src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" alt="">
<br>
<!-- aquí la descripción -->
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam autem doloremque corporis facere error et quasi minima iure animi id, nulla iste aliquam tenetur sequi natus nemo rerum magni assumenda.</p>
<!-- aquí un enlace con un botón -->
<a href="https://www.youtube.com/bluuweb">
    <button>¿Dame un like?</button>
</a>
```

## Imágenes
[https://developer.mozilla.org/es/docs/Web/HTML/Elemento/img](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/img)

```html
<img src="mdn-logo-sm.png" alt="MDN">
```

#### Atributos
* `alt` Este atributo define el texto alternativo que describe la imagen. Los usuarios lo verán; si la URL de la imagen es errónea, la imagen tiene un formato no soportado, o si la imagen aun no se ha descargado.
* `src` La URL de la imagen. Este atributo es obligatorio.

#### Formatos de imagen soportada
* JPEG
* GIF, including animated GIFs
* PNG
* APNG
* SVG
* BMP
* BMP ICO
* PNG ICO

#### Variantes
```html
<a href="https://developer.mozilla.org/">
  <img src="mdn-logo-sm.png" alt="MDN">
</a>
```

## Anclas
El Elemento HTML Anchor `<a>` crea un enlace a otras páginas de internet, archivos o ubicaciones dentro de la misma página, direcciones de correo, o cualquier otra URL.

```html
<a href="https://developer.mozilla.org">MDN</a>
```

## Desafío

* Crea 3 documentos HTML en una misma carpeta.
* Utiliza la estructura de HTML5 ya aprendida.
* En cada uno de ellos crea anclas para navegar entre estos documentos.
* Utiliza el siguiente ejemplo como guía.

```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página 1</title>
</head>

<body>
    <h1>Página #1</h1>
    <a href="pagina-2.html">
        <button>Ir a página dos</button>
    </a>
</body>

</html>
```

## Link útiles
* [https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
* [https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
* [https://www.w3schools.com/html/default.asp](https://www.w3schools.com/html/default.asp)
* [https://es.wikipedia.org/wiki/UTF-8](https://es.wikipedia.org/wiki/UTF-8)
* 🔥 [https://unicode-table.com/es/](https://unicode-table.com/es/)

## Atajos populares
* `ctrl + s` Guardar
* `ctrl + c` Copiar
* `ctrl + v` Pegar
* `ctrl + x` Cortar
* `ctrl + f` Buscar
* `ctrl + a` Seleccionar todo
* `ctrl + w` Cerrar documento actual
* `ctrl + o` Abrir documento
* `ctrl + p` Buscar documento
* `ctrl + d` Seleccionar elementos iguales
* `ctrl + n` Nuevo documento
* `alt + ⭥` Mover elemento

## Extensiones VSC
* Live Server
* Material Theme
* Beautify

<img :src="$withBase('/img/beautify.PNG')" alt="foo">










