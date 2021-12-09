import React from 'react';
import { TwitterOutlined, CodeOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export const Header = () => {
  return (
    <div style={{ marginTop: '2px', marginBottom: '-10px', marginLeft: '10px' }} className={'header'}>
      <span style={{ fontSize: '100%', marginLeft: '0px', marginTop: '0px', color: '#8f9c92' }}><sup>Powered by</sup> Metaplex <img src="img/metaplex.png" alt="" width="15" /> & Solana <img src="img/solana.png" alt="" width="15" /></span>
    </div>
  );
};
