module.exports = (io, fs) => {
    suffixes = ['small', 'medium', 'large']

    io.on('connection', (socket) => {
        // JSON files
        for (let i = 0; i < 2; i++) {
            // reading in file as JSON object
            console.log('processing file: ' + 'json_' + suffixes[i] + '.json')
            let file = JSON.parse(fs.readFileSync('../json_' + suffixes[i] + '.json', 'utf8'))

            io.sockets.emit('file', 'START')
            // sending each object, so that problems with max file size don't occur
            for (const key in file) {
                io.sockets.emit('file', file[key]) // socket.io automatically stringifies
            }
            io.sockets.emit('file', 'END')
        }  
    })
}