import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const docs = await serverQueryContent(event)
    .where({
      _path: { $regex: '^/articles/' }, // Inclui apenas artigos na pasta 'articles'
      $and: [
        { _path: { $ne: '/articles' } }, // Exclui o index da pasta articles
        { _path: { $ne: '/articles/template' } }, // Exclui o template
      ],
    })
    .find()

  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${config.public.siteName}</title>
        <link>${config.public.siteUrl}</link>
        <description>${config.public.siteDescription}</description>
        ${docs
    .map((doc) => {
      // Verifica se o _path começa com '/', e remove se necessário
      const linkPath = doc._path?.startsWith('/') ? doc._path.slice(1) : doc._path
      return `<item>
              <title>${doc.title}</title>
              <link>${config.public.siteUrl}/${linkPath}</link>
              <pubDate>${new Date(doc.publishedAt).toUTCString()}</pubDate>
              <description>${doc.description}</description>
            </item>`
    })
    .join('')}
      </channel>
    </rss>`

  event.node.res.setHeader('Content-Type', 'application/xml')
  return feed
})
