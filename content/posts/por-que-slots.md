---
title: Por que slots?
description: Neste texto nós vamos falar entender um pouco sobre como slots podem contribuir para a criação de componentes mais genéricos e escaláveis.
date: 11-11-2024 09:50:00
---
## O problema

No desenvolvimento web moderno, a criação de interfaces teve um grande avanço com relação a organização e desenvolvimento das nossas aplicações. Um desses avanços e talvez um dos mais conhecidos é a famosa componentização.
A ciração de componentes é algo que todo frontend vai se deparar em algum momento, por isso a gente deve entender como componentes podem se tornar uma grande dor de cabeça ao longo do nosso trabalho.
Dito isso tudo, vamos citar aqui o que eu acho o maior problema dos componentes, as **props**.

## Mas as props são a solução, não o problema!

Sim e não. Props são sim uma parte vital da criação de componentes mas devemos tomar um certo cuidado ao utilizar esse recurso de maneira descontrolada e sem nenhum planejamento.
Antes de tudo, vou colocar um exemplo aqui para poder elucidar um pouco.

#### Um simples botão

::highlight
Obs.: _Todos os componentes e exemplos utilizados aqui serão desenvolvidos em **Vue** juntamente com **tailwindcss**._
::

Temos que desenvolver um componente de botão. Este botão pode ter um _ícone_, _variantes_, _texto_ e _posicionamento do icone_.
Aqui está nosso botão, apenas com props.:

```vue
<script lang="ts" setup>
const props = defineProps<{
  text: string
  icon?: string
  iconPosition?: 'left' | 'right'
  variant: 'primary' | 'secondary'
}>()

const iconPosition = computed(() => {
  return props.iconPosition === 'left' ? 'flex-row' : 'flex-row-reverse'
})

const variants = computed(() => {
  return props.variant === 'primary'
    ? 'bg-blue-500 text-white border-blue-700'
    : 'bg-white text-blue-700 border-blue-500'
})
</script>

<template>
  <button
    :class="[iconPosition, variants]"
    class="flex items-center justify-center border"
  >
    <Icon v-if="props.icon" :name="props.icon" /> {{ props.text }}
  </button>
</template>
```

Analisando um pouco esse componente, vemos que existe um ícone dentro dele. Vamos supor que em um belo dia, você precise entregar este mesmo botão em uma tela, entretanto o ícone que você precisa adicionar ao botão não está incluso na biblioteca adotada pela empresa. Você como um bom desenvolvedor, vai conversar com o time de design, alinhar algumas coisas e por fim, ainda vai precisar de utilizar este ícone.
Triste, você abre o seu arquivo de botão, adiciona uma outra condição para este ícone desconhecido.
Uma semana depois, você precisa adicionar um estado de _loading_ neste botão. Nisso você precisa adicionar uma outra prop _loading_, fazer alterações estruturais no componente, adicionar novos estilos e seu componente já se tornou um item com várias props, várias condições dentro dele com vários propósitos diferentes.

## Como podemos resolver isso?

Uma das maneiras de resolver esse problema é utilizar _slots_ ou _children_ pra quem é do **react**.
Com eles, podemos eliminar quase todas as props que temos no botão acima.
Vamos ver este exemplo.

```vue
<script lang="ts" setup>
const props = defineProps<{
  variant: 'primary' | 'secondary'
}>()

const variants = computed(() => {
  return props.variant === 'primary'
    ? 'bg-blue-500 text-white border-blue-700'
    : 'bg-white text-blue-700 border-blue-500'
})
</script>

<template>
  <button
    :class="variants"
    class="flex items-center justify-center border"
  >
    <slot />
  </button>
</template>
```

Aplicando este botão, teríamos o seguinte código:

```vue
<Button variant="secondary">
  <Icon name="icon:facebook" /> Meu facebook
</Button>

<Button variant="secondary">
  Meu facebook <Icon name="icon:facebook" />
</Button>

<Button variant="secondary">
  Meu facebook
</Button>
```

Perceba que a única prop que sobrou foi a de _variant_, o resto conseguimos eliminar todas.
Se você quiser forçar mais um pouco e adicionar um _loading_, você consegue.

```vue
<Button variant="secondary">
  <template v-if="loading">
    <Icon name="icon:spinner" /> Carregando
  </template>
   <template v-else>
    <Icon name="icon:facebook" /> Meu facebook
  </template>
</Button>
```

::highlight
Caso seu componente tenha um estado de `disabled` , adicione uma prop para este item e trabalhe sobre ela, não há problema algum nisso!
::

Podemos ver que temos um controle muito maior sobre o que está dentro do nosso componente, reduzimos a quantidade de props e estamos prevenidos de qualquer item desconhecido que venha a ser inserido dentro do nosso botão!

## Conclusão

Não vamos eliminar o uso de _props_, ainda precisamos delas, porém podemos evitar esse acoplamento desnecessário de componentes que **precisam** ser genéricos. Os _slots_ contribuem muito para esses casos onde sabemos que esse componente pode vir sofrer alguma alteração ou seu conteúdo não está bem definido com o time de design.

Tirei uns minutinhos para escrever isso depois que vi essa postagem [aqui](https://bsky.app/profile/lixeletto.bsky.social/post/3lae6fi5pmh2n).
