# DevBSB UI Kit 🌠

![](https://devbsb.com.br:5000/files/234daa2a927fa910ceefd79f1f9ae355-ui-kit.png)

Esse UI kit foi criado para facilitar a criação de aplicações ReactJS, com componentes prontos para ser utilizados.
Utilizado nesse projeto: _React, Typescript, Styled-Components, Storybook e React-Icons_.

[Storybook online](https://devbsb.com.br/ui-kit/) 🌍

[Código da aplicação no GitHub](https://github.com/iaematt/ui-kit) 📝

## Instalações e uso ⚙

Crie um novo projeto com _create react-app_, ou utilize um existente e adicione o ui kit.

```
# Crie um novo projeto
$ yarn create react-app my-app

# Acesse a pasta do projeto
$ cd my-app/

# Instale o ui kit
$ yarn add devbsb-ui-kit

# Rode o projeto
$ yarn start
```

Pronto! Agora acesse nosso [storybook](https://devbsb.com.br/ui-kit/), para utilizar os components.

### Exemplo de uso ⌛

Exemplo de uso do componente Spinner.

```
import React from 'react';
import { Spinner } from 'devbsb-ui-kit';

function Loading() {
    return(<Spinner />);
}

export default Loading;
```

## Desenvolvimento 📌

Clone ou faça o download [desse repositório](https://github.com/iaematt/ui-kit).

```
# Clone o repositório
$ git clone https://github.com/iaematt/ui-kit

# Acesse a pasta
$ cd ui-kit/

# Instale as dependencias
$ yarn

# Rode a aplicação
$ yarn storybook

# Para gerar sua aplicação
$ yarn build-storybook
```

Acesse localhost:8080 em seu navegador.

## Licença

_Distribuído sob a licença MIT._
