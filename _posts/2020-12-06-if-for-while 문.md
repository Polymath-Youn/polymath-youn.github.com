---
layout: single
title:  "[C] If, For, While, and Switch 문"
categories:
    - C/C++
toc: true
toc_label: "Contents Table"
toc_icon: "list"
tags: 
    - C
    - Programming
---


`If`문은 조건 판단문과 실행문으로 구성된다. `If()`안의 조건식이 참이면 이후 실행문을 수행하고 거짓이면 실행하지 않는다. `If`와 함께 사용되는 `else`는 `If()` 조건식이 거짓일때, 혹은 상위 조건식이 실행되지 않으면 수행된다. 여러 조건을 탐색하는 경우, else if () 문을 추가하여 여러 조건에 해당하는 실행문을 각각 수행할 수 있다.  



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


`Switch` 문은 `If` 문과 동일하게 조건식과 실행문으로 구성된다. `If` 문보다 다양한 조건 식을 간단하게 구현할 수 있지만 조건식과 실행문의 형태가 제한적이다. 조건식에 변수식은 가능하지만 정수식이어야하며, 실행문 내 `case` 비교 값은 변수활용이 불가능하고 상수식만 가능하다. 즉 `If` 문에 비해 다양하게 활용가능하지는 않지만 하나의 조건식에 대해 여러 결과값이 존재하는 경우에 활용성이 높다. 


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



`For` 문은 `If` 문과 더불어 가장 많이 사용되는 반복문이다. `For` 문은 반복문 설정과 실행문으로 구성되어 있다. 반복문 설정은 `for(초기화식; 조건식; 후처리식)`으로 이루어져있다. 초기 값을 시작으로 매번 조건식을 판단하며 참일 경우 실행문을 수행한다. 후처리식의 경우 실행문 이후에 실행된다 (cf. `for(::)` 는 무한루프를 형성한다).



`break`와 `continue` 의 경우, `For` 문과 `While` 문과 같은 반복문에서 활용가능하다. `Break` 의 경우 반복문을 종료하고 빠져나오며, `continue` 의 경우 나머지 코드의 수행을 그만두고 다시 후처리식으로 돌아가 반복문을 계속 실행한다. 



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


반복문의 횟수를 설정하는 `For` 문과 달리 횟수를 설정할 수 없을 때, 가장 많이 사용된는 반복문이 `While` 문이다. `While` 문은 조건식과 실행문으로 구성되며, 조건식이 참으로 유지되는 동안 반복된다. 조건식은 주로 값의 상,하한으로 설정하거나 일치 조건을 활용하여 작성한다. `Do-While` 문의 경우 실행문이 머저 실행되고 조건문을 검사하는 구조로 되어있어 적어도 한번 이상은 실행문을 수행한다. `For` 반복문과 동일하게 `break`, `continue` 문이 사용 될 수 있다 (cf. `while(1)` 은 `for(::)`와 마찬가지로 무한루프를 형성한다).



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