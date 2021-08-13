import { ZealProvider } from "@zeal-ui/core";
import Head from 'next/head';
import { headerContents, sidebarContents, footerContents } from "../utils/NavigationItems";

const MyApp = ({ Component, pageProps }) => {
    return (
        <ZealProvider headerContents={headerContents} sidebarContents={sidebarContents} footerContents={footerContents}>
            <Head>
                <title>Zeal UI</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta
                    name="description"
                    content="Zeal UI is a simple, minimalistic component library to build your awesome apps faster."
                />
                <link
                    rel="shortcut icon"
                    type="image/jpg"
                    href="/zeal-ui-icon.ico"
                />
            </Head>
            <Component {...pageProps} />
        </ZealProvider>
    );
};

export default MyApp;