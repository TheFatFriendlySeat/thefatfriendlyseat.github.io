import getConfig from "next/config";
import Document, { Html, Head, Main, NextScript } from "next/document";
import * as React from "react";


export default class MyDocument extends Document {
    public render() {
        return (
            <Html>
                <Head>
                    <title>The Fat Friendly Seat</title>
                    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>🪑</text></svg>"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
