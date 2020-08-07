# 05 Flexbox

* [https://www.w3schools.com/css/css3_flexbox.asp](https://www.w3schools.com/css/css3_flexbox.asp)
* [https://css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)


## Contenedor
Envolvemos todos nuestros items dentro de un div contenedor, el cual tendrá la clase `display: flex` 

```html
<div class="d-flex">
    <div class="item">item 1</div>
    <div class="item">item 2</div>
    <div class="item">item 3</div>
</div>
```

```css
.d-flex {
    display: flex;
    border: solid;
}

.item {
    background-color: #fb7813;
    text-align: center;
    border: solid;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    width: 200px;
}
```

## Dirección
```css
.flex-row {
    flex-direction: row;
}

.flex-row-reverse {
    flex-direction: row-reverse;
}

.flex-column {
    flex-direction: column;
}

.flex-column-reverse {
    flex-direction: column-reverse;
}
```

```html
<div class="d-flex flex-column">
    <div class="item">item 1</div>
    <div class="item">item 2</div>
    <div class="item">item 3</div>
</div>
```

## Wrap
```css
.flex-wrap {
    flex-wrap: wrap;
}

.flex-wrap-reverse {
    flex-wrap: wrap-reverse;
}
```

## Justify content

```css
.justify-content-start {
    justify-content: flex-start;
}

.justify-content-end {
    justify-content: flex-end;
}

.justify-content-center {
    justify-content: center;
}

.justify-content-between {
    justify-content: space-between;
}

.justify-content-around {
    justify-content: space-around;
}
```










