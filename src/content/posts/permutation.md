---
author: Youn
pubDatetime: 2020-12-18T00:00:00Z
title: "[C] Permutation, Combination"
postSlug: "permutation"
featured: false
draft: false
tags:
  - c
  - programming
  - algorithm
description: "The part about permutation and combination is a regular customer who frequently appears in algorithmic problem solving and is a good example..."
---



The part about permutation and combination is a regular customer who frequently appears in algorithmic problem solving and is a good example to understand [recursive calls][재귀 호출]. In addition, the code structure is similar to Depth-First Search (DFS), which is very helpful. We will not explain the permutations and combinations themselves, but just look at the meaning and check the code right away. When selecting `m` out of `N`, permutations and combinations can be classified according to whether or not the order of selection is significant. Permutations are arranged by themselves if they are ordered in the order they are picked, and in the case of combinations, they can be regarded as the same if they are the same regardless of the order picked.


- Permutation with reputation : Number of cases where `r` is selected from `n` possible duplicates


```c
#include <stdio.h>
int a[3];
int num[4] = {1,2,3,4};

void r_permutation(int N, int m, int n){
    if (n==m){
        for (int i=0; i<m; i++){
            printf("%d", a[i]);
        }
        printf(" ");
    }
    else{
        for (int i=0; i<N; i++){
            a[n]=num[i];
            r_permutation(N,m,n+1);
        }
    }
}

int main(){

    r_permutation(4, 3, 0, 0);

    return 0;
}
```

```
111 112 113 114 121 122 123 124 131 132 133 134 141 142 143 144 211 212 213 214 221 222 223 224 231 232 233 234 241 242 243 244 311 312 313 314 321 322 323 324 331 332 333
334 341 342 343 344 411 412 413 414 421 422 423 424 431 432 433 434 441 442 443 444
```

- Permutation : Number of cases where `r` is selected from `n` different



```c
#include <stdio.h>
int a[3];
int num[4] = {1,2,3,4};
int visit[4];

void permutation(int N, int m, int n){
    if (n==m){
        for (int i=0; i<m; i++){
            printf("%d", a[i]);
        }
        printf(" ");
    }
    else{
        for (int i=0; i<N; i++){
            if(visit[i]==1) continue;
            visit[i]=1;
            a[n]=num[i];
            permutation(N,m,n+1);
            visit[i]=0;
        }
    }
}

int main(){

    permutation(4, 3, 0, 0);

    return 0;
}
```

```
123 124 132 134 142 143 213 214 231 234 241 243 312 314 321 324 341 342 412 413 421 423 431 432
```


- Combination with reputation : Number of cases where `r` is selected from `n` possible duplicates



```c
#include <stdio.h>
int a[3];
int num[4] = {1,2,3,4};

void r_combination(int N, int m, int n, int v){
    if (n==m){
        for (int i=0; i<m; i++){
            printf("%d", a[i]);
        }
        printf(" ");
    }
    else{
        for (int i=v; i<N; i++){
            a[n]=num[i];
            r_combination(N,m,n+1,v+1);
        }
    }
}

int main(){

    combination(4, 3, 0, 0);

    return 0;
}
```

```
111 112 113 114 122 123 124 133 134 144 222 223 224 233 234 244 333 334 344 444
```


- Combination with reputation : Number of cases where `r` is selected from `n` different



```c
#include <stdio.h>
int a[3];
int num[4] = {1,2,3,4};
int visit[4];

void combination(int N, int m, int n, int v){
    if (n==m){
        for (int i=0; i<m; i++){
            printf("%d", a[i]);
        }
        printf(" ");
    }
    else{
        for (int i=v; i<N; i++){
            if(visit[i]==1) continue;
            visit[i]=1;
            a[n]=num[i];
            combination(N,m,n+1,i);
            visit[i]=0;
        }
    }
}

int main(){

    r_combination(4, 3, 0, 0);

    return 0;
}
```

```
123 124 134 234
```


[재귀 호출]: https://polymath-youn.github.io/polymath-youn.github.com/c/c++/recursive-call/