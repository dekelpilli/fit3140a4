module.exports = (fs) => {
    suffixes = ['small', 'medium', 'large']

    filetypes = ['json', 'msgpack', 'protobuf']
    extensions = ['.json', '.txt', '.txt']

    fileContents = ""
    tempArray = []

    const totalStartTime = Date.now()
    let totalFileSize = 0
    // reads all data
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            // reading in file as string
            const fileName = filetypes[i] + '_' + suffixes[j] + extensions[i]
            let fileContents = fs.readFileSync('../data/' + fileName, 'utf8')

            // getting file size and adding to total
            const stats = fs.statSync('../data/' + fileName)
            const fileSize = stats['size']
            totalFileSize += fileSize

            // stating timer, then writing to file and reading into array
            const startTime = Date.now()
            fs.writeFileSync('test.txt', fileContents)
            fileContents = fs.readFileSync('test.txt', 'utf8')
            tempArray.push(fileContents)
            
            // printing status
            const runLength = ((Date.now() - startTime)/1000).toString()
            console.log('File "' + fileName + '" written and read in ' + runLength + ' seconds. ' + fileSize/1000000 + 'MB')
        } 
    }

    // printing total time and size
    const runLength = ((Date.now() - totalStartTime)/1000).toString()
    console.log("Files written and read in " + runLength + " seconds. " + totalFileSize/1000000 + "MB")
}