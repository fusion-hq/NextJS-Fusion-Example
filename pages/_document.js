import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import dynamic from 'next/dynamic'

const FusionWithNoSSR = dynamic(
  () => import('../components/Fusion'),
  { ssr: false }
)

export default class extends Document {
  
  render() {
    return (
      <html>
        <Head>
          {/* Simple Analytics script */}
          <script src="/fusion.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <button>Hello</button>
          <form name="TEST-FORM" type="submit">
            <input
              placeholder="gmail"
              id="name"
              class="some-classname-name-input"
            />
            <input
              placeholder="password"
              id="email"
              class="some-classname-email-input"
            />
            <button onclick="submit">Submit</button>
          </form>
        </body>
      </html>
    );
  }
}
