---
layout: single
title:  "[C] If, For, While, and Switch"
categories:
    - C/C++
toc: true
toc_label: "Contents Table"
toc_icon: "list"
tags: 
    - C
    - Programming
---


`If` statement is composed of conditional decision statement and execution statement. If the conditional expression in `If()` is true, the subsequent execution statement is executed, and if it is false, it is not executed. The `else` used with `If` is executed when the `If()` conditional expression is false or the higher conditional expression is not executed. When searching for multiple conditions, you can execute each execution statement corresponding to multiple conditions by adding an `else if()` statement.




```c
  #include <stdio.h>

    int main(){
        int a=1;
        int b=1;

        if(a==1){
            b=3;            
        }
        printf("%d\n", b);

        if(a==2){
            b=2;
        }
        else{
            b=4;
        }
        printf("%d\n", b);

        if(a==2){
            b=2;
        }
        else if (a==4){
            b=4;
        }
        else{
            b=6;
        }
        printf("%d\n", b);

        if(a==1) printf("%d\n",b);


        return 0;
    }

```

```
3
4
6
6
```

The `Switch` statement is composed of conditional expressions and execution statements in the same way as the `If` statement. Various conditional expressions can be implemented more simply than `If` statements, but the types of conditional expressions and execution statements are limited. Variable expressions are possible in conditional expressions, but they must be integer expressions, and `case` comparison values in execution statements cannot be used as variables and only constant expressions are possible. In other words, it is not available in various ways compared to `If` statement, but it is highly useful when there are multiple result values for one conditional expression.



```c
    #include <stdio.h>

    int main(){
        int a=1;
        int b=1;
        int c=1;

        switch(c){
            case 1: printf("%d\n", a);
            case 2: printf("%d\n", b); break;
            case 3: printf("%d\n", c);
        }

        return 0;
    }

```

```
1
1
```


The `For` statement is the most frequently used loop along with the `If` statement. `For` statement is composed of loop statement setting and execution statement. The loop setting consists of `for(initialization expression; conditional expression; post-processing expression)`. The conditional expression is judged every time starting from the initial value, and if true, the execution statement is executed. In the case of a post-processing expression, it is executed after the execution statement (cf. `for(::)` forms an infinite loop).



In the case of `break` and `continue`, it can be used in loop statements such as `For` and `While` statements. In the case of `Break`, the loop is ended and exited. In the case of `continue`, the execution of the rest of the code is stopped, and the process returns to the post-processing formula and continues executing the loop.




```c
  #include <stdio.h>

    int main(){
        int i=0;
        int N=10;

        // N회 반복
        for(i=0; i<N; i++){
        }

        // j==N 까지 실행 
        for(int j=0; j<=N; j++){
        }

        // k=3 부터 N 번 실행
        for(int k=3; k<N+3; k++ ){
        }


        for(int m=0; m<10; m++){
            if(m==5) break;
            if(m % 2==0) printf("%d\n", m); 
        }

        return 0;
    }
```

```
0
2
4
```


Unlike the `For` statement that sets the number of loops, the `While` statement is the most used loop when the number of times cannot be set. `While` statement consists of a conditional expression and an execution statement, and is repeated while the conditional expression remains true. Conditional expressions are mainly set as upper and lower limits of a value, or created by using matching conditions. In the case of the `Do-While` statement, the execution statement is executed first and the conditional statement is checked, so the execution statement is executed at least once. Like `for` loops, `break` and `continue` statements can be used (cf. `while(1)` forms an infinite loop, just like `for(::)`).



```c
    #include <stdio.h>
   
    int main(){
        int i=0;

        while (i<10){
            i++;
        }
        printf("%d\n", i);

        while(!(i==20)){
            i++;
        }
        printf("%d\n",i);

        do{
            printf("%d\n",i);
            i++;
        } while(i<25);

    return 0;
    }
    
```

```
10
20
20
21
22
23
24
```