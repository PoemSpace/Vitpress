// .vitepress/sidebar.mts
import { withSidebar } from 'vitepress-sidebar'

export const sidebarConfig = [
        {
                documentRootPath: 'docs',
                scanStartPath: '唐诗三百首',
                basePath: '/唐诗三百首/',
                resolvePath: '/唐诗三百首/',
                useTitleFromFileHeading: true,
                collapsed: false,
                collapseDepth: 1
        },
        // {
        //         documentRootPath: 'docs',
        //         scanStartPath: 'config',
        //         resolvePath: '/config/',
        //         useTitleFromFrontmatter: true,
        //         collapsed: false,
        //         collapseDepth: 1
        // }
]

export function createSidebar(baseConfig: any) {
        return withSidebar(baseConfig, sidebarConfig)
}
