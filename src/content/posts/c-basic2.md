---
author: Youn
pubDatetime: 2020-12-02T00:00:00Z
title: "[C] printf, format specifier 서식 지정자"
postSlug: "c-basic2"
featured: false
draft: false
tags:
  - c
  - programming
description: "The letter f in printf stands for formatted, meaning that you can format the output. The output format can be specified by inserting the for..."
---



The letter `f` in `printf` stands for formatted, meaning that you can format the output. The output format can be specified by inserting the format specifier content between " ". Representative format specifiers are shown in the table below.



| Syntax |  Meaning   | 
|:---:   |:---:   | 
| \n |	New line | 
| \r	| Carriage Return | 
| \t	| Tab | 
| \b |	Back | 
| \0 | Null |  
| \\ | Backslash return |
| \' | Single quotation return|
| \" | Double quotation return | 
| %% | Percentage return |  




```c
    #include <stdio.h>

    int main(void){
        printf("Hello World\n");
        printf("Hello \nWorld\n");
        printf("Hello \rWorld\n");
        printf("Hello \tWorld\n");
        printf("Hello \bWorld\n");
        printf("\\n Hello World\n");
        printf("\'Hello World\'\n");
        printf("\"Hello World\"\n");  
        printf("Hello %%World\n");

        return 0;
    }   
```


```
Hello World
Hello
World
World
Hello   World
HelloWorld
\n Hello World
'Hello World'
"Hello World"
Hello %World

```
