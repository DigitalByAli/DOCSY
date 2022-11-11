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
		theme: 'dark-plus',
	},
	vite: {
		server: {
			fs: {
				strict: false
			},
		},
	},
	themeConfig: {
		socialLinks: [
			{ icon: 'discord', link: 'https://discord.com/invite/V6dtmWy9HP' },
			{ icon: 'github', link: 'https://github.com/DigitalByAli/OKSY' },
		],
		sidebar: [
			{
				text: 'Your first app',
				items: [
					{ text: '0 - Install & Run', link: '/introduction/install-and-run' },
					{ text: '1 - Models', link: '/introduction/models' },
					{ text: '2 - Seeding', link: '/introduction/seeding' },
					{ text: '3 - Index And Sidebar', link: '/introduction/index-and-sidebar' },
					{ text: '4 - Edit Form', link: '/introduction/edit-form' },
					{ text: '5 - Final Product', link: '/introduction/final-product' },
				],
			},
			{
				text: 'Essentials',
				items: [
					{ text: 'Core', link: '/essentials/core' },
					{ text: 'Models', link: '/essentials/models' },
					{ text: 'Database', link: '/essentials/database' },
					{ text: 'Pages', link: '/essentials/pages' },
					{ text: 'Terminal', link: '/essentials/terminal' },
					{ text: 'Favicon', link: '/essentials/favicon' },
					{ text: 'Config', link: '/essentials/config' },
				],
			},
			{
				text: 'UI Components',
				items: [
					{ text: 'Text', link: '/ui/text' },
					{ text: 'Container', link: '/ui/container' },
					{ text: 'DarkSidebar', link: '/ui/dark-sidebar' },
					{ text: 'Button', link: '/ui/button' },
					{ text: 'Input', link: '/ui/input' },
					{ text: 'Select', link: '/ui/select' },
					{ text: 'Toggle', link: '/ui/toggle' },
					{ text: 'FileUpload', link: '/ui/file-upload' },
					{ text: 'DataTable', link: '/ui/data-table' },
					{ text: 'Toast', link: '/ui/toast' },
					{ text: 'Confirm', link: '/ui/confirm' },
					{ text: 'Prompt', link: '/ui/prompt' },
				],
			},
		],
	},
});
