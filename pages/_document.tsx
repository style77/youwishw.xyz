import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <title>youwish.dev</title>
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta name="robots" content="all" />
            </Head>
            <body>
                <div id="background-fade" className="w-screen backdrop-blur-lg" style={{ background: '-webkit-radial-gradient(rgb(255,255,255,0.1) 5%, rgb(0,0,0,1))' }}>
                    <section id="stars" className="text-center align-center justify-center">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </section>
                    <Main />
                    <NextScript />
                </div>
            </body>
        </Html>
    )
}