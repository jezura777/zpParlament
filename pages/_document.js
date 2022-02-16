import Document, { Html, Head, Main, NextScript } from 'next/document';
import Link from 'next/link';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    {<meta name="viewport" content="width=device-width,minimum-scale=1, initial-scale=1" />}
                    {<title>ŽP Slavičín Vlára</title>}
                    {<link rel="icon" type="image/x-icon" href="/logo.ico"></link>}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;