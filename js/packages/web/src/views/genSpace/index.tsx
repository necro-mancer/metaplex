import React, { Component, useEffect, useState, useCallback } from 'react';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import {
  Divider,
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
import { HighlightOutlined, SmileOutlined, SmileFilled } from '@ant-design/icons';

const { Content } = Layout;
const { Paragraph } = Typography;

const Countdown = Statistic.Countdown;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 6 - 1000 * 60 * 34;

export const GenSpaceView = () => {
       return (
          <>
             <Row>
                <Col>
                    <div>
                      <img alt='banner' style={{ marginTop: 40, marginLeft: 0, width: 400 }} src='./banner_genspace-w.gif' />
                    </div>
                </Col>
                <Col className="call-to-action">
                  <h2 style={{ marginTop: 150, marginLeft: 96 }}>100 generative
                  </h2>
                  <h2 style={{ marginTop: 0, marginLeft: 90 }}>unique S<span style={{ marginTop: -8, fontSize: 60 }}>⦾</span><span >LYPS!</span>
                  </h2>
                  <h1 style={{ marginTop: 10, marginLeft: 90 }}>
                  0.001 SOL<span style={{ marginTop: -8, fontSize: 27 }}>⦾</span> per mint only!
                  </h1>
                  <h1 style={{ marginTop: 10, marginLeft: 35 }}>
                  Drop on October 20, 2021 20:00 UTC
                  </h1>
                  <span style={{ marginTop: 10, marginLeft: 195, fontSize: 50 }}>
                    <Countdown style={{ marginTop: 0, opacity: 1.0, fontSize: 50 }} value={deadline} />
                  </span>
                </Col>
             </Row>
          </>
       );
};

