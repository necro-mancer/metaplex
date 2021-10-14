import React, { Component, useEffect, useState, useCallback } from 'react';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import bs58 from 'bs58';
import {
  Alert,
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

export const WidgetBS58UINT8 = () => {
       const [inString, setString] = useState<string>('');
       
       return (
          <>
             <div style={{ marginTop: 40, marginBottom: -30 }}><h2>BASE58 to UINT8 Decoder</h2></div>
             <Row>
             <Col span={24} md={16}>
             <Form.Item
               style={{
                 width: '100%',
                 flexDirection: 'column',
                 paddingTop: 30,
                 marginBottom: 4,
               }}
               label={<h4>Enter the base58 string below:</h4>}
               labelAlign="left"
               colon={false}
             >
               <Input
                 placeholder="example: Yb755T36n48yDGjKMc19f6rhUGv678sWqs"
                 value={inString}
                 onChange={e => {
                    const bs58input = e.target.value;
                    const re = /^[a-zA-Z1-9]+$/;
                    if (bs58input === '' || re.test(bs58input)) {
                      setString(e.target.value);
                    } else {
                    message.warning('Invalid base58 string (must only contain alphabets and non-zero numbers)');
                    }
                    }
                  }
               />
               <Button
                 style={{ marginTop: 20 }}
                 type="primary"
                 onClick={() => {
                    const decoded = bs58.decode(`${inString}`);
                    const array = Uint8Array.from(decoded);
                    let convertBS58toUINT8 = array.toString();
                    Modal.confirm({
                      title: (
                        <div>
                          [{convertBS58toUINT8}]
                        </div>
                      ),
                      onOk() {navigator.clipboard.writeText('[' + `${convertBS58toUINT8}` + ']');
                      message.success('Copied to clipboard!');
                      },
                      okText: "Copy 256-bit AES key",
                      onCancel() {setString(''); message.success('Flushed!');},
                      cancelText: "Flush data",
                    });
                 }}
               >
               Decode
               </Button>
               <Button
                 style={{ marginLeft: 20, marginTop: 20 }}
                 type="default"
                 onClick={() => {
                    const decoded = bs58.decode('Yb755T36n48yDGjKMc19f6rhUGv678sWqs');
                    const array = Uint8Array.from(decoded);
                    let convertBS58toUINT8 = array.toString();
                    Modal.confirm({
                      title: (
                        <div>
                          [{convertBS58toUINT8}]
                        </div>
                      ),
                      onOk() {navigator.clipboard.writeText('[' + `${convertBS58toUINT8}` + ']');
                      message.success('Copied to clipboard!');
                      },
                      okText: "Copy 256-bit AES key",
                      onCancel() {message.success('Flushed!')},
                      cancelText: "Flush data",
                    });
                 }}
               >
               Try example
               </Button>
             </Form.Item>
             <p></p>
             <h5>• Copy-paste the decoded string to your local id.json private file to import your wallet through Solana CLI.<br></br>• You can also decode your 44-character long base58 ⦾SOL wallet address to AES 256-bit public key.
             </h5>
             </Col>
             </Row>
          </>
       );
};

