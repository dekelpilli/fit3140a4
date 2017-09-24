module.exports = (io, fs) => {
    suffixes = ['small', 'medium', 'large']

    filetypes = ['json', 'msgpack', 'protobuf']
    extensions = ['.json', '.txt', '.txt']

    io.on('connection', (socket) => {
        socket.on("start", (msg) => {
            // JSON files
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 2; j++) {
                    const startTime = Date.now()
                    // reading in file as string
                    console.log('processing file: ' + filetypes[i] + '_' + suffixes[j] + '.json')
                    // let file = fs.readFileSync('../' + filetypes[i] + '_' + suffixes[j] + '.json', 'utf8')
                } 
            }
        }) 
    })
}