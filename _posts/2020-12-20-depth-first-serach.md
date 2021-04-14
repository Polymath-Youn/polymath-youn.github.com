---
layout: single
title:  "[C] DFS(Depth First Search)"
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



When explaining the [graph][graph] data structure, we learned about the path. The list of vertices that goes through to move from vertex `A` to `B` may be different, and thus each may have different path lengths. Typical methods for searching a path are `DFS` and `BFS`. In this article, I will focus on depth first search. In route search, if there is one length, the number of cases will also be one, but when a selectable branch is encountered, a criterion for decision is required. Depth first search is literally a search method that goes deep first. After proceeding to the end of the search in one direction, come back and search the other way. For example, when preparing for an exam for 4 subjects, DFS is a method of studying from volume 1 to the end and moving to volume 2. This is different from the BFS method in which all four books are studied one chapter at a time.



In the case of DFS, which prioritizes depth, it follows a last-in-first-out structure when implemented in code. Therefore, DFS can be implemented with stack or recursive calls. DFS is mainly implemented with recursive calls because coding based on recursive calls is relatively short rather than using the stack data structure.



```c
#include <stdio.h>
int G[6][6];
int visit[6];			
int s_arr[100];
int top;

void DFS(int x, int V) {		
	top = -1;
	visit[x] = 1;     
	s_arr[++top] = x;

	while (top != -1) {		
		int w;

		for (w = 1; w <= V; w++) {
			if (G[x][w] == 1 && visit[w] == 0) {				
				visit[w] = 1; 
                s_arr[++top] = w;				
				x = w;
				break;
			}
		}
		if (w > V) x = s_arr[top--];
	}
}

int main() {	
    int V, E;
	scanf("%d%d", &V, &E);

	for (int i = 0; i < E; i++) {
		int u, v;
		scanf("%d%d", &u, &v);
		G[u][v] = 1;
		G[v][u] = 1;
	}

	DFS(1, V);
}
```


```c
#include <stdio.h>

int G[6][6];
int visit[6];

void DFS(int v, int n){
    visit[v]=1;
    for(int w=1; w<=n; w++){
        if(visit[w]==0 && G[v][w]==1){
            DFS(w, n);
        }
    }
}

int main(){

    DFS(2,5);
    
    return 0;
}
```


In the code implementation method, node visits are checked using the `visit` array. In the case of a search for a graph, an `if` statement is included to distinguish between visited and non-visited vertices, and a `for` statement is used to search within a range. Basically, the two DFS algorithms above are designed to search from the smallest numbered vertex. The code for searching 2D arrays with 4 directions is as follows.


```c
#include <stdio.h>

int G2[10][10];
int visit[10][10];
int dx = {1 -1 0 0};
int dy = {0 0 -1 1};

void DFS2(int x, int y){
    visit[x][y]=1;
    for(int i=0; i<4; i++){
        int nx = x + dx[i];
        int ny = y + dy[i];
        if(visit[nx][ny]==0 && G2[nx][nx] != 1 ){
            DFS2(nx,ny);
        }
    }
}

int main(){

    DFS2(0,0);
    
    return 0;
}
```


Pictures related to the graph concept will be updated in the future.


[graph]: https://polymath-youn.github.io/polymath-youn.github.com/c/c++/graph/