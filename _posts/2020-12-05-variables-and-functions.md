---
layout: single
title:  "[C] Declaration of variables and functions"
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


When writing code based on the C language, variables or functions are used. These are declared with definitions, and they need to be understood because they have different behaviors depending on where and how they are declared. Variables can be divided into two types depending on the location of the declaration. The first is a global variable, and the other is a local variable. A global variable literally means a variable that can be referenced in all regions, and a local variable is a variable that can be referenced only in the region where the variable is declared.



For example, variables defined outside the main statement are used as global variables, and all variables used in the main statement or inside functions or braces are used as local variables. If a global variable and a local variable are stored under the same variable name, when the variable is called from the declared local, the local variable is called first. If a local variable is not declared in the calling area, a search is performed to see if there is a match among global variables. In other words, if a variable with the same name exists in different layers, the activated layer value takes precedence.



```c
#include <stdio.h>

int g1;
int g2=5;

int main(){
    
    int g1=10;
    int g2=15;
    {
        int g1=20;
        printf("%d\n", g1);
        printf("%d\n", g2);
    }

    printf("%d\n",g1);

    {
        printf("%d\n",g1);
    }

    return 0;
}
```

```
20
15
10
10
```


Additionally, global variables are automatically initialized to 0 at initialization, and cannot be initialized through variable expressions (e.g. int a = b +1;). A variable expression can be used when initializing a local variable, and if an initial value is not specified, an arbitrary value is assigned.



The basic building blocks of functions are inputs, outputs, and operations. In the case of input, it means passing an argument, and the output means the return value. All other processes within the function correspond to operations. In the case of a function, input/output is not necessary, and when there is no input, it is expressed using a `void` type. On the other hand, the input can receive multiple values as arguments, but only one output should be returned (even when using the `Struct` type, one `Struct` is returned). Because it returns one output, the function follows the data type of the output.



The writing method differs depending on where the function is defined. In principle, functions must be declared before the statement in which they are used. However, it does not have to be defined, and the type and name of the function can be specified in advance. In this case, the specified function does not need to use an exact argument. Also, arguments specified in functions operate independently even if they use the same names as arguments used in higher layers. To understand this, it is important to know that functions use the stack structure to store local variables. When a function is used, a stack frame for that function is created. All local variables used and declared are operated through this stack frame. When the function is called, the created stack frame is activated and all previous stacks are deactivated, so the active stack variable is always referenced.



```c
#include <stdio.h>

int divide(int b, int a);

int add(int a, int b){
    int c= a + 2 * b;
    return c;
}

int main(){    
    int a=3;
    int b=5;

    printf("%d %d",add(b,a), divide(b,a));
    return 0;
}

int divide(int a, int b){
    int c = a/b;
    return c;
}
```

```
11 1
```
 
Pictures related to the stack concept will be updated in the future.

