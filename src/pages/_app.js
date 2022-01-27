import { ZealProvider, Layout } from '@zeal-ui/core';
import { getTitleFromPath, headerContents, sidebarContents, footerContents } from '../util';
import Head from 'next/head';
import { useRouter } from 'next/router';

const getComponentBasedOnPath = (Component, pageProps) => {
    const router = useRouter();
    const path = router.pathname;
    const isDocs = path.startsWith('/docs'),
        isHome = path === '/';
    const docTitle = getTitleFromPath(path.substring(6));
    if (isDocs) {
        return (
            <Layout title={docTitle} enableSidebar enableOverview>
                <Component {...pageProps} />
            </Layout>
        );
    } else if (isHome) {
        return <Component {...pageProps} />;
    }
    return (
        <Layout title="Page Not Found">
            <Component {...pageProps} />
        </Layout>
    );
};

export default function MyApp({ Component, pageProps }) {
    return (
        <ZealProvider
            headerContents={headerContents}
            sidebarContents={sidebarContents}
            footerContents={footerContents}
        >
            <Head>
                <title>Zeal UI</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta
                    name="description"
                    content="Zeal UI is a simple, minimalistic component library to build your awesome apps faster."
                />
                <link rel="shortcut icon" type="image/jpg" href="/zeal-ui-icon.ico" />
            </Head>
            {getComponentBasedOnPath(Component, pageProps)}
        </ZealProvider>
    );
}
