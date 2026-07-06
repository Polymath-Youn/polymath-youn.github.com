---
author: Youn
pubDatetime: 2020-12-10T00:00:00Z
title: "[C] Bubble sort, 버블 정렬"
postSlug: "bubble-sort"
featured: false
draft: false
tags:
  - c
  - programming
  - algorithm
description: "Bubble sorting performs sorting in the form of comparing and exchanging values of two adjacent elements with the name given to the form perf..."
---



Bubble sorting performs sorting in the form of comparing and exchanging values of two adjacent elements with the name given to the form performing sorting like bubbling. The difference from simple sorting is that the order in which values are placed or substituted is different, but the code structure of the algorithm is the same. In the case of ascending sorting, the largest element is moved to the end through continuous substitution. The first loop of the array defines the range of the second loop and determines the range of elements to be compared, and the second loop replaces the value by comparing it with the next element.



```c

    #include <stdio.h>

    int a[10]={8,9,1,4,2,3,5,6,7,0};

    void BubbleSort(int N){
        int temp=0;

        for (int i=N-1; i>0; i--){
            for (int j=0; j<i; j++){
                if (a[j] > a[j+1]){
                    temp = a[j];
                    a[j]= a[j+1];
                    a[j+1]=temp;
                }
            }
        }
    }

    void PrintFunc(int N){
        for (int i=0; i<N; i++){
            printf("%d ", a[i]);
        }
    }


    int main(void){
        
        BubbleSort(10);
        PrintFunc(10);

        return 0;
    }

```

```
0 1 2 3 4 5 6 7 8 9
```