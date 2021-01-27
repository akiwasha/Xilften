import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import faqsData from '../../fixtures/faqs.json';
import { Accordion } from '../../components';

describe('<Accordion />', () => {
  it('renders the <Accordion /> with the populated data', () => {
    const { container, getByText } = render(
      <Accordion>
        <Accordion.Title>Foire aux questions</Accordion.Title>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );

    expect(getByText('Foire aux questions')).toBeTruthy();
    expect(getByText("xilften, qu'est-ce que c'est ?")).toBeTruthy();
    expect(getByText('Combien coûte xilften ?')).toBeTruthy();
    expect(getByText('Où puis-je regarder xilften ?')).toBeTruthy();
    expect(getByText('Comment puis-je annuler mon forfait ?')).toBeTruthy();
    expect(getByText('Que puis-je regarder sur xilften ?')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('opens and closes the <Accordion /> component', () => {
    const { container, queryByText } = render(
      <Accordion>
        <Accordion.Title>Foire aux questions</Accordion.Title>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );

    const whatIsxilftenBodyText =
      "xilften est un service de streaming qui propose une vaste sélection de séries TV, films, animes, documentaires et autres programmes primés sur des milliers d'appareils connectés à Internet. Regardez tout ce que vous voulez, quand vous voulez, sans publicité et à un tarif mensuel très attractif. Découvrez de nouveaux films et séries TV chaque semaine, il y en a pour tous les goûts !";

    expect(queryByText(whatIsxilftenBodyText)).toBeFalsy();
    fireEvent.click(queryByText("xilften, qu'est-ce que c'est ?"));
    expect(queryByText(whatIsxilftenBodyText)).toBeTruthy();

    fireEvent.click(queryByText("xilften, qu'est-ce que c'est ?"));
    expect(queryByText(whatIsxilftenBodyText)).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
