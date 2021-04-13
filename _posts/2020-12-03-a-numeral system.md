---
layout: single
title:  "[C] Numeral System"
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


Before introducing the representative data types used in the C language, one thing to look at is numeral system. Numeral system is a method of expressing numbers. In addition to the decimal numbers that people use in real life, there are binary, octal, and hexadecimal numbers. The binary number is a notation method only uses 0 and 1 to represent a number. If a decimal number is expressed in binary, it is expressed as 1111(2) for 15 and 100(2) for 8. The fact that all numbers can be expressed as 0 and 1 by using the binary number is in line with the operating principle of the computer, so we need to take a closer look.  
The CPU(Central Processing Unit) of a computer is an integrated circuit composed of many transistors, and a vacuum tube, a computer before the transistor, uses 0 and 1 to express the flow of electricity and no flow. That is, if you pay attention to the fact that the state(current on/off) of the computer's HW(Hardware) can be expressed as a binary signal, the reason why the machine language consists of only 0 and 1 can be guessed.  
In order to express arbitrary data as 0 and 1, the corresponding capacity is required. The unit of the capacity is called `bit`, and it is easy to think of 0 and 1 as the number of expressible digits. One unit is called a `bit`, 4 units are called 1 `nibble`, and 8 units are called 1 `byte` or 1 `B` (8 bit = 1 byte = 1 B). For example, if 1 B = 1 bit = ㅁㅁㅁㅁㅁㅁㅁㅁ and 00000000 is set to mean 0, 11111111 means 255. That is, 2^8 states can be expressed.



When debugging through an IDE(Integrated Development Environment) such as Visual stdio, data addresses sometimes appear in hexadecimal. This is because the expression length is too long to express everything in binary numbers on a computer, so it is expressed shortly in hexadecimal by combining 4 bits each. In the case of a hexadecimal number, the numbers from 0 to 15 are expressed as a single number. 0 to 9 are used as they are, and 10 to 15 are replaced with letters from A to F. Computers use hexadecimal numbers for binary representation, not for decimal numbers, so 4 binary digits are mapped to 1 hexadecimal representation. For example, ㅁㅁㅁㅁㅁㅁㅁㅁ 8 digits of binary numbers are corresponded to a single hexadecimal number, each with 4 digits in which the range of expressions can be expressed is 16 (0~15) (11111111(2) -> FF(16) ). When hexadecimal is used, the notation '0x' is used in front of the number to distinguish it from the decimal and binary representations.  
In the case of using octal numbers, 3 bits are grouped and the state corresponding to 0 to 7 corresponds to 1 digit (100(2) -> 10(8) ). The octal representation is sometimes expressed as 010 with an indicator of 0.  
The `printf` function makes it possible to express these various notations using format specifiers. Format specifiers corresponding to each notation are shown in the table below.




| Syntax |  Meaning   | 
|:---:   |:---:   | 
| %d    |	Decimal Number | 
| %x	|   Hexadecimal Number| 
| %#x   |	Hexadecimal Number + Numeral Index | 
| %o	|   Octal Number |  
| %#o	|   Octal Number + Numeral Index |  



```c
    #include <stdio.h>

    int main(void){
        int i=427;

        printf("%d\n", i);
        printf("%x\n", i);
        printf("%X\n", i);
        printf("%#x\n", i);
        printf("%#X\n", i);
        printf("%o\n", i); 
        printf("%#o\n", i);

        return 0;
    }   
```


```
427
1ab
1AB
0x1ab
0X1AB
653
0653

```


