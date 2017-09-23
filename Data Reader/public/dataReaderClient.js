$(document).ready(function () {
    const iosocket = io.connect()
    let tempArray = []
    let startTime = 0

    // when server emits "message"
    iosocket.on("file", function (data) {
        if (data === "END") {
            const runLength = ((Date.now() - startTime)/1000).toString()
            console.log("File received in " + runLength + " seconds. " + sizeof(tempArray)/1000000 + "MB")
            tempArray = []
        } else if (data === "START") {
            console.log("start")
            startTime = Date.now()
        } else {
            // read each object into an array
            tempArray.push(data)
        }
    })
})
