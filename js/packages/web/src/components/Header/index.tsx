import React from 'react';
import { TwitterOutlined, CodeOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export const Header = () => {
  return (
    <div style={{ marginBottom: '-10px', marginLeft: '10px' }} className={'footer'}>
      <Button
        type={'link'}
        target={'_blank'}
        href={'https://github.com/necro-mancer'}
        icon={<CodeOutlined />}
      ></Button>
      <Button
        type={'link'}
        target={'_blank'}
        href={'https://twitter.com/gsissh_matrix'}
        icon={<TwitterOutlined />}
      ></Button>
    </div>
  );
};
