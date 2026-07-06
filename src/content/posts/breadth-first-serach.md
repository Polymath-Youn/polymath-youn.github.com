---
author: Youn
pubDatetime: 2020-12-21T00:00:00Z
title: "[C] BFS(Breadth First Search)"
postSlug: "breadth-first-serach"
featured: false
draft: false
tags:
  - c
  - programming
  - algorithm
description: "In this article, I will focus on breadth first search. BFS is a search algorithm that proceeds in the form of an octopus when the list of ve..."
---




In this article, I will focus on breadth first search. BFS is a search algorithm that proceeds in the form of an octopus when the list of vertices going from vertex `A` to `B` is different. After visiting each of the next depth vertices from the starting vertex, the adjacent vertices are visited again starting with the visited vertex. As an analogy, unlike DFS, which visits one of the city's tourist attractions and moves to the next one, it is a navigation method that goes back to the second floor of all tourist attractions after going to the first floor of every tourist attraction in the city. If the information you are looking for is the lowest level of tourist attractions, BFS is the most suitable. In other words, BFS is a very efficient search method in that it guarantees the minimum distance. BFS has a first-in-first-out structure, and because queues also have a first-in-first-out structure, BFS is implemented based on a queue.



The BFS implementation code queues the visited vertices in order, pulls out data one by one from the queue, and visits the next vertex. This process continues until the queue becomes empty because no data is accumulated in the queue. And it is implemented through the `while` statement, and the search scope is set through the `for` statement.



```c
#include <stdio.h>
int G[6][6];
int visit[6];			
int Q[50];
int top;
int rear; 
int D[50];
int P[50];

void BFS(int v, int V) {		
    front = -1;
    rear = -1;
    Q[++rear]=v;
    visit[v]=1;
    D[v]=0;

    while(front != rear){
        v = Q[++front];

        for(int w=1; w<=V; w++){
            if(visit[w]==0 && G[v][w]==1 ){
                visit[w]=1;
                Q[++rear]=w;
                D[w]=D[v]+1;
                P[w]=v;
            }
        }
    }
}

void BFS_d(int v, int V) {		
    front = -1;
    rear = -1;
    rear++
    Q[rear]=v;
    D[rear]=0;
    visit[v]=1;    

    while(front != rear){
        front++;
        v = Q[front];
        int d = D[front];

        for(int w=1; w<=V; w++){
            if(visit[w]==0 && G[v][w]==1 ){
                visit[w]=1;
                Q[++rear]=w;
                D[++rear]= d+1;
                P[w]=v;
            }
        }
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

	BFS(1, V);
}
```


In the example code above, the arrays `D` and `P` are additionally configured. In the case of the `D` array, it is configured to contain the depth information of the vertices that have passed as the BFS search is performed. In the case of the `P` array, the path information can be saved by storing the information of the immediately preceding vertex in the index of the array. The BFS code for 2D direction search is as follows.



```c
#include <stdio.h>
int G[10][10];
int visit[10][10];			
int Qx[100];
int Qy[100];
int top;
int rear; 
int D[100];
int P[100];
int dx = {1 -1 0 0};
int dy = {0 0 -1 1};

void BFS2(int x, int y, int n) {		
    front = rear = -1;
    rear++;
    Qx[rear]=x;
    Qy[rear]=y;
    visit[x][y]= 1;
    D[rear]=1;

    while(front != rear){
        front++;
        x = Qx[front];
        y = Qy[front];
        int d = D[front];
        for(int w=0; w<4; w++){
            int nx = x + dx[w];
            int nx = y + dy[w];
            if(visit[nx][ny]==1) continue;
            if(G[nx][ny]==0) continue;
            if(nx >=0 && nx <n && ny >=0 && ny < n ){
                visit[nx][ny]=1;
                rear++;
                Qx[rear]=nx;
                Qy[rear]=ny;
                D[rear]=s+1;
            }
        }
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

	BFS(0, 0, 10);
}
```