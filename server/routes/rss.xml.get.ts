import { defineEventHandler, setResponseHeader } from 'h3'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  const docs = await queryCollection(event, 'posts')
    .where('draft', 'IS NULL', false)
    .order('date', 'DESC')
    .select('title', 'path', 'date', 'description')
    .all()
  const feedString = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Nicolas Walcker</title>
        <link>${config.public.siteUrl}</link>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${docs.map((doc: any) => {
          const linkPath = doc.path.startsWith('/') ? doc.path.slice(1) : doc.path

          return `<item>
              <title><![CDATA[${doc.title}]]></title>
              <link>${config.public.siteUrl}/${linkPath}</link>
              <guid>${config.public.siteUrl}/${linkPath}</guid>
              <pubDate>${new Date(doc.date).toUTCString()}</pubDate>
              <description><![CDATA[${doc.description}]]></description>
            </item>`
        }).join('')}
      </channel>
    </rss>`

  setResponseHeader(event, 'Content-Type', 'application/xml')

  return feedString
})
