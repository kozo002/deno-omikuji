const fortunes = [
  '大吉🎉',
  '吉🎯',
  '凶🌧',
  '大凶😈'
] as const

addEventListener('fetch', (event) => {
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
      </body>
    </html>
  `
  const response = new Response(html, {
    headers: { "content-type": "text/html; charset=UTF-8" },
  });
  event.respondWith(response);
})