import React from 'react';
import { render } from '@testing-library/react';
import { Home } from '../../pages';

jest.mock('react-router-dom');

describe('renders the homepage', () => {
  it('renders the basic <Header /> with a background', () => {
    const { getByText, getAllByText, getAllByPlaceholderText } = render(
      <Home />
    );
    expect(getByText('Films, séries TV et bien plus en illimité.'));
    expect(getByText('Où que vous soyez. Annulez à tout moment.'));
    expect(getAllByPlaceholderText('Adresse e-mail')).toBeTruthy();
    expect(getAllByText('COMMENCER'));
    expect(
      getAllByText(
        'Prêt à regarder xilften ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.'
      )
    );
  });
});
