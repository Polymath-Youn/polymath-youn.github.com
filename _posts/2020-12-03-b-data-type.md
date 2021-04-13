---
layout: single
title:  "[C] Data Type 자료형"
comments: true
categories:
    - C/C++
toc: true
toc_label: "Contents Table"
toc_icon: "list"
tags: 
    - C
    - Programming
---

Data type means the type of variables. Variables refer to an object to transfer or store a value as the code proceeds. In particular, since C is a programming language that can access memory addresses, it is important to set an appropriate type according to the type of data for efficient coding. Data types mainly used in C language are as follows.



|Data Type | Volume(B) | Min Value | Max Value |
|:---:   |:---:   | :---:   | :---:   |
|char | 1 | 0 | 127 |
|signed char | 1 | -128 | 127 |
|unsigned char | 1 | 0 | 255 |
|signed short | 2 | -32768 | 32767 |
|unsigned short |2 | 0 | 65535 |
| (signed) int | 4 | -2147483648 | 2147483647 |
|unsigned int | 4 | 0 | 4294967295 |
|signed long | 4 | -2147483648 | 2147483647 |
|unsigned long | 4 |0 | 4294967295 |
|signed long long | 8 | -9223372036854775808 | 9223372036854775808 |
|unsigned long long | 8 | 0 | 18499744073709551615 |




|Data Type | Volume(B) | Min Value | Max Value |
|:---:   |:---:   | :---:   | :---:   |
| float | 4 | 3.4e-37 | 3.4e+38 |
| double | 8 | 1.7e-307 | 3.4e+308 |



The real data cannot be used in octal or hexadecimal format, and only decimal representation is allowed. Also, the real data is signed without the concept of unsigned. The basic type of integer is `signed int`, the basic type of character is `char`, and the basic type of real is `double`. I/O format specifier without a predetermined data type is recognized as a default data type. The corresponding format specifiers are as follows.



| Format Specifier | Data Type   |
|:---:   |:---:   | 
| %d | int, short | 
| %ld | long |
| %lld | long long int |
| %u | unsigned int |
| %f | float
| %lf | long double, double|
| %c | char|
| %s | string|
| %p | pointer| 



The last `%p` is a format specifier to the address of the variable. Also, the `%s` format specifier means a string.  
In the code below, `int i=427` means that the type of `i` is defined as `int`, and an integer 427 is assigned to this variable. Since the integer data type was used, the `i` variable allocates and uses the 4B memory area.



```c
    #include <stdio.h>

    int main(void){
        int i=427;
        double a=427.427427427427;

        printf("%d\n", i);
        printf("%f\n", a);
        printf("%lf\n", a);


        return 0;
    }   
```


```
427
427.427427
427.427427

```
