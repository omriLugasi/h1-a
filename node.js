const fs = require('fs/promises')


const init = async () => {
    await fs.writeFile('test.txt', new Date().toISOString(), 'utf8')
}

init()