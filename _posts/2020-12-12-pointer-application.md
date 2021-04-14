---
layout: single
title:  "[C] Pointer application"
categories:
    - C/C++
toc: true
toc_label: "Contents Table"
toc_icon: "list"
tags: 
    - C
    - Programming
---


The pointer concept is simple, but the use case is confusing, so let's look at a few simple functions. The first is when you use an increment operator and a pointer together. Both `*a++` and `*++a` are processed according to the priority of the operator as described in [operation][op]. First, in the case of `*a++`, the dereferencing operation, which is a unary operator close to a, is executed, receives the value, prints it, and then increases the address of the pointer variable `a` by 1. In the case of `*++a`, the address of a is increased by 1 first, and the corresponding value is returned by riding the changed address. In the case of `(*a)++`, the dereference operation is performed first, inverses the value, and then increases the value by 1. Let's look at a simple example to help you understand.



```c
    #include <stdio.h>

    int main(){
        char a[6]="ABCDE";
        char *p = a;

        printf("%c\n", *++p);
        printf("%c\n", *p++);
        printf("%c\n", *p);
        printf("%c\n", (*p)++);
        printf("%c\n", *p);

        return 0; 
    }
```

```
B
B
C
C
D
```


In the case of the `swap` function that changes two values, it generally receives and replaces the value, but it can also receive and replace an address in the form of a pointer variable.



```c
    #include <stdio.h>

    void swap(int *a, int *b){
        int temp = *a;
        *a = *b;
        *b = temp;
    }


    int main(){
        int a=4;
        int b=27; 
        printf("%d %d\n", a,b);

        swap(&a,&b);

        printf("%d %d\n", a,b);

        return 0; 
    }
```

```
4 27
27 4

```


For an array of strings, we can write a simple function to get the string copy and length. In the case of string copying, if you refer through the address of the target string and the array to contain by using the while statement, you can access through the address and assign a value. When the address moves to the end of the string, the last value, `NULL`, is returned, so the while statement is automatically terminated. In the case of string length calculation, you can accurately calculate the length of the contained string by using a pointer variable expression. When you use the sizeof function to find the length of a string, not only the length including the `NULL` value is found, but if the size of the array is larger than the size of the string, the array size value is output, so the exact string length cannot be obtained (of course You can also use the `strlen` function in the `string.h` file to calculate the exact length).



```c
    #include <stdio.h>

    void copy_string(char *a, const char *b){
        while(*a++ = *b++);
    }

    int len_string(const char *a){
        int count=0;
        while(*a++) count++;
        return count; 
    }

    int main(){
        char a[6];
        char b[6]="Apple";

        copy_string(a,b);

        printf("%s\n",a);
        printf("%s\n",b);

        printf("%d", len_string(a));

        return 0; 
    }
```

```
Apple
Apple
5
```


Additionally, when the `sizeof` function is used directly on a pointer variable, it always returns a value of `4B`. This is because the size of the pointer variable represents `4B`, which is the size to represent the memory address, and it should be understood that the size of the pointer variable itself is returned regardless of the data type.
(It may appear as 8B depending on the operating system.)



```c
    #include <stdio.h>

    int main(){
        int a[10];
        int *pa = a;
        char *pb; 
        float *pc;

        printf("%d\n", sizeof(a)/sizeof(a[0]));
        printf("%d\n", sizeof(a));
        printf("%d\n", sizeof(pa));
        printf("%d\n", sizeof(pb));
        printf("%d\n", sizeof(pc));

        return 0; 
    }
```

```
10
40
8
8
8
```


[op]: https://polymath-youn.github.io/polymath-youn.github.com/c/c++/four-arithmetic-operations/