import { WalletAdapter, WalletError } from '@solana/wallet-adapter-base';
import {
  useWallet,
  WalletProvider as BaseWalletProvider,
} from '@solana/wallet-adapter-react';
import {
  getLedgerWallet,
  getMathWallet,
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolongWallet,
  getTorusWallet,
  WalletName,
} from '@solana/wallet-adapter-wallets';
import { Button } from 'antd';
import React, {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { notify, notifyerror } from '../utils';
import { MetaplexModal } from '../components';

export interface WalletModalContextState {
  visible: boolean;
  setVisible: (open: boolean) => void;
}

export const WalletModalContext = createContext<WalletModalContextState>(
  {} as WalletModalContextState,
);

export function useWalletModal(): WalletModalContextState {
  return useContext(WalletModalContext);
}

export const WalletModal: FC = () => {
  const { wallets, wallet: selected, select } = useWallet();
  const { visible, setVisible } = useWalletModal();
  const [showWallets, setShowWallets] = useState(false);
  const close = useCallback(() => {
    setVisible(false);
    setShowWallets(false);
  }, [setVisible, setShowWallets]);

  return (
    <MetaplexModal visible={visible} onCancel={close}>
      <div
      >
        <span>
          <img
            src="/img/banner-w.gif"
            style={{ width: 72 }}
          />
        </span>
      </div>

      <h2>{selected ? 'Change provider' : 'Powered by Metaplex '}</h2>
      <p>
        {selected
          ? 'Switch wallet provider'
          : 'Sign in to interact with ecosystem'}
      </p>

      <br />
      {selected || showWallets ? (
        wallets.map(wallet => {
          return (
            <Button
              key={wallet.name}
              size="large"
              type={wallet === selected ? 'primary' : 'ghost'}
              onClick={() => {
                select(wallet.name);
                close();
              }}
              icon={
                <img
                  alt={`${wallet.name}`}
                  width={20}
                  height={20}
                  src={wallet.icon}
                  style={{ marginRight: 8 }}
                />
              }
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                marginBottom: 8,
              }}
            >
              {wallet.name}
            </Button>
          );
        })
      ) : (
        <>
          <Button
            className="metaplex-button"
            style={{
              width: '80%',
              fontWeight: 'unset',
            }}
            onClick={() => {
              select(WalletName.Phantom);
              close();
            }}
          >
            <span>
              <img
                src="https://www.phantom.app/img/logo.png"
                style={{ width: '1.2rem' }}
              />
              &nbsp;Sign in with Phantom
            </span>
            <span>&gt;</span>
          </Button>
          <p
            onClick={() => setShowWallets(true)}
            style={{ cursor: 'pointer', marginTop: 10 }}
          >
            Select a different Solana wallet
          </p>
        </>
      )}
    </MetaplexModal>
  );
};

export const WalletModalProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { publicKey } = useWallet();
  const [connected, setConnected] = useState(!!publicKey);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (publicKey) {
      const base58 = publicKey.toBase58();
      const keyToDisplay =
        base58.length > 20
          ? `${base58.substring(0, 7)}.....${base58.substring(
              base58.length - 7,
              base58.length,
            )}`
          : base58;

      notify({
        message: 'Wallet update',
        description: 'Connected to wallet ' + keyToDisplay,
      });
    }
  }, [publicKey]);

  useEffect(() => {
    if (!publicKey && connected) {
      notify({
        message: 'Wallet update',
        description: 'Disconnected from wallet',
      });
    }
    setConnected(!!publicKey);
  }, [publicKey, connected, setConnected]);

  return (
    <WalletModalContext.Provider
      value={{
        visible,
        setVisible,
      }}
    >
      {children}
      <WalletModal />
    </WalletModalContext.Provider>
  );
};

export const WalletProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getTorusWallet({
        options: {
          // @FIXME: this should be changed for Metaplex, and by each Metaplex storefront
          clientId:
            '',
        },
      }),
      getLedgerWallet(),
      getSolongWallet(),
      getMathWallet(),
      getSolletWallet(),
    ],
    [],
  );

  const onError = useCallback((error: WalletError) => {
    console.error(error);
    notifyerror({
      message: 'Wallet error',
      description: error.message,
    });
  }, []);

  return (
    <BaseWalletProvider wallets={wallets} onError={onError}>
      <WalletModalProvider>{children}</WalletModalProvider>
    </BaseWalletProvider>
  );
};

export type WalletSigner = Pick<
  WalletAdapter,
  'publicKey' | 'signTransaction' | 'signAllTransactions'
>;
