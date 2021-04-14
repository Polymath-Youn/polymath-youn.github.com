---
layout: single
title:  "[C] Four arithmetic operations 사칙연산"
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


In order to correctly perform the four arithmetic operations in the `c` language, it is necessary to understand the data types, operators, and operation precedence. Data types were discussed in [Data Type][Data Type]. Among the four arithmetic operations, the value and operation differ depending on the data type for division. In the case of the division operator, the operation between `float` is the same as the general division operation. However, when using the division operator for `int`, only the quotient is taken. In addition, `%` sign performs modulus operation, discarding the quotient and taking only the remainder, and only `int` can be used.



|Operation | Syntax |
|:---:   |:---:   | 
|Addition | +    |
|Subtraction| -     |
| Multiplication | * |
| Division | /      |
| Modulus | %       |



Operator precedence 
- Among the unary and binary operators, the unary operator takes precedence. 
- Among the unary operators, they are calculated in the order close to the variable.
- Among the binary operators, multiplication and division take precedence over addition and subtraction, and are calculated from left to right.
    (cf. `=` direction of assignment through calculation is right->left)



The complex substitution operator follows the binary operator format, and itself becomes the operand.    
(a=a+1) == (a+=1) == (a++)



```
a *= b + 1 
a  = a * ( b + 1 )

a *= b += 1 
a  = a* (b+=1) = a * ( b = b + 1 )
```


The result of the operation varies depending on whether the increment/decrement operator is placed before or after. If it is located in the front, it first increments 1, and if it is located after, it performs the specified operation and then increments 1.  



```c
    #include <stdio.h>

    int main(){
        int a=10;

        printf("%d\n",a);
        printf("%d\n",a++);
        printf("%d\n",a);
        printf("%d\n",++a);
        

        return 0;
    }


```


```
10
10
11
12

```




[Data Type]: https://polymath-youn.github.io/polymath-youn.github.com/c/c++/b-data-type/