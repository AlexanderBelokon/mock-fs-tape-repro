const test = require('tape')
const fs = require('fs')
const mockFs = require('mock-fs')

test('break-node', t => {
    mockFs({ 'file.txt': 'test' })
    const stream = fs.createReadStream('./file.txt')
    stream.on('data', d => d.toString())
    stream.on('end', () => {
        mockFs.restore()
        t.end()
    })
})
