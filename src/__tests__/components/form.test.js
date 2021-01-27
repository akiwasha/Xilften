import React from 'react';
import { render } from '@testing-library/react';
import { Form } from '../../components';

jest.mock('react-router-dom');

describe('<Form />', () => {
  it('renders the <Form /> with the populated data', () => {
    const { container, getByText, queryByText, getByPlaceholderText } = render(
      <Form>
        <Form.Title>S'identifier</Form.Title>

        <Form.Base>
          <Form.Input placeholder="Adresse email" onChange={() => {}} />
          <Form.Input
            type="password"
            placeholder="Mot de passe"
            onChange={() => {}}
          />
          <Form.Submit disabled type="submit">
            S'identifier maintenant
          </Form.Submit>
        </Form.Base>
        <Form.Text>
          Première visite sur xilften?{' '}
          <Form.Link to="signup">Inscrivez-vous.</Form.Link>
        </Form.Text>
        <Form.TextSmall>
          Cette page est protégée par Google reCAPTCHA pour nous assurer que
          vous n'êtes pas un robot.
        </Form.TextSmall>
      </Form>
    );

    expect(
      getByText(
        "Cette page est protégée par Google reCAPTCHA pour nous assurer que vous n'êtes pas un robot."
      )
    ).toBeTruthy();
    expect(getByText("S'identifier")).toBeTruthy();
    expect(getByText("S'identifier maintenant").disabled).toBeTruthy();
    expect(getByPlaceholderText('Adresse email')).toBeTruthy();
    expect(getByPlaceholderText('Mot de passe')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <Form /> with an error', () => {
    const { container, getByText, queryByText } = render(
      <Form>
        <Form.Error>Votre adresse email est déjà utilisée</Form.Error>
        <Form.Submit type="submit">S'identifier</Form.Submit>
      </Form>
    );

    expect(getByText('Votre adresse email est déjà utilisée')).toBeTruthy();
    expect(queryByText("S'identifier").disabled).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
