/* configs/nav.ts */
import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
    { text: '首页', link: '/' },
    {
        text: 'HTML',
        link: '/HTML/'
    },
    {
        text: '页面',
        items: [
            { 
                text: '团队介绍', 
                link: '/pages/team.md' 
            },
            { 
                text: '时间轴', 
                link: '/pages/time.md' 
            },
            {
                text: '归档',
                link: '/pages/Archives.md'
            },
            {
                text: '标签',
                link: '/pages/tags.md'
            },
            {
                text: '关于',
                link: '/pages/me.md'
            }
        ],
    },
    {
        text: '唐诗三百首',
        link:'/唐诗三百首/index.md',
    }
]