# Posicionamento

### relative

```
div {
    position:relative;
}
```

### absolute

```
div {
    position:absolute;
}
```

# Seletores de Elementos

### Seletor Descendente

Seleciona elementos que são descendentes de um elemento específico.

```
div p {
  color: blue;
}

```

### Seletor de Atributo

Seleciona elementos com um atributo específico.

```
[atributo] {
  border: 1px solid black;
}

```

### Seletor Filho

Seleciona elementos que são filhos diretos de um elemento específico.

```
div > p {
  color: green;
}
```

### Seletor de Irmão Adjacente

Seleciona o elemento que é o próximo irmão imediato de um elemento específico.

```
h1 + p {
  margin-top: 0;
}
```

### Seletor de Irmão Geral

Seleciona todos os elementos irmãos que seguem um elemento específico.

```
h1 ~ p {
  color: red;
}
```

# Seletores de Pseudo-classes

### Aplica estilo quando o mouse está sobre o elemento.

```
a:hover {
  color: red;
}
```

### Aplica estilo quando o elemento tem foco.

```
input:focus {
  border-color: blue;
}
```

### Seleciona o enésimo filho de um tipo de elemento.

```
li:nth-child(2) {
  color: green;
}
```

# Seletores de Pseudo-elementos

### ::before

Insere conteúdo antes do conteúdo de um elemento.

```
p::before {
  content: "Note: ";
  font-weight: bold;
}
```

### ::after

Insere conteúdo após o conteúdo de um elemento.

```
p::after {
  content: " - The End";
  font-weight: bold;
}
```

### ::first-line

Aplica estilo à primeira linha de um bloco de texto.

```
p::first-line {
  color: red;
}
```

### ::first-letter

Aplica estilo à primeira letra de um bloco de texto.

```
p::first-letter {
  font-size: 200%;
  color: blue;
}
```
