/* eslint-disable @next/next/no-page-custom-font */
export default async function Head() {
  return (
    <>
      <title>Luxf</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      {/* @ts-expect-error see https://beta.nextjs.org/docs/api-reference/file-conventions/head#supported-head-tags */}
      <link precedence="default" rel="icon" href="/favicon.jpeg" />
      <meta name="description" content="A personal blog by Luxf" />
      <title>Luxf</title>
      <meta
        name="twitter:card"
        content="https://avatars.githubusercontent.com/u/18180417"
      />
      <meta
        name="og:image"
        content="https://avatars.githubusercontent.com/u/18180417"
      />
    </>
  );
}
