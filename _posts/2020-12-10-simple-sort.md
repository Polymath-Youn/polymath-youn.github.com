---
layout: single
title:  "[C] Simple sort"
categories:
    - C/C++
toc: true
toc_label: "Contents Table"
toc_icon: "list"
tags: 
    - C
    - Programming
    - Algorithm
---


Of the various algorithms for sorting elements in an array, `Simple sort` is the simplest. `Simple sort` is in principle the same as `Bubble sort`. Basically, it is implemented through a double `for` loop, the outer `for` loop moves the position to be sorted, and the inner `for` loop searches for the comparison target. In ascending order, it compares the first array value with all remaining values and replaces each time a small value is displayed, and compares the second array value with the remaining values and replaces each time a small value appears. Because it is implemented through a double `for` statement, it has a time complexity of O(n^2).




```c

    #include <stdio.h>

    int a[10]={8,9,1,4,2,3,5,6,7,0};

    void SimpleSort(int N){
        int temp=0;

        for (int i=0; i<N-1; i++){
            for (int j=i+1; j<N; j++){
                if (a[i] < a[j]){
                    temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
                }
            }
        }
    }


    void PrintFunc(int N){
        for (int i=0; i<N; i++){
            printf("%d", a[i]);
        }
    }


    int main(void){
        
        SimpleSort(sizeof(a)/sizeof(a[0]));
        PrintFunc(sizeof(a)/sizeof(a[0]));

        return 0;
    }

```


Ascending and descending order only need to be reversed in the `for` loop, so I will not mention it separately. Additionally, the innermost statement in the SimpleSort function is an element substitution statement, so it can be useful if you remember it.
