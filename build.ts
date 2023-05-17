import { build, emptyDir } from 'https://deno.land/x/dnt@0.35.0/mod.ts'

await emptyDir('dist')

await build({
    entryPoints: ['src/mod.ts',
        {
            name: './data',
            path: 'src/data/mod.ts'
        },
        {
            name: './lounge',
            path: 'src/lounge/mod.ts'
        },
        {
            name: './lounge/types',
            path: 'src/lounge/types/mod.ts'
        },
        {
            name: './lounge/api',
            path: 'src/lounge/api.ts'
        },
        {
            name: './lounge/error',
            path: 'src/lounge/error.ts'
        },
        {
            name: './lounge/util',
            path: 'src/lounge/util.ts'
        },
        {
            name: './lounge/chart',
            path: 'src/lounge/chart/mod.ts'
        },
        {
            name: './util',
            path: 'src/util/mod.ts'
        },
        {
            name: './util/text',
            path: 'src/util/text.ts'
        },
        {
            name: './util/track',
            path: 'src/util/track.ts'
        }
    ],
    outDir: 'dist',
    shims: {
        deno: true,
        undici: true
    },
    package: {
        name: 'mk8dx',
        version: Deno.args[0],
        description: 'This library has mk8dx\'s track data and lounge api wrapper.',
        license: 'MIT',
        main: 'mod.js',
        repository: {
            type: 'git',
            url: 'git+https://github.com/sheat-git/mk8dx.js.git'
        },
        bugs: {
            url: "https://github.com/sheat-git/mk8dx.js/issues",
        }
    },
    async postBuild() {
        await Promise.all([
            Deno.copyFile('README.md', 'dist/README.md'),
            Deno.copyFile('LICENSE', 'dist/LICENSE'),
            Deno.copyFile('stats.png', 'dist/stats.png')
        ])
    }
})
