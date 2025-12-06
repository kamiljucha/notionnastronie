import { IconContext } from '@react-icons/all-files'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  override render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <link rel='shortcut icon' href='/favicon.ico' />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='favicon.png'
            />
            <link rel='manifest' href='/manifest.json' />

            {}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />

            {}
            <script src="https://cart.easy.tools/login.js?type=block&id=82493ac1-fa44-4b4e-9b5d-a258781c9f4f"></script>

            <script
              dangerouslySetInnerHTML={{
                __html: `
                  !window._EC_HASH_acee6b73ef20850ecdd58622a5c6b611 && (location.href = "https://cart.easy.tools/r/82493ac1-fa44-4b4e-9b5d-a258781c9f4f");
                `,
              }}
            />
          </Head>

          <body>
            {}
            <noscript>
                <meta http-equiv="refresh" content="0;url=https://cart.easy.tools/r/82493ac1-fa44-4b4e-9b5d-a258781c9f4f" />
            </noscript>

            {}
            <script
              dangerouslySetInnerHTML={{
                __html: `
/** Force Light Mode */
(function () {
  try {
    var classNameDark = 'dark-mode'
    var classNameLight = 'light-mode'
    document.body.classList.remove(classNameDark)
    document.body.classList.add(classNameLight)
  } catch (err) {}
})();
`
              }}
            />
            <Main />
            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
