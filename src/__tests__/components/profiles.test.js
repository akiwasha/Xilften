import React from 'react';
import { render } from '@testing-library/react';
import { Profiles } from '../../components';

describe('<Profiles />', () => {
  it('renders the <Profiles /> with the populated data', () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Qui regarde?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => {}}>
            <Profiles.Picture
              src="/images/plv.png"
              data-testid="profile-picture"
            />
            <Profiles.Name>Pierre-Laurent Vincent</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );
    expect(getByText('Qui regarde?')).toBeTruthy();
    expect(getByTestId('profile-picture')).toBeTruthy();
    expect(getByText('Pierre-Laurent Vincent')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <Profiles /> with the populated data', () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Qui regarde?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => {}}>
            <Profiles.Picture
              src="/images/plv.png"
              data-testid="profile-picture-misc"
            />
            <Profiles.Name>Pierre-Laurent Vincent</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );
    expect(getByText('Qui regarde?')).toBeTruthy();
    expect(getByTestId('profile-picture-misc')).toBeTruthy();
    expect(getByText('Pierre-Laurent Vincent')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
