import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <title>youwish.dev</title>
            </Head>
            <body>
                <div id="background-fade" className="w-screen bg-black/75">
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