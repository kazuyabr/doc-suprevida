---
id: button
title: Componente de Button
sidebar_label: Button
---

## Como utilizar?

Para utilizar o componente é necessário realizar a importação.


```js
import Button from '../components/Button'
```

Após realizar a importação do componente `<Button>` adicione a tag em seu arquivo `.tsx`.

```html
<Button>
  Entrar
</Button>
```

## Propriedades


### Tipo: 

A propriedade `tipo` altera o estilo do componente de acordo com o tema configurado. `tipo` não é obrigatório, seu valor padrão sempre vai ser: `false`.

Valores disponíveis: `tipo="primary"` `tipo="secondary"`

``` js
<Button tipo="primary">
  Entrar
</Button>
```

``` js
<Button tipo="secondary">
  Entrar
</Button>
```


### Icon: 

A propriedade `icon` adicionar um ícone no componente. `icon` não é obrigatória, seu valor padrão sempre vai ser: `false`.

Valores disponíveis: `icon="true"` ou`icon="false"`

``` js
<Button icon="false">
  Entrar
</Button>
```

``` js
<Button icon="true">
  Entrar
</Button>

```

### Loading: 

A propriedade `loading` retira o texto do botão e coloca uma circular progress no lugar. `loading` não é obrigatório, seu valor padrão sempre vai ser: `false`.

Valores disponíveis: `loading="true"` ou `loading="false"`

```js
<Button loading="false">
  Entrar
</Button>
```

```js
<Button loading="true">
  Entrar
</Button>
```

### Width: 

A propriedade `width` altera a largura do componente. `width` não é obrigatório, seu valor padrão sempre vai ser: `0`.

``` js
<Button width="4rem">Entrar</Button>
```

### Height: 

A propriedade `height` altera a altura do componente. `height` não é obrigatório, seu valor padrão sempre vai ser: `0`.

``` js
<Button height="2.5rem">Entrar</Button>
```
