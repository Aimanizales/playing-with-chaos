/**
It controls the initial response from the server
_document is only rendered on the server, so event handlers like onClick cannot be used in this file.
<Html>, <Head />, <Main /> and <NextScript /> are required for the page to be properly rendered.
 */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
