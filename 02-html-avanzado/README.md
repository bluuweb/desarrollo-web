# 02 - HTML Avanzado
Conozcamos cosas más avanzadas de HTML

## Tablas
```html
<table border='1'>
    <tr>
        <td>Gato</td>
        <td>3 años</td>
        <td>Negro</td>
    </tr>
    <tr>
        <td>Perro</td>
        <td>1 mes</td>
        <td>Azul</td>
    </tr>
</table>
```

* `<table></table>` Comienzo y final de una tabla.
* `<tr></tr>` Comienzo y final de una fila.
* `<td></td>` Contenido de una celda.

```html{3-5}
<table border='1'>
    <tr>
        <th>Mascota</th>
        <th>Edad</th>
        <th>Color</th>
    </tr>
    <tr>
        <td>Gato</td>
        <td>3 años</td>
        <td>Negro</td>
    </tr>
    <tr>
        <td>Perro</td>
        <td>1 mes</td>
        <td>Azul</td>
    </tr>
</table>
```

* `<th>Mascota</th>` Define la fila de encabezado

```html{2-3}
<table border='1'>
    <!-- Título de la tabla -->
    <caption>Titulo de la tabla</caption>
    <tr>
        <th>Mascota</th>
        <th>Edad</th>
        <th>Color</th>
    </tr>
    ...
```

#### Estructurar en partes tablas grandes
```html{4,10,12,18,31}
<table border='1'>
    <caption>Titulo de la tabla</caption>
    <!-- Encabezado -->
    <thead>
        <tr>
            <th>Mascota</th>
            <th>Edad</th>
            <th>Color</th>
        </tr>
    </thead>
    <!-- Pie de tabla -->
    <tfoot>
        <tr>
            <th>Mascota</th>
            <th>Edad</th>
            <th>Color</th>
        </tr>
    </tfoot>
    <!-- contenido -->
    <tbody>
        <tr>
            <td>Gato</td>
            <td>3 años</td>
            <td>Negro</td>
        </tr>
        <tr>
            <td>Perro</td>
            <td>1 mes</td>
            <td>Azul</td>
        </tr>
    </tbody>
</table>
```

#### Combinar
```html{22}
<table border='1'>
    <thead>
        <tr>
            <th>Mascota</th>
            <th>Edad</th>
            <th>Color</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Gato</td>
            <td>3 años</td>
            <td>Negro</td>
        </tr>
        <tr>
            <td>Perro</td>
            <td>1 mes</td>
            <td>Azul</td>
        </tr>
        <tr>
            <td>Rana</td>
            <td colspan="2">Desconocido</td>
        </tr>
    </tbody>
</table>
```

```html{18}
<table border='1'>
    <thead>
        <tr>
            <th>Mascota</th>
            <th>Edad</th>
            <th>Color</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Gato</td>
            <td>3 años</td>
            <td>Negro</td>
        </tr>
        <tr>
            <td>Perro</td>
            <td>1 mes</td>
            <td rowspan="2">Azul</td>
        </tr>
        <tr>
            <td>Rana</td>
            <td>2 semanas</td>
        </tr>
    </tbody>
</table>
```

## Formularios
En construcción...