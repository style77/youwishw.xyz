import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='en'>
            <Head />
            <body>
                <div id="background-fade" className="h-screen w-full bg-black/75">
                    <section id="stars">
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