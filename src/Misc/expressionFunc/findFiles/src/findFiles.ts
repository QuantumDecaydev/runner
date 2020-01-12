import * as glob from '@actions/glob'

async function run(): Promise<void> {
  // arg0 -> node
  // arg1 -> fileFiles.js
  // arg2 -> glob options
  // arg3 -> glob patterns
  let followSymbolicLinks = false
  let matchPattern = process.argv[2]
  if (process.argv[2] === '--followSymbolicLinks') {
    console.log('Follow symbolic links')
    followSymbolicLinks = true
    matchPattern = process.argv[3]
  }

  matchPattern = Buffer.from(matchPattern, 'base64').toString('utf-8')

  console.log(`Match Pattern: ${matchPattern}`)

  const globber = await glob.create(matchPattern, {followSymbolicLinks})
  for await (const file of globber.globGenerator()) {
    console.error(`__OUTPUT__${Buffer.from(file).toString('base64')}__OUTPUT__`)
  }
}

run()
