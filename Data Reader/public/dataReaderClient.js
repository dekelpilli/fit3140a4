$(document).ready(function () {
    const iosocket = io.connect()
    let tempArray = []
    let startTime = 0
    let fileSize = 0

    iosocket.emit('start')

    // server emits this before processing
    iosocket.on('start', function(data) {
        startTime = Date.now()
    })

    // when server emits "file"
    iosocket.on("file", function (data) {
        // load file into array
        tempArray.push(data)
        // get file size and transmission time, and print them
        fileSize = sizeof(data)
        const runLength = ((Date.now() - startTime)/1000).toString()
        console.log("File received in " + runLength + " seconds. " + fileSize/1000000 + "MB")
        tempArray = []
    })
})
