---
layout: single
title:  "[C] Fining max value"
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


To find the maximum value in an array, you can directly find the maximum value or return the index where the maximum value of the array is located. Since the maximum value in the array can be accessed by knowing the index where the maximum value is located, in most cases, an algorithm to find the index is implemented. A simple algorithm is to update the index at that time to a variable such as `max_id` when an arbitrary index `i` circulating in the for statement searches the entire array and finds a large value.



```c

    #include <stdio.h>

    int main(void){
        int a[10]={0,};
        int max_id=0;

        for(int i=0; i< sizeof(a)/sizeof(a[0]); i++){
            if (a[max_id] < a[i]) max_id = i; 
        }

        int max_value=0;

        for(int i=0; i< sizeof(a)/sizeof(a[0]); i++){
            if (max_value < a[i]) max_value = a[i];
        }

    return 0;
    }

```
