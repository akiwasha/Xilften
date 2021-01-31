import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { FirebaseContext } from '../../context/firebase';
import { Signup } from '../../pages';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({}),
}));

const firebase = {
  auth: jest.fn(() => ({
    createUserWithEmailAndPassword: jest.fn(() =>
      Promise.resolve({
        user: {
          updateProfile: jest.fn(() => Promise.resolve('I am signed up!')),
        },
      })
    ),
  })),
};

describe('<Signup />', () => {
  it('renders the sign up page with a form submission', async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <Signup />
        </FirebaseContext.Provider>
      </Router>
    );

    await act(async () => {
      await fireEvent.change(getByPlaceholderText('Prénom'), {
        target: { value: 'Pierre-Laurent' },
      });
      await fireEvent.change(getByPlaceholderText('Adresse email'), {
        target: { value: 'plv@gmail.com' },
      });
      await fireEvent.change(getByPlaceholderText('Mot de passe'), {
        target: { value: 'Mot de passe' },
      });
      fireEvent.click(getByTestId('sign-up'));

      expect(getByPlaceholderText('Prénom').value).toBe('Pierre-Laurent');
      expect(getByPlaceholderText('Adresse email').value).toBe('plv@gmail.com');
      expect(getByPlaceholderText('Mot de passe').value).toBe('Mot de passe');
      expect(queryByTestId('error')).toBeFalsy();
    });
  });
});
