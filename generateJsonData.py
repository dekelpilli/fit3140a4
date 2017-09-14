import genson
import sys
import random
import string

def writeToFile(filename):
    pass #TODO

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
    string =""
    for c in range(length):
        string += random.choice(string.ascii_letters + string.digits)
    return string

def generateRandomNum(digits):
    string =""
    for c in range(length):
        string += random.choice(string.digits)
    return string


if __name__ == "__main__":

    if len(sys.argv)<5:
        print("Please specify the amount of objects you wish to be created, and the file name")
        print("python3 generateJsonData.py -n [amountOfObjects] -f [fileName]")
    else:
        amount = sys.argv[sys.argv.index("-n")+1] 
        filename = sys.argv[sys.argv.index("-n")+1]

    schema = generateObjects(amout)
    writeToFile(filename)
