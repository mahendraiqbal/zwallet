import Head from "next/head";

function LayoutTitle({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {children}
    </>
  );
}

export default LayoutTitle;
