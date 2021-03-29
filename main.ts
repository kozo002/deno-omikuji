const fortunes = [
  '大吉🎉',
  '吉🎯',
  '凶🌧',
  '大凶😈'
] as const

addEventListener('fetch', (event) => {
  const fortune = fortunes[Math.floor(Math.random() * fortunes.length)]
  const response = new Response(fortune, {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
})