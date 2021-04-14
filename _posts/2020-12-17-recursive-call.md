---
layout: single
title:  "[C] Recursive call"
categories:
    - C/C++
toc: true
toc_label: "Contents Table"
toc_icon: "list"
tags: 
    - C
    - Programming
---


Recursive calls are calling the same function within a function, i.e. itself. Recursive calls call the same function within a function, but behave like other functions because the memory area is set differently. In general, a function that uses recursive calls sets the termination condition for recursive calls in the form of a number or condition. In order to implement this, information is transmitted mainly by declaring a variable such as `n` and passing it through a recursive call.

  

```c
#include <stdio.h>

void f_rec(int n,int k){
    if(n==k){
        printf("End");
        return;
    }
    else {
        printf("%d\n",n);
        f_rec(n+1, k);
    }
}

int main(){

    f_rec(0,4);

    return 0;
}
```

```
0
1
2
3
End
```


Using recursive calls, you can design various algorithms. For example, you can create an array of `0/1` by using two recursive calls at a time. This array can be interpreted as a subset algorithm because it can convey information about whether or not an element at a specific position is mathematically selected.



```c
#include <stdio.h>

int a[3];

void f_rec(int n,int k){
    if(n==k){
        for (int i=0; i<k ; i++){
            printf("%d",a[i] );
        }
    }
    else {
        a[n]=1;
        f_rec(n+1, k);
        a[n]=0;
        f_rec(n+1,k);
    }
}

int main(){

    f_rec(0,3);

    return 0;
}
```

```
111
110
101
100
011
010
001
000
```


The subset algorithm example is a good example to understand that recursive functions behave like `stack` data structures. Looking at the output value, it can be seen that the operation of putting `1` in the `a` array is output from the successive value. After the recursive call is performed continuously, it goes down to the end, and it can be confirmed that the next recursive function is executed. In addition, when designing a recursive function, you must write the desired execution statement at the bottom to obtain each result.


A simple and popular example implemented with recursive calls is the Fibonacci sequence.



```c
#include <stdio.h>

int a[3];

int f_rec(int n){
    if(n<2) return n;
    else return f_rec(n-1)+f_rec(n-2);
}

int main(){

    printf("%d",f_rec(10));
    return 0;
}
```

```
55
```