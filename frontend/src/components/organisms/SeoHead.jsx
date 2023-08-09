import Head from "next/head";

const SeoHead = () => {
  return (
    <Head>
      <title>Tiago Dev</title>
      <meta name="description" content="Portifólio Tiago Bonora Braga" />
      <meta name="application-name" content="Tiago Dev" />
      <meta name="author" content="Tiago B. Braga" />
      <link rel="author" href="https://tiagodev.cia.tv" />
      <meta name="author" content="Tiago B. Braga" />
      <meta name="keywords" content="Next.js,React,JavaScript,Portifólio" />
      <meta name="referrer" content="unsafe-url" />
      <meta name="color-scheme" content="light" />
      <meta name="creator" content="Tiago B. Braga" />
      <meta name="publisher" content="Tiago B. Braga" />
      <meta
        name="format-detection"
        content="telephone=no, address=no, email=no"
      />
      <link rel="canonical" href="https://tiagodev.cia.tv" />
      <link
        rel="alternate"
        hreflang="pt-BR"
        href="https://tiagodev.cia.tv/pt-BR"
      />
      <link
        rel="alternate"
        hreflang="en-US"
        href="https://tiagodev.cia.tv/en-US"
      />
      <meta property="og:title" content="Tiago Dev" />
      <meta property="og:description" content="Protifólio Tiago B. Braga" />
      <meta property="og:url" content="https://tiagodev.cia.tv/" />
      <meta property="og:site_name" content="Tiago Dev" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:image:url" content="/favicon.ico" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
      <meta property="og:image:url" content="/favicon.ico" />
      <meta property="og:image:width" content="1800" />
      <meta property="og:image:height" content="1600" />
      <meta property="og:image:alt" content="Logo Tiago Dev" />
      <meta property="og:type" content="website" />
      <meta name="robots" content="noindex, follow, nocache" />
      <meta
        name="googlebot"
        content="index, nofollow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
      />

      <link rel="shortcut icon" href="/images/02.png" />
      <link rel="icon" href="/02.png" />

      {/* <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
      <link
        rel="apple-touch-icon-precomposed"
        href="/apple-touch-icon-precomposed.png"
      /> */}
    </Head>
  );
};

export default SeoHead;
