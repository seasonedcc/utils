const readline = require('readline-promise').default
const replace = require('replace-in-file')
const fs = require('fs')
const path = require('path')
const startCase = require('lodash/startCase')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const replaceInFile = async options => {
  try {
    const results = await replace(options)
    return console.log('Replacement results:', results)
  } catch (error) {
    return console.error('Error occurred:', error)
  }
}

const defaultProj = path
  .dirname(__dirname, '..')
  .split(path.sep)
  .pop()

const start = async () => {
  const project =
    (await rl.questionAsync(
      `What is your app name in kebab case (${defaultProj})? `,
    )) || defaultProj
  const defaultName = startCase(project).replace(/\ /g, '')
  const name =
    (await rl.questionAsync(
      `What is your main component name (${defaultName})? `,
    )) || defaultName
  fs.unlinkSync('./README.md')
  fs.renameSync('./src/LIBRARY_NAME.tsx', `./src/${name}.tsx`)
  fs.renameSync('./_README.md', './README.md')
  await replaceInFile({
    files: [
      './docs/docs/introduction.md',
      './docs/website/siteConfig.js',
      './docs/website/core/Footer.js',
      './example/public/manifest.json',
      './example/src/Example.js',
      './example/src/basePath.js',
      './example/package.json',
      './package.json',
      './README.md',
      './.git/config',
    ],
    from: /new-react-lib/g,
    to: project,
  })
  await replaceInFile({
    files: [
      './docs/docs/introduction.md',
      './docs/website/siteConfig.js',
      './docs/website/static/index.html',
      './example/public/index.html',
      './example/src/Example.js',
      './README.md',
      `./src/index.ts`,
      `./src/${name}.tsx`,
    ],
    from: /LIBRARY_NAME/g,
    to: name,
  })

  console.log(`All good! Happy dev 🤓`)
  rl.close()
}

start()
