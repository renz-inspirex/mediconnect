import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="scroll-smooth" lang="en">
      <Head >
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Raleway:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
