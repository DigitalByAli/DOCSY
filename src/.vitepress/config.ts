import { defineConfig } from 'vitepress';

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  lang: 'en-US',
  title: 'OKSY',
  description: 'The Typescript Framework',
  ignoreDeadLinks: true, // TODO: disable later
  outDir: '../docs',
  base: '/DOCSY/',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Get Started', link: '/introduction/get-started' },
          { text: 'Project Structure', link: '/introduction/project-structure' },
          { text: 'Core setup', link: '/introduction/core-setup' },
        ],
      },
      {
        text: 'Basics',
        items: [
          { text: 'Model', link: '/basics/models' },
          { text: 'Pages', link: '/basics/pages' },
          { text: 'Database', link: '/basics/database' },
          { text: 'Config', link: '/basics/config' },
        ],
      },
      {
        text: 'UI Components',
        items: [
          { text: 'Text', link: '/ui/text' },
          { text: 'Container', link: '/ui/container' },
          { text: 'DarkSidebar', link: '/ui/dark-side-bar' },
          { text: 'Button', link: '/ui/button' },
          { text: 'TextInput', link: '/ui/text-input' },
          { text: 'Select', link: '/ui/select' },
          { text: 'Toggle', link: '/ui/toggle' },
          { text: 'FileUpload', link: '/ui/file-upload' },
          { text: 'DataTable', link: '/ui/data-table' },
        ],
      },
      {
        text: 'Advanced',
        items: [
          { text: 'Terminal', link: '/advanced/terminal' },
          { text: 'Deployment', link: '/advanced/deployment' },
          { text: 'Favicon', link: '/advanced/favicon' },
        ],
      },
    ],
  },
});
