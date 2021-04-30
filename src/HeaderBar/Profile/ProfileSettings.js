import React from 'react';
import { Form } from 'react-bootstrap';

import {
  OptionContainerV,
  Input,
  OptionText,
  OptionContainerH,
  TipText,
  NormalButton,
} from './ProfileSettings.Components';

const ProfileSettings = () => (
  <OptionContainerV>
    <OptionText>Adres email</OptionText>
    <Input type="email" placeholder="Nowy adres email" />

    <OptionText style={{ marginTop: '8px' }}>Hasło</OptionText>
    <OptionContainerH>
      <Input
        style={{ marginRight: '2px' }}
        type="password"
        placeholder="Nowe hasło"
      />
      <Input
        style={{ marginLeft: '2px' }}
        type="password"
        placeholder="Powtórz nowe hasło"
      />
    </OptionContainerH>

    <TipText>
      Wpisz tylko te informacje które mają zostać zaktualizowane, a następnie
      naciśnij &quot;Zaktualizuj&quot;
    </TipText>

    <NormalButton>Zaktualizuj</NormalButton>
  </OptionContainerV>
);

export default ProfileSettings;
