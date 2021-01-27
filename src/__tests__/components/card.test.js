import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Card, Player } from '../../components';

const category = 'series';

const slideRows = [
  {
    title: 'Documentaries',
    data: [
      {
        title: 'Tiger King',
        description:
          'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
        genre: 'documentaries',
        maturity: '18',
        slug: 'tiger-king',
      },
    ],
    title: 'Documentaries',
    data: [
      {
        title: 'Amanda Knox',
        description:
          'Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.',
        genre: 'documentaries',
        maturity: '12',
        slug: 'amanda-knox',
      },
    ],
  },
];

describe('<Card />', () => {
  it('renders the <Card /> component with the populated data', () => {
    const { container, getByText } = render(
      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item, i) => (
                <Card.Item key={i} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    );

    expect(getByText('Documentaries')).toBeTruthy();
    expect(getByText('Amanda Knox')).toBeTruthy();
    expect(
      getByText(
        'Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.'
      )
    ).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <Card /> and toggles the card feature', () => {
    const { container, queryByText, getByTestId, getByAltText } = render(
      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item, i) => (
                <Card.Item
                  key={i}
                  item={item}
                  data-testid={`${item.slug}-item-feature`}
                >
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    );

    expect(queryByText('12')).toBeFalsy();
    fireEvent.click(getByTestId('amanda-knox-item-feature'));
    expect(queryByText('12')).toBeTruthy();

    fireEvent.click(getByAltText('Close'));
    expect(queryByText('12')).toBeFalsy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
