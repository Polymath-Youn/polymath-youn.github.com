---
layout: single
title:  "[C] Selection sort"
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


Selective sorting is a sorting algorithm that replaces the largest/smallest value among the comparison targets at a specific position. In the case of ascending order, the minimum value of the array elements is put in the first position, and the minimum value of the remaining elements is substituted in the next position and proceeds to the end of the array. Looking at the algorithm, it receives an array and executes a double `for` statement. In the double `for` statement, the first loop serves to change the elements of the array, and the inner loop serves to find the minimum value among the remaining objects. Then, the sorting is performed by substituting the elements of the array.




```c
#include <stdio.h>

void selectionsort(int a[], int N){
    int temp = 0;
    int min=0;

    for(int i=0; i<N-1 ; i++){
        min=i;
        for(int j=i+1; j< N; j++ ){
            if (a[j]< a[min]) min=j;
        }
        temp = a[i];
        a[i]= a[min];
        a[min]=temp;
    }     
}

int main(){
    int a[10]= {2,9,1,4,6,3,5,7,8,0};
    int a_size = (sizeof(a))/(sizeof(a[0]));
    selectionsort(a, a_size);

    for(int i=0; i<a_size; i++){
        printf("%d ", a[i]);
    }
    return 0;
}
```

```
0 1 2 3 4 5 6 7 8 9
```