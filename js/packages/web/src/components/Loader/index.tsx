import { useMeta } from '../../contexts';
import React, { FC } from 'react';

export const LoaderProvider: FC = ({ children }) => {
  const { isLoading } = useMeta();

  return (
    <>
      <div className={`loader-container ${isLoading ? 'active' : ''}`}>
        <div className="loader-block">
          <div className="loader-title">powered by metaplex <img src="img/metaplex.png" alt="" width="25" />, built on solana <img src="img/solana.png" alt="" width="25" /> & arweave <img src="img/arweave.png" alt="" width="25" /></div>
          <br></br>
          <Spinner /><br></br>
          <div className="loader-title">patience is the highest virtue when loading web3. syncing with web3 ecosystem ...</div>
        </div>
      </div>
      {children}
    </>
  );
};

export const Spinner = () => {
  return (
    <div className="spinner">
      <span className="line line-1" />
      <span className="line line-2" />
      <span className="line line-3" />
      <span className="line line-4" />
      <span className="line line-6" />
      <span className="line line-7" />
      <span className="line line-8" />
      <span className="line line-9" />
      <span className="line line-1" />
      <span className="line line-2" />
      <span className="line line-3" />
      <span className="line line-4" />
      <span className="line line-6" />
    </div>
  );
};
