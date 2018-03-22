Descrição do evento
O Capital Tech será um evento que terá como intuito reunir várias comunidades técnicas de Brasília para um dia de troca de conhecimento e formação de profissionais. 

Além das comunidades técnicas teremos palestras de nível 100 para que outras áreas possam trocar conhecimento e contato com profissionais de TI, como por exemplo, profissionais de Pedagogia que estarão no evento.

O evento contará com 3 trilhas, com palestras 100 em assuntos como Office 365, tecnologias educacionais e Startups, onde o publico de TI poderá assistir palestras com públicos de outras áreas, e palestras de nível 200 a 400 para o público de TI. Gerando assim, um ambiente de onde podem sair várias novas ideias e soluções, com pessoas que tem necessidades e pessoas que podem transformar essas necessidades em soluções.

Nesse primeiro evento, teremos três trilhas: 

 • Inovação - Foco em desenvolvimento e infraestrutura;

 • Cloud - Foco em soluções hospedadas na nuvem, desde produtos o Office 365 a produtos Open Source e de Big Data;

 • Startups - Foco em produtos, serviços processos e soluções para startups.


Mais informações em: 
capitaltech.pro

Projeto realizado com o ReactJs CRUD Boilerplate (Informações abaixo)


# ReactJs CRUD Boilerplate 
[![Build Status](https://travis-ci.org/ariesmcrae/reactjs-crud-boilerplate.svg?branch=master)](https://travis-ci.org/ariesmcrae/reactjs-crud-boilerplate) [![Coverage Status](https://coveralls.io/repos/github/ariesmcrae/reactjs-crud-boilerplate/badge.svg)](https://coveralls.io/github/ariesmcrae/reactjs-crud-boilerplate) 

[![dependencies Status](https://david-dm.org/ariesmcrae/reactjs-crud-boilerplate/status.svg)](https://david-dm.org/ariesmcrae/reactjs-crud-boilerplate) [![devDependencies Status](https://david-dm.org/ariesmcrae/reactjs-crud-boilerplate/dev-status.svg)](https://david-dm.org/ariesmcrae/reactjs-crud-boilerplate?type=dev)

## Demo (Live Interactive)
[https://d3cmu8mv5wwijw.cloudfront.net](https://d3cmu8mv5wwijw.cloudfront.net)

## Preview
<img src='https://github.com/ariesmcrae/ariesmcrae.github.com/blob/master/reactjs-crud-boilerplate.gif?raw=true' width='768' alt='Preview'>

## Prerequisite
* Nodejs v6+
* yarnpkg (optional)


## Getting Started
```sh
git clone https://github.com/ariesmcrae/reactjs-crud-boilerplate.git

cd reactjs-crud-boilerplate

yarn install
    or
npm install

yarn start
    or
npm start
```

Open [http://localhost:3000](http://localhost:3000)<br>


## Libraries used
* ReactJs
* Redux
* create-react-app
* React Router 4
* Bootstrap 4
* redux-form
* React Boostrap Table
* Babel
* ESLint
* Test Runner: Jest
* Test Assertion: Jest
* Test Helper Library: Enzyme
* Test Headless DOM: JSDOM
* react-addons-test-utils: needed by Enzyme
* Mock API Data: hand rolled
* toastr
* jquery (needed by toastr and bootstrap 4)
* lodash
* Font Awesome: because Bootstrap 4 no longer suppies glyphicons
* Tether
* jquery
* thunk testing: nock (for mocking http calls), and redux-mock-store
* code coverage: Jest & coveralls


## Non create-react-app version
It's located in the branch **non-create-react-app**.
It uses hand crafted `Webpack 2`

```sh
git clone https://github.com/ariesmcrae/reactjs-crud-boilerplate.git

cd reactjs-crud-boilerplate

git checkout -b non-create-react-app origin/non-create-react-app

yarn install

yarn start
```


## Credits
This project took inspirations from :
* [react-redux-react-router-es6](https://github.com/coryhouse/pluralsight-redux-starter) by [@coryhouse](https://twitter.com/housecor)
* [bootstrap-4-playlist](https://github.com/iamshaunjp/bootstrap-4-playlist) by [@iamshaunjp](https://github.com/iamshaunjp)
