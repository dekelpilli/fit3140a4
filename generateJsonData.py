import genson
import sys
import random
import string

SMALL = 10000
MEDIUM = 500000
LARGE = 1000000

def writeToFile(filename, schema):
    f = open(filename, 'w')
    f.write(schema)

def generateObjects(num):
    s = genson.Schema()

    for o in range(num):
        s.add_schema({str(o): generateJsonObject()})

    return s.to_json()

def generateJsonObject():
    s = genson.Schema()
    #set up random data
    location = generateRandomString(25)
    motionStart = generateRandomNum(10)
    motionEnd = generateRandomNum(10)
    if int(motionStart) > int(motionEnd):
        motionStart, motionEnd = motionEnd, motionStart
    payload = generateRandomString(20)
    desc = generateRandomString(30)
        
    s.add_schema({"location": location, 
                  "motionStart": str(motionStart),
                  "motionEnd": str(motionEnd),
                  "payload": payload,
                  "description": desc})

    return s.to_json()
    

def generateRandomString(length):
    randomString =""
    for c in range(length):
        randomString += random.choice(string.ascii_letters + string.digits)
    return randomString

def generateRandomNum(digits):
    randomString =""
    for c in range(digits):
        randomString += random.choice(string.digits)
    return randomString


if __name__ == "__main__":

    if len(sys.argv)<4:
        print("Please specify the amount of objects (small/medium/large) you wish to be created, and the file name")
        print("python3 generateJsonData.py [-s | -m | -l] -f [fileName]")
    else:
        print(sys.argv)
        if "-s" in sys.argv:
            amount = SMALL
        elif "-m" in sys.argv:
            amount = MEDIUM
        elif "-l" in sys.argv:
            amount = LARGE
        filename = sys.argv[sys.argv.index("-f")+1]

    schema = generateObjects(amount)
    writeToFile(filename, schema)
