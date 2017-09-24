$(document).ready(function () {
    const iosocket = io.connect()
    let tempArray = []
    let startTime = 0
    let fileSize = 0

    iosocket.emit('start')

    iosocket.on('start', function(data) {
        startTime = Date.now()
    })

    // when server emits "message"
    iosocket.on("file", function (data) {
        tempArray.push(data)
        fileSize = sizeof(data)
        const runLength = ((Date.now() - startTime)/1000).toString()
        console.log("File received in " + runLength + " seconds. " + fileSize/1000000 + "MB")
        tempArray = []

        // // reports file transfer and clears array
        // if (data == "END") {
        //     const runLength = ((Date.now() - startTime)/1000).toString()
        //     console.log("File received in " + runLength + " seconds. " + fileSize/1000000 + "MB")
        //     tempArray = []
        // // starts the timer
        // } else if (data == "START") {
        //     startTime = Date.now()
        // // read each object into an array
        // } else {
        //     tempArray.push(data)
        //     fileSize += sizeof(data)
        // }
    })
})
