# React-Query + Axios
## Step 1: Install react-query and axios
```code
yarn add react-query axios
```
## Step 2: Wrap App component with QueryClientProvider & QueryClient
```js
import '@/styles/globals.css';
import {QueryClient, QueryClientProvider} from 'react-query';

export const queryClient = new QueryClient();

export default function App({Component, pageProps}) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
```
## Step 3: