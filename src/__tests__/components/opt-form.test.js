import React from 'react';
import { render } from '@testing-library/react';
import { OptForm } from '../../components';

describe('<OptForm />', () => {
  it('renders the <OptForm /> with populated data', () => {
    const { container, getByText, getByPlaceholderText } = render(
      <OptForm>
        <OptForm.Input placeholder="Adresse e-mail" />
        <OptForm.Button>COMMENCER</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Prêt à regarder xilften ? Saisissez votre adresse e-mail pour vous
          abonner ou réactiver votre abonnement.
        </OptForm.Text>
      </OptForm>
    );

    expect(getByText('COMMENCER')).toBeTruthy();
    expect(
      getByText(
        'Prêt à regarder xilften ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.'
      )
    ).toBeTruthy();
    expect(getByPlaceholderText('Adresse e-mail')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
