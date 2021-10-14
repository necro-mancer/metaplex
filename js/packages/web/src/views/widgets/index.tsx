import React, { Component, useEffect, useState, useCallback } from 'react';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import bs58 from 'bs58';
import {
  Modal,
  message,
  Steps,
  Row,
  Button,
  Upload,
  Col,
  Input,
  Statistic,
  Slider,
  Progress,
  Spin,
  InputNumber,
  Form,
  Typography,
  Space,
  Layout,
} from 'antd';
import { WidgetBS58UINT8 } from '../../views/widget_bs58uint8';
import { HighlightOutlined, SmileOutlined, SmileFilled } from '@ant-design/icons';

const { Content } = Layout;
const { Paragraph } = Typography;

export const Widgets = () => {
       return (
          <>
             <Row>
             <Col span={24} md={24}>
             <Form.Item
               style={{
                 width: '100%',
                 flexDirection: 'column',
                 paddingTop: 30,
                 marginBottom: 4,
               }}
               labelAlign="left"
               colon={false}
             >
               <Link to={'/widgets/bs58touint8'}>
                 <Button type="default"
                    style={{ marginTop: 20 }}
                    >
                    Take me to BASE58-UINT8 decoder
                 </Button>
               </Link>
             </Form.Item>
             </Col>
             </Row>
          </>
       );
};

