/* configs/footer.ts */
import type { DefaultTheme } from 'vitepress'

export const footer: DefaultTheme.Footer = {
    message: 'MIT Licensed',
    copyright: `
        <div style="display: inline-flex; align-items: center; gap: 6px; flex-wrap: nowrap; margin-top: 10px;">
            <!-- 腾讯云徽章 -->
            <a href="https://cloud.tencent.com" target="_blank" style="text-decoration: none;">
                <img border="0" src="https://img.shields.io/badge/-腾讯云-0079FF?logo=tencentcloud&logoColor=FFF" 
                     alt="腾讯云" />
            </a>
            
            <!-- 1Panel徽章 -->
            <a href="https://1panel.cn" target="_blank" style="text-decoration: none;">
                <img border="0" src="https://img.shields.io/badge/1Panel-1E90FF?logo=1panel&logoColor=fff" 
                     alt="1Panel" />
            </a>
            
            <!-- VitePress徽章 -->
            <a href="https://vitepress.dev" target="_blank" style="text-decoration: none;">
                <img border="0" src="https://img.shields.io/badge/VitePress-646CFF?logo=vitepress&logoColor=fff" 
                     alt="VitePress" />
            </a>
            
            <!-- GitHub徽章 -->
            <a href="https://github.com/PoemSpace" target="_blank" style="text-decoration: none;">
                <img border="0" src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=fff" 
                     alt="GitHub" />
            </a>
            
            <!-- Gitee徽章 -->
            <a href="https://gitee.com/PoemSpace" target="_blank" style="text-decoration: none;">
                <img border="0" src="https://img.shields.io/badge/Gitee-C71D23?logo=gitee&logoColor=fff" 
                     alt="Gitee" />
            </a>

            <!-- ICP备案徽章 -->
            <a href="https://beian.miit.gov.cn" target="_blank" style="text-decoration: none;">
                <img border="0" src="https://img.shields.io/badge/陇ICP备-2025024686号-FF6A00?logo=oliceoColor=fff"
                     alt="ICP备案" />
            </a>
            
            <!-- 公安备案徽章 -->
            <a href="http://www.beian.gov.cn" target="_blank" style="text-decoration: none;">
                <img border="0" src="https://img.shields.io/badge/甘公网安备-62052102000154号-009639?olice&logoColor=fff"
                     alt="公安备案" />
            </a>
    
        </div>
    `,
}