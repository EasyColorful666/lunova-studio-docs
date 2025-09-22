export default defineAppConfig({
    shadcnDocs: {
        // Site info
        site: {
            name: 'Lunova Docs',
            description: "Lunova Studio Official Documentation Site! 🥳🥳🥳",
            url: 'https://docs.lunova.studio/',

            // umami
            umami: {
                enable: true,
                src: 'https://umami.lunova.studio/script.js',
                dataWebsiteId: '623bb84b-8316-4bbd-a864-09ffaf1f50a0',
            },
        },

        // Theme settings
        theme: {
            customizable: true,
            color: 'blue',
            radius: 0.5,
        },

        // Banner
        banner: {
            enable: true,
            showClose: true,
            content: 'Blessing Studio 已经更名为 Lunova Studio，感谢各位一直以来的支持，请访问新站点 lunova.studio',
            target: '_blank',
            border: true,
        },

        // Header
        header: {
            // Title
            title: 'Lunova Docs',
            showTitle: true,

            // Theme
            darkModeToggle: true,

            // Language
            languageSwitcher: {
                enable: true,
                triggerType: 'icon',
                dropdownType: 'select',
            },

            // Logo
            logo: {
                light: 'https://file.lingke.ink/ls/icons/lunova_studio.png',
                dark: 'https://file.lingke.ink/ls/icons/lunova_studio.png',
            },

            // Nav bar
            nav: [
                // Docs
                {
                    title: 'Docs',
                    links: [
                        {
                            title: 'MinecraftLaunch',
                            to: '/minecraftlaunch',
                            description: 'The next-generation versatile and modular high-performance Minecraft startup core.',
                            icon: 'https://file.lingke.ink/ls/icons/minecraftlaunch.png',
                        },
                        {
                            title: 'Monet',
                            to: '/monet',
                            description: ".NET Material You Style Color Library Developed Based on Google's Dynamic Color Themes.",
                            icon: 'https://file.lingke.ink/ls/icons/monet.png',
                        },
                        {
                            title: 'WonderLab',
                            to: '/wonderlab',
                            description: "A new generation Minecraft launcher.",
                            icon: 'https://file.lingke.ink/ls/icons/wonderlab.png',
                        }
                    ],
                },

                // Blogs
                {
                    title: 'Blog',
                    to: '/blog',
                    target: '_self',
                    showLinkIcon: false,
                },
            ],

            // Links
            links: [
                // GitHub
                {
                    icon: 'lucide:github',
                    to: 'https://github.com/Lunova-Studio/lunova-studio.github.io',
                    target: '_blank',
                },
                
                // Official Website
                {
                    icon: 'https://file.lingke.ink/ls/icons/lunova_studio.png',
                    to: 'https://lunova.studio/',
                    target: '_blank',
                },
            ],
        },

        // Aside
        aside: {
            useLevel: true,
            collapse: false,
        },

        // Main
        main: {
            breadCrumb: true,
            showTitle: true,
            codeCopyToast: true,
            codeCopyToastText: 'Code copied to clipboard!',

            // Edit link
            editLink: {
                enable: true,
                pattern: 'https://github.com/Lunova-Studio/lunova-studio.github.io/tree/shadcn-docs/content/:path',
                text: 'Edit this page on GitHub',
                icon: 'lucide:square-pen',
                placement: ['docsFooter', 'toc'],
            },
        },

        // Footer
        footer: {
            credits: 'FOOTER_CREDIT',
            links: [
                // GitHub
                {
                    title: "Documentation GitHub repository",
                    icon: 'lucide:github',
                    to: 'https://github.com/Lunova-Studio/lunova-studio.github.io',
                    target: '_blank',
                },
                
                // Official Website
                {
                    title: "Lunova Studio Official Website",
                    icon: 'https://file.lingke.ink/ls/icons/lunova_studio.png',
                    to: 'https://lunova.studio/',
                    target: '_blank',
                },
            ],
        },

        // Toc
        toc: {
            enable: true,
            title: 'On this page',

            links: [
                {
                    title: 'Create Issue',
                    icon: 'lucide:circle-dot',
                    to: 'https://github.com/Lunova-Studio/lunova-studio.github.io/issues',
                    target: '_blank',
                },
            ],

            iconLinks: [
                // GitHub
                {
                    icon: 'lucide:github',
                    to: 'https://github.com/Lunova-Studio/lunova-studio.github.io',
                    target: '_blank',
                },
                
                // Official Website
                {
                    icon: 'https://file.lingke.ink/ls/icons/lunova_studio.png',
                    to: 'https://lunova.studio/',
                    target: '_blank',
                },
            ]
        },

        // Search
        search: {
            enable: true,
            inAside: false,
        }
    }
});
