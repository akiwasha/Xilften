import React from 'react';
import { render } from '@testing-library/react';
import { Feature } from '../../components';

describe('<Feature />', () => {
  it('renders the <Feature /> with populated data', () => {
    const { container, getByText } = render(
      <Feature>
        <Feature.Title>
          Films, séries TV et bien plus en illimité.
        </Feature.Title>
        <Feature.SubTitle>
          Où que vous soyez. Annulez à tout moment.
        </Feature.SubTitle>
      </Feature>
    );

    expect(
      getByText('Films, séries TV et bien plus en illimité.')
    ).toBeTruthy();
    expect(getByText('Où que vous soyez. Annulez à tout moment.')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <Feature /> with a title', () => {
    const { container, queryByText } = render(
      <Feature>
        <Feature.Title>
          Films, séries TV et bien plus en illimité.
        </Feature.Title>
      </Feature>
    );

    expect(
      queryByText('Films, séries TV et bien plus en illimité.')
    ).toBeTruthy();
    expect(
      queryByText('Où que vous soyez. Annulez à tout moment.')
    ).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <Feature /> with a subtitle', () => {
    const { container, queryByText, getByText } = render(
      <Feature>
        <Feature.SubTitle>
          Où que vous soyez. Annulez à tout moment.
        </Feature.SubTitle>
      </Feature>
    );

    expect(
      queryByText('Films, séries TV et bien plus en illimité.')
    ).toBeFalsy();
    expect(
      queryByText('Où que vous soyez. Annulez à tout moment.')
    ).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
