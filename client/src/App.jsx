import './App.css';

import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './components/context/Accountprovider';

function App() {

  const clientid='1025803383046-1hj60fomnkrjcu3m76qsiklqq93form5.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientid}>
<AccountProvider>
  <Messenger/>

</AccountProvider>

    </GoogleOAuthProvider>

  );
}

export default App;
