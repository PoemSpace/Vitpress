import { createContentLoader } from 'vitepress'

interface Post {
    title: string
    url: string
    date: {
        time: number
        string: string
    }
    excerpt: string | undefined
    tags: string[]
    icon: string
}

declare const data: Post[]
export { data }

export default createContentLoader('**/*.md', {
    excerpt: true,
    transform(raw): Post[] {
        return raw
            .filter(({ frontmatter }) => frontmatter.date && !frontmatter.hidden)
            .map(({ url, frontmatter, excerpt }) => ({
                title: frontmatter.title,
                url,
                excerpt,
                date: formatDate(frontmatter.date),
                tags: frontmatter.tags || [],
                icon: frontmatter.icon || '📄'
            }))
            .sort((a, b) => b.date.time - a.date.time)
    }
})

function formatDate(raw: string | number): Post['date'] {
    const date = new Date(raw)
    return {
        time: +date,
        string: date.toISOString().split('T')[0]
    }
}