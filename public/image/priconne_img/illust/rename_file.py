# -*- coding: utf-8 -*-
import os

file_type = input("변경할 파일의 확장자 입력: ")
find_name = input("수정할 문자열 입력: ")
re_name = input("어떤 문자로 변경할지 입력: ")

def rename_file():
    for fn in os.listdir("."):
        if fn.endswith(file_type):
            new_fn = fn.replace(find_name, re_name)
            os.rename(fn, new_fn)

if __name__ == "__main__":
    rename_file()
