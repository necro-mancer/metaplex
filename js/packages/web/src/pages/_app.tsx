import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/index.less';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>N⦾n-fungible Matrix</title>
      </Head>
      
      <div id="root">
        <span style={{color: "orange"}}>(base) root@local:~$ </span>
        <span style={{color:  "white"}}>gsissh matrix</span><br />
        <span style={{color:  "white"}}>&gt; this space is powered by Metaplex and always under development; stay cautious. Connecting to </span><span>S</span><span style={{ fontSize: 18, fontWeight: 'bold' }}>&#10686;</span><span>LANA ...</span><br />
        <span style={{color: "lightgreen"}}>(host) guest@matrix:~$ </span>
        <span className="typewriter-end"></span>
        
        <Component {...pageProps} />
      </div>
    </>
  );
}
