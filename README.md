# assignment4-team2-1

### Getting started
#### Installation
Run the following:
- `sudo pip3 install genson`
- `sudo pip3 install msgpack-python`
- `sudo pip3 install google`
- `sudo pip3 install protobuf`
  
If you make any changes to objects.proto, in addition to the appropriate changes to the python script, you'll need to install protobuf...
<!-- - `git clone https://github.com/google/protobuf`
- `cd protobuf/python`
- `sudo python3 setup.py install` (this may take a while) 
- `cd ../../` -->

...then run this command:  
- `protoc --proto_path=. --python_out=. objects.proto`


#### Generating random data
First, make a folder for the data:  
- `mkdir data`  

Then, Generate MessagePack files:  
- `python3 generateSyntheticData.py -s -f data/msgpack_small.txt -msg` 
- `python3 generateSyntheticData.py -m -f data/msgpack_medium.txt -msg`  
- `python3 generateSyntheticData.py -l -f data/msgpack_large.txt -msg`  

Generate JSON files:  
- `python3 generateSyntheticData.py -s -f data/json_small.json -json` 
- `python3 generateSyntheticData.py -m -f data/json_medium.json -json`
- `python3 generateSyntheticData.py -l -f data/json_large.json -json`


Generate ProtocolBuffer files:  
- `python3 generateSyntheticData.py -s -f data/protbuf_small.txt -prot` 
- `python3 generateSyntheticData.py -m -f data/protbuf_medium.txt -prot`
- `python3 generateSyntheticData.py -l -f data/protbuf_large.txt -prot`
