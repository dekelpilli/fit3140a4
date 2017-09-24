module.exports = (io, fs) => {
    suffixes = ['small', 'medium', 'large']

    io.on('connection', (socket) => {
        socket.on("start", (msg) => {
            // // JSON files
            for (let i = 0; i < 2; i++) {
                // reading in file as string
                console.log('processing file: ' + 'json_' + suffixes[i] + '.json')
                let file = fs.readFileSync('../json_' + suffixes[i] + '.json', 'utf8')

                io.sockets.emit('start')
                // sending each object, so that problems with max file size don't occur
                // for (const key in file) {
                //     io.sockets.emit('file', file[key]) // socket.io automatically stringifies
                // }
                io.sockets.emit('file', file)
                // io.sockets.emit('file', 'END')
            } 

            // msgpack files
            for (let i = 0; i < 2; i++) {
                // reading in file as string
                console.log('processing file: ' + 'msgpack_' + suffixes[i] + '.txt')
                let file = fs.readFileSync('../msgpack_' + suffixes[i] + '.txt', 'utf8')

                // starting timer and sending file
                io.sockets.emit('start')
                io.sockets.emit('file', file)
            } 

            // protocol buffer files
            for (let i = 0; i < 1; i++) {
                // reading in file as string
                console.log('processing file: ' + 'protobuf_' + suffixes[i] + '.txt')
                let file = fs.readFileSync('../protobuf_' + suffixes[i] + '.txt', 'utf8')

                // starting timer and sending file
                io.sockets.emit('start')
                io.sockets.emit('file', file)
            } 
        }) 
    })
}