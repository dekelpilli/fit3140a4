# assignment4-team2-1

### Getting started
#### Installation
Run the following:
- `sudo pip3 install genson`
- `sudo pip3 install msgpack`
  
If you make any changes to objects.proto, in addition to the appropriate changes to the python script, you'll need to install protobuf...
- `git clone https://github.com/google/protobuf`
- `cd protobuf/python`
- `sudo python3 setup.py install` (this may take a while) 
- `cd ../../`

...then run this command:  
- `protoc --proto_path=. --python_out=. objects.proto`


#### Generating random data
First, make a folder for the data:  
- `mkdir data`  

Then, Generate MessagePack files:  
- `python3 generateSyntheticData.py -s -f data/msgpack-small.txt -msg` 
- `python3 generateSyntheticData.py -m -f data/msgpack-medium.txt -msg`  
- `python3 generateSyntheticData.py -l -f data/msgpack-large.txt -msg`  

Generate JSON files:  
- `python3 generateSyntheticData.py -s -f data/json-small.json -json` 
- `python3 generateSyntheticData.py -m -f data/json-medium.json -json`
- `python3 generateSyntheticData.py -l -f data/json-large.json -json`


Generate ProtocolBuffer files:  
- `python3 generateSyntheticData.py -s -f data/protbuf-small.txt -prot` 
- `python3 generateSyntheticData.py -m -f data/protbuf-medium.txt -prot`
- `python3 generateSyntheticData.py -l -f data/protbuf-large.txt -prot`
