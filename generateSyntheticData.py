import genson
import sys
import random
import string
import msgpack-python
from io import BytesIO
import objects_pb2

SMALL = 10000
MEDIUM = 500000
LARGE = 1000000

def writeToFile(filename, objs):
    f = open(filename, 'w')
    f.write(str(objs))
    f.close()

##
##JSON
##
def generateJsonObjects(num):
    s = genson.Schema()

    for o in range(num):
        s.add_schema({str(o): generateJsonObject()})

    return s.to_json()

def generateJsonObject():
    s = genson.Schema()
    s.add_schema(generateObject())
    return s.to_json()



##
##MessagePack
##
def generateMsgpackObjects(num):
    buf = BytesIO()

    for o in range(num):
        buf.write(generateMsgpackObject())

    buf.seek(0)

    return buf.getvalue()

def generateMsgpackObject():
    o = generateObject()
    return msgpack.packb(o)


##
##Protocl Buffer
##
def generateProtObjects(num):
    protSet =  objects_pb2.Set()
    for o in range(num):
        obj = generateObject()
        
        protSet.objects.add().location = obj['location']
        protSet.objects.add().motionStart = int(obj['motionStart'])
        protSet.objects.add().motionEnd = int(obj['motionEnd'])
        protSet.objects.add().payload = obj['payload']
        protSet.objects.add().desc = obj['description']

    return protSet.SerializeToString()

##
##General object generation
##
def generateObject():
    location = generateRandomString(25)
    motionStart = generateRandomNum(10)
    motionEnd = generateRandomNum(10)
    if int(motionStart) > int(motionEnd):
        motionStart, motionEnd = motionEnd, motionStart
    payload = generateRandomString(20)
    desc = generateRandomString(30)

    obj = {
            "location": location, 
            "motionStart": str(motionStart),
            "motionEnd": str(motionEnd),
            "payload": payload,
            "description": desc
        }
    return obj

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
    if len(sys.argv)<5:
        print("Please specify the amount of objects (small/medium/large) you wish to be created, the type of output (msgpack/json/protocolbuffer) and the file name")
        print("python3 generateSyntheticData.py [-s | -m | -l] -f [fileName] [-msg | -json | -prot]")
        exit(0)
    else:
        if "-s" in sys.argv:
            amount = SMALL
        elif "-m" in sys.argv:
            amount = MEDIUM
        elif "-l" in sys.argv:
            amount = LARGE
        elif "-t" in sys.argv:
            amount = 1 #for testing

        
        filename = sys.argv[sys.argv.index("-f")+1]

    if "-msg" in sys.argv:
        objs = generateMsgpackObjects(amount)
    elif "-json" in sys.argv:
        objs = generateJsonObjects(amount)
    elif "-prot" in sys.argv:
        objs = generateProtObjects(amount)

    writeToFile(filename, objs)
