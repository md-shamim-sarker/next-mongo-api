import Header from '@/components/common/header';
import UserContext from '@/contexts/UserContext';
import '@/styles/globals.css';

export default function App({Component, pageProps}) {
  return (
    <UserContext>
      <Header></Header>
      <Component {...pageProps} />
    </UserContext>
  );
}