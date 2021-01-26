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
    expect(getByText("Netflix, qu'est-ce que c'est ?")).toBeTruthy();
    expect(getByText('Combien coûte Netflix ?')).toBeTruthy();
    expect(getByText('Où puis-je regarder Netflix ?')).toBeTruthy();
    expect(getByText('Comment puis-je annuler mon forfait ?')).toBeTruthy();
    expect(getByText('Que puis-je regarder sur Netflix ?')).toBeTruthy();
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

    const whatIsNetflixBodyText =
      "Netflix est un service de streaming qui propose une vaste sélection de séries TV, films, animes, documentaires et autres programmes primés sur des milliers d'appareils connectés à Internet. Regardez tout ce que vous voulez, quand vous voulez, sans publicité et à un tarif mensuel très attractif. Découvrez de nouveaux films et séries TV chaque semaine, il y en a pour tous les goûts !";

    expect(queryByText(whatIsNetflixBodyText)).toBeFalsy();
    fireEvent.click(queryByText("Netflix, qu'est-ce que c'est ?"));
    expect(queryByText(whatIsNetflixBodyText)).toBeTruthy();

    fireEvent.click(queryByText("Netflix, qu'est-ce que c'est ?"));
    expect(queryByText(whatIsNetflixBodyText)).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
