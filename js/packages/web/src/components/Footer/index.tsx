import React from 'react';
import { TwitterOutlined, CodeOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export const Footer = () => {
  return (
    <div style={{ marginBottom: '0px', marginLeft: '10px' }} className={'footer'}>
      <Button
        type={'link'}
        size={'large'}
        target={'_blank'}
        href={'https://github.com/necro-mancer'}
        icon={<CodeOutlined style={{ fontSize: '120%'}}/>}
      ><span style={{ fontSize: '80%'}}>GitHub</span></Button>
      <Button
        type={'link'}
        size={'large'}
        target={'_blank'}
        href={'https://twitter.com/gsissh_matrix'}
        icon={<TwitterOutlined style={{ fontSize: '120%'}}/>}
      ><span style={{ fontSize: '80%'}}>Twitter</span></Button>
    </div>
  );
};
