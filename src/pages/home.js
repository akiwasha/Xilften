import React from 'react';
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from '../containers/jumbotron';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Films, séries TV et bien plus en illimité.
          </Feature.Title>
          <Feature.SubTitle>
            Où que vous soyez. Annulez à tout moment.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Adresse e-mail" />
            <OptForm.Button>COMMENCER</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous
              abonner ou réactiver votre abonnement.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
