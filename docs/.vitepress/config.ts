/**
 * Imports
 */

import { defineVersionedConfig } from '@viteplus/versions';

/**
 * Doc config
 */

export default defineVersionedConfig({
    title: 'xJet Core',
    base: '/xJet-core/',
    description: 'Shared kernel for xJet - event protocol, transport contracts',
    head: [
        [ 'link', { rel: 'icon', type: 'image/png', href: '/xJet-core/logo.png' }],
        [ 'meta', { name: 'theme-color', content: '#ff7e17' }],
        [ 'script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-LZ4KRNH629' }],
        [
            'script', {},
            'window.dataLayer = window.dataLayer || [];function gtag(){ dataLayer.push(arguments); }gtag(\'js\', new Date());gtag(\'config\', \'G-LZ4KRNH629\');'
        ]
    ],
    versionsConfig: {
        current: 'v1.0.x',
        versionSwitcher: false
    },
    themeConfig: {
        logo: '/logo.png',

        search: {
            provider: 'local'
        },

        nav: [
            { text: 'Home', link: '/' },
            { component: 'VersionSwitcher' }
        ],

        sidebar: [],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/remotex-labs/xJet-core' },
            { icon: 'npm', link: 'https://www.npmjs.com/package/@remotex-labs/xjet-core' }
        ],

        docFooter: {
            prev: false,
            next: false
        },

        footer: {
            message: 'Released under the Mozilla Public License 2.0',
            copyright: `Copyright © ${ new Date().getFullYear() } @remotex-labs/xjet-core Contributors`
        }
    }
});
