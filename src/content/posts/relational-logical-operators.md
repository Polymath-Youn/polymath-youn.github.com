---
author: Youn
pubDatetime: 2020-12-05T00:00:00Z
title: "[C] Relational, logical, and ternary operators"
postSlug: "relational-logical-operators"
featured: false
draft: false
tags:
  - c
  - programming
description: "In c language, True / False corresponds to nonzero and zero, respectively. Conditional expressions that judge true/false through operators a..."
---



In `c` language, `True / False` corresponds to non-zero and zero, respectively. Conditional expressions that judge `true/false` through operators are mainly used in `if`, `for`, and `while` statements, and are expressed through relational and logical operators. In the case of logical operators, it is mainly used to express the relationship between conditional expressions and comparison operators are used to compare values or to check whether they match. 




|Operation | Syntax |
|:---:   |:---:   | 
| Equal to | ==    |
| Not equal|  !=     |
| Greater than or equal to  | >= |
| Greater than | >      |
| Less than or equal to  | <=      |
| Less than   |  <       |
 

|Operation | Syntax |
|:---:   |:---:   | 
| And | &&   |
| Or |  \|\|  |
| Not  | ! |


Ternary operators are classified as conditional expressions in the `c` language and are used for various purposes, and are mainly used when writing simple conditional expressions. The ternary operator consists of a conditional expression and two execution statements, and can be understood as a simple `if-else` statement.





```c
    #include <stdio.h>

    int main(){
        int win==1;
        int nc = (win==1)? 2: 0 ;
        printf("%d",nc);

        return 0;
    }


```

```
2
```