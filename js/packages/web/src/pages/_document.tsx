import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

export default class MetaplexDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="sshmatrix"
            content="sshmatrix"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/logo.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/logo.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/logo.png"
          />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="sshmatrix.art" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
