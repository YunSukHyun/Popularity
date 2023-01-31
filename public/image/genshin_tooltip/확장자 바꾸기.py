import os
import glob

files = glob.glob("./*.jpg")
for name in files:
    if not os.path.isdir(name):
        src = os.path.splitext(name)
        os.rename(name, src[0]+'.png')
