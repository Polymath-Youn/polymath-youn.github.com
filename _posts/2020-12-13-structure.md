---
layout: single
title:  "[C] Structure"
categories:
    - C/C++
toc: true
toc_label: "Contents Table"
toc_icon: "list"
tags: 
    - C
    - Programming
---


Structures are mainly used when you want to collect and deal with various data types from declaring and using data types one by one. Structures are derived types created by combining basic data types, and have the same characteristics as they are classified as data types such as `int`, `char`, and `float`. Structures must first declare their shape/form, and this is called a `template`. After the `template` is created, the structure variable is declared using it. There are several ways to declare a structure and initialize variables. There are cases where only the template is defined and the initial value is defined later, the template and initialization are performed at once, and the anonymous structure is used without the name of the template. Initializers of all structures, including anonymous structures used with `typedef` functions, can be used only at the beginning, and after that, each element must be accessed and modified individually.



```c
#include <stdio.h>
struct s_a{
    int a; 
    char b;
};

struct s_b{
    int a;
    char b;
} x = {2, 'B'};

int main(){
    struct s_a y={1,'A'}; 

    printf("%d %c\n", y.a, y.b );
    printf("%d %c\n", x.a, x.b);
    
    return 0; 
}
```

```
1 A
2 B
```


Since structures have the same properties as data types, both the `*` operator and the `[]` array type can be used. In particular, when using the `*` operator to access an element in a structure, it can be accessed through the `->` operator.



```c
#include <stdio.h>
struct s_a{
    int a; 
    int b;
} x={1,2};

int main(){
    
    struct s_a *p;
    struct s_a q[4];

    p = &x;
    
    (*p).a = 4;
    printf("%d\n",p.b);

    p->a = 27;
    printf("%d\n",p.b);

    printf("%d\n",q[3].b);
    q[3].b=27;
    printf("%d\n",q[3].b);

    return 0; 
}

```

```
4
27
0
27
```


Additionally, `typedef` are often used when using structures. It acts as a preprocessor and is easy to understand if you think of it as a nickname. It is mainly used when defining anonymous structures.



``` c
#include <stdio.h>
typedef struct
{
    int a;
    char b;
} s_e;


int main(){

    s_e st={4,'M'};

    printf("%d %c", st.a, st.b);

    return 0;
}

```

```
4 M
```