import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from '../../components';
import { Item } from '../../components/accordion/styles/accordion';

describe('<Footer />', () => {
  it('renders the <Footer /> with the populated data', () => {
    const { container, getByText } = render(
      <Footer>
        <Footer.Title>Des questions ? Appelez le 0805-220-512</Footer.Title>
        <Footer.Break />
        <Footer.Row>
          <Footer.Column>
            <Footer.Link href="#">FAQ</Footer.Link>
            <Footer.Link href="#">Relations Investisseurs</Footer.Link>
            <Footer.Link href="#">Modes de lecture</Footer.Link>
            <Footer.Link href="#">Mentions légales</Footer.Link>
            <Footer.Link href="#">Programmes originaux xilften</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="#">Centre d'aide</Footer.Link>
            <Footer.Link href="#">Recrutement</Footer.Link>
            <Footer.Link href="#">Conditions d'utilisation</Footer.Link>
            <Footer.Link href="#">Nous contacter</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="#">Compte</Footer.Link>
            <Footer.Link href="#">Utiliser des cartes cadeaux</Footer.Link>
            <Footer.Link href="#">Confidentialité</Footer.Link>
            <Footer.Link href="#">Test de vitesse</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="#">Presse</Footer.Link>
            <Footer.Link href="#">Acheter des cartes cadeaux</Footer.Link>
            <Footer.Link href="#">Préférences de cookies</Footer.Link>
            <Footer.Link href="#">Informations légales</Footer.Link>
          </Footer.Column>
        </Footer.Row>
        <Footer.Break />
        <Footer.Text>xilften France</Footer.Text>
      </Footer>
    );

    expect(getByText('Des questions ? Appelez le 0805-220-512'));
    expect(getByText('FAQ'));
    expect(getByText('Relations Investisseurs'));
    expect(getByText('Modes de lecture'));
    expect(getByText('Mentions légales'));
    expect(getByText('Programmes originaux xilften'));
    expect(container.firstChild).toMatchSnapshot();
  });
});
