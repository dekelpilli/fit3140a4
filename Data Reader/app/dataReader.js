module.exports = (io, fs) => {
    suffixes = ['small', 'medium', 'large']
    filetypes = ['json', 'msgpack', 'protobuf']
    extensions = ['.json', '.txt', '.txt']

    io.on('connection', (socket) => {
        socket.on("start", (msg) => {

            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 2; j++) {
                    // stops socketio from hitting limit, by restricting files read
                    if (i == 2 && j == 1) {
                        break
                     }

                    // reading in file as string
                    const fileName = filetypes[i] + '_' + suffixes[j] + extensions[i]
                    console.log('Processing file: ' + fileName)
                    const fileContents = fs.readFileSync('../data/' + fileName, 'utf8')
                    
                    // sending to client
                    io.sockets.emit('start')
                    io.sockets.emit('file', fileContents)
                } 
            }
        }) 
    })
}