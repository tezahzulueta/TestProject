##!/bin/bash
#sample bash script to compile and run in Genymotion
 
titanium build --platform android --sdk 3.3.0 --build-only --shadow;
 
#adb -s 192.168.56.101:5555 install -r "build/appify/build/android/bin/TestProject.apk";
 
if [ $# -eq 0 ]
then
exit 1
else
    if[ $1 -eq "debug" ]
        adb logcat TiAPI:D debug:S;
    fi
    if[ $1 -eq "info" ]
        adb logcat TiAPI:I *:S;
    fi
    if[ $1 -eq "all"]
	adb logcat TiAPI;
    fi
fi
