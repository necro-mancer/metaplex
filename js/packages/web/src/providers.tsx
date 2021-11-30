import {
  AccountsProvider,
  ConnectionProvider,
  StoreProvider,
  WalletProvider,
} from '@oyster/common';
import { FC } from 'react';
import { ConfettiProvider } from './components/Confetti';
import { AppLayout } from './components/Layout';
import { MetaProvider } from './contexts/meta';
import { CoingeckoProvider } from './contexts/coingecko';
import { LoaderProvider } from './components/Loader';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export const Providers: FC = ({ children }) => {
  return (
    <ConnectionProvider>
      <WalletProvider>
          <AccountsProvider>
            <CoingeckoProvider>
              <StoreProvider
                ownerAddress={process.env.NEXT_PUBLIC_STORE_OWNER_ADDRESS}
                storeAddress={process.env.NEXT_PUBLIC_STORE_ADDRESS}
              >
                <MetaProvider>
                  <LoaderProvider>
                    <ConfettiProvider>
                      <Header></Header>
                      <AppLayout>{children}</AppLayout>
                      <Footer></Footer>
                    </ConfettiProvider>
                  </LoaderProvider>
                </MetaProvider>
              </StoreProvider>
            </CoingeckoProvider>
          </AccountsProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
