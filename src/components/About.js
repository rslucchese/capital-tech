import React from 'react';
import moo from '../img/moo.jpg';
import ufc from '../img/ufc.jpg';

const About = () => {
  return (
    <div className="container">
      <br />
      <h1>Angular (na esquerda) vs. React (na direita)</h1>
      <img src={ufc} />

      <br /><br />
      <h1>Sobre o React</h1>
      <p>
        O React Js é uma biblioteca JavaScript de código aberto para criar interfaces de usuário.
        <br/>
        Sua natureza facilita a composição de interfaces intuitivas, e a transferência de informação de uma forma estruturada, fácil de debugar.
      </p>

      <br />
      <h2>Principais vantagens:</h2>
      <ul>
          <li>Composição</li>
          <li>Simplicidade e Consistencia (componentes são "pure functions")</li>
          <li>Fluxo unidirecional (Flux ou Redux), o que facilita o processo de aprendizagem e debug</li>
          <li>Liberdade: Como o React é somente o "V" em MVC, cabe ao desenvolvedor montar o restante do quebra cabeça</li>
      </ul>

      <h2>Resources</h2>
      <a href="https://redux.js.org/introduction/learning-resources">https://redux.js.org/introduction/learning-resources</a>

      <br /> <br />
      <h1>Sobre o Rafael</h1>
      <p>Ele gosta "muuuuuuuuuuuuuuuuuuu"ito de React.
        <br/>
        (rafael.lucchese@gmail.com ou "Rafael Lucchese" no facebook)
        <br/><br/>
        A Scalable Path onde eu trabalho está sempre em busca de desenvolvedores:
        <br /><b>https://www.scalablepath.com/jobs</b>
        <br />Referal code: <b>RL1209</b>
      </p>
      <img src={moo} />
      <br /> <br />
    </div>
  );
};


export default About;
