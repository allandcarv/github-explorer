import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="button">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#">
          <img
            src="https://avatars3.githubusercontent.com/u/35379525?s=460&u=d9427ff58b9803d002b470e18a156c18dc511062&v=4"
            alt="Allan Carvalho"
          />
          <div>
            <strong>texto/texto2</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="#">
          <img
            src="https://avatars3.githubusercontent.com/u/35379525?s=460&u=d9427ff58b9803d002b470e18a156c18dc511062&v=4"
            alt="Allan Carvalho"
          />
          <div>
            <strong>texto/texto2</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="#">
          <img
            src="https://avatars3.githubusercontent.com/u/35379525?s=460&u=d9427ff58b9803d002b470e18a156c18dc511062&v=4"
            alt="Allan Carvalho"
          />
          <div>
            <strong>texto/texto2</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
