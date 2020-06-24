import Head from "next/head";

export default (props) => (
  <Head>
    <meta charSet="utf-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="description" content="This is the site description..." />
    <meta property="og:title" content="Site Title" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="http://google.com/" />
    <meta
      property="og:image"
      content="https://storage.googleapis.com/firenoon-site/share-img.png"
    />
    <meta property="og:description" content="This is the site description..." />
    <meta property="og:site_name" content="NOM DU SITE" />
    <title>{props.title}</title>
    <link rel="icon" type="image/png" href="/img/firenoon_favicon.png" />
  </Head>
);
