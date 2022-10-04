import { Html, Head, Main, NextScript } from "next/document";

const BACKGROUNDS_COUNT = 3;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preload" />
        <meta name="robots" content="all" />
      </Head>
      <body
        style={{
          background: `url("/backgrounds/${
            Math.floor(Math.random() * BACKGROUNDS_COUNT) + 1
          }.jpg") no-repeat center center fixed`,
        }}
      >
        <div
          id="background-fade"
          className="w-screen backdrop-blur-lg"
          style={{
            background:
              "-webkit-radial-gradient(rgb(255,255,255,0.1) 5%, rgb(0,0,0,1))",
          }}
        >
          <section
            id="stars"
            className="text-center align-center justify-center"
          >
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
  );
}
