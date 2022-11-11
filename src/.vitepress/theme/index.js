import './tailwind.css'

import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'

export default { Layout, 'NotFound': DefaultTheme.NotFound, 'enhanceApp': DefaultTheme.enhanceApp }