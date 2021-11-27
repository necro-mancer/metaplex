import React from 'react';
import { TwitterOutlined, CodeOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export const Footer = () => {
  return (
    <div style={{ marginBottom: '100px', marginLeft: '20px' }} className={'footer'}>
      <Button
        type={'link'}
        size={'large'}
        target={'_blank'}
        href={'https://github.com/necro-mancer'}
        icon={<CodeOutlined />}
      >GitHub</Button>
      <Button
        type={'link'}
        size={'large'}
        target={'_blank'}
        href={'https://twitter.com/gsissh_matrix'}
        icon={<TwitterOutlined />}
      >Twitter</Button>
    </div>
  );
};
