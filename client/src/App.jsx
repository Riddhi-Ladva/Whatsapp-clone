import './App.css';

import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './components/context/Accountprovider';

function App() {

  const clientid='';

  return (
    <GoogleOAuthProvider clientId={clientid}>
<AccountProvider>
  <Messenger/>

</AccountProvider>

    </GoogleOAuthProvider>

  );
}

export default App;
