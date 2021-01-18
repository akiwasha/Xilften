import React, { useState, useEffect, useContext } from 'react';
import { SelectProfileContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';
import { Header, Loading } from '../components';

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      <Header src="joker1">
        <Header.Feature>
          <Header.FeatureCallOut>
            Regardez Joker maintenant
          </Header.FeatureCallOut>
          <Header.Text>
            Dans les années 1980, à Gotham City, Arthur Fleck, un comédien de
            stand-up raté est agressé alors qu'il ère dans les rues de la ville
            déguisé en clown. Méprisé de tous et bafoué, il bascule peu à peu
            dans la folie pour devenir le Joker, un dangereux tueur psychotique.
          </Header.Text>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
