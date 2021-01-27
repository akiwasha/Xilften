import React from 'react';
import { Accordion } from '../components';
import OptForm from '../components/opt-form';
import faqsData from '../fixtures/faqs.json';

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Foire aux questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}

      <OptForm>
        <OptForm.Input placeholder="Adresse e-mail" />
        <OptForm.Button>COMMENCER</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Prêt à regarder xilften ? Saisissez votre adresse e-mail pour vous
          abonner ou réactiver votre abonnement.
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
