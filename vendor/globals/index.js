import { createRequire } from 'module'

const require = createRequire(import.meta.url)
export default require('./globals.json')
