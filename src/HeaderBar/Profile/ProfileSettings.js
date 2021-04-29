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

const ProfileSettings = () => {
  <OptionContainerV>
    <OptionContainerH style={{ marginTop: '6px' }}>
      <Form.Check type="checkbox" label="" />
      <OptionText>Adres email</OptionText>
    </OptionContainerH>
    <Input type="email" placeholder="Nowy adres email" />

    <OptionContainerH style={{ marginTop: '6px' }}>
      <Form.Check type="checkbox" label="" />
      <OptionText>Hasło</OptionText>
    </OptionContainerH>
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
      Zaznacz tylko te informacje które mają zostać zaktualizowane, a następnie
      naciśnij &quot;Zaktualizuj&quot;
    </TipText>

    <NormalButton>Zaktualizuj</NormalButton>
  </OptionContainerV>;
};

// class ProfileSettings extends React.PureComponent {
//   render() {
//     return (
//       <OptionContainerV>
//         <OptionContainerH style={{ marginTop: '6px' }}>
//           <Form.Check type="checkbox" label="" />
//           <OptionText>Adres email</OptionText>
//         </OptionContainerH>
//         <Input type="email" placeholder="Nowy adres email" />

//         <OptionContainerH style={{ marginTop: '6px' }}>
//           <Form.Check type="checkbox" label="" />
//           <OptionText>Hasło</OptionText>
//         </OptionContainerH>
//         <OptionContainerH>
//           <Input
//             style={{ marginRight: '2px' }}
//             type="password"
//             placeholder="Nowe hasło"
//           />
//           <Input
//             style={{ marginLeft: '2px' }}
//             type="password"
//             placeholder="Powtórz nowe hasło"
//           />
//         </OptionContainerH>

//         <TipText>
//           Zaznacz tylko te informacje które mają zostać zaktualizowane, a
//           następnie naciśnij &quot;Zaktualizuj&quot;
//         </TipText>

//         <NormalButton>Zaktualizuj</NormalButton>
//       </OptionContainerV>
//     );
//   }
// }

export default ProfileSettings;
