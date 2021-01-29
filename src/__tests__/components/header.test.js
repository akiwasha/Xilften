import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Header } from '../../components';

jest.mock('react-router-dom');

describe('<Header />', () => {
  it('renders the basic <Header /> with a background', () => {
    const { container, getByText, getByTestId } = render(
      <Header>
        <Header.Frame>
          <Header.Logo src="/logo.svg" alt="Netflix" />
          <Header.TextLink active="true">Je suis un lien!</Header.TextLink>
        </Header.Frame>
      </Header>
    );

    expect(getByText('Je suis un lien!')).toBeTruthy();
    expect(getByTestId('header-bg')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the basic <Header /> without a background', () => {
    const { container, getByText, queryByTestId } = render(
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo src="/logo.svg" alt="Netflix" />
          <Header.ButtonLink>S'identifier</Header.ButtonLink>
          <Header.TextLink active="false">Je suis un lien!</Header.TextLink>
        </Header.Frame>
      </Header>
    );

    expect(getByText('Je suis un lien!')).toBeTruthy();
    expect(queryByTestId('header-bg')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the full <Header /> with a background', () => {
    const { container, getByText, getByTestId } = render(
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo src="/images/logo.svg" alt="xilften" />
            <Header.TextLink active={false} onClick={() => {}}>
              Series
            </Header.TextLink>
            <Header.TextLink active onClick={() => {}}>
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search searchTerm="Joker" setSearchTerm={() => {}} />
            <Header.Profile>
              <Header.Picture src="/images/plv.png" />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src="/images/plv.png" />
                  <Header.TextLink>Pierre-Laurent Vincent</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => {}}>
                    Déconnection
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>
            Regardez Joker maintenant
          </Header.FeatureCallOut>
          <Header.Text>
            Dans les années 1980, à Gotham City, Arthur Fleck...
          </Header.Text>
          <Header.PlayButton>Lecture</Header.PlayButton>
        </Header.Feature>
      </Header>
    );

    expect(getByTestId('search-input')).toBeTruthy();
    expect(getByTestId('search-input').value).toBe('Joker');
    fireEvent.change(getByTestId('search-input'), {
      target: { value: ' Simpsons' },
    });
    fireEvent.click(getByTestId('search-click'));

    expect(getByText('Series')).toBeTruthy();
    expect(getByText('Films')).toBeTruthy();
    expect(getByText('Pierre-Laurent Vincent')).toBeTruthy();
    expect(getByText('Regardez Joker maintenant')).toBeTruthy();
    expect(
      getByText('Dans les années 1980, à Gotham City, Arthur Fleck...')
    ).toBeTruthy();
    expect(getByText('Lecture')).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
