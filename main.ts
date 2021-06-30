import { denodeify } from "q"

const fortunes = [
  '大吉🎉',
  '吉🎯',
  '凶🌧',
  '大凶😈'
] as const

addEventListener('fetch', async (event: any) => {
  const url = new URL(event.request.url)
  if (url.pathname === '/client.js') {
    // @ts-ignore
    const file = await Deno.open('./client.js')
    const buf = new Uint8Array(1000)
    // @ts-ignore
    const text = new TextDecoder().decode(buf)
    // @ts-ignore
    Deno.close(file.rid)
    const response = new Response(text, {
      headers: { "content-type": "text/javascript; charset=UTF-8" },
    });
    event.respondWith(response);
  } else {
    const fortune = fortunes[Math.floor(Math.random() * fortunes.length)]
    const html = `
      <html>
        <head>
          <title>Omikuji</title>
          <meta charset="utf-8" />
        </head>
        <body>
          <h1>${fortune}</h1>
          <script src="/client.js"></script>
          ${event.request.url}
        </body>
      </html>
    `
    const response = new Response(html, {
      headers: { "content-type": "text/html; charset=UTF-8" },
    });
    event.respondWith(response);
  }
})