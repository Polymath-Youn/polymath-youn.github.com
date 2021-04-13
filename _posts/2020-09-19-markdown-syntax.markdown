---
layout: single
title:  "Markdown syntax"
comments: true
categories:
    - Gitblog
toc: true
toc_label: "Contents Table"
toc_icon: "list"
tags: 
    - Markdown
    - Gitblog
    - Syntax
---


This blog, like most `gitblog`, is based on `jekyll` written in `ruby` language. `jekyll` acts as an interpreter that receives files written in `md` and `Markdown` as input and converts them into static web pages. So, in this article, I would like to summarize the Markdown grammar. 


### Contents format   
+ Header 
    + Output  
  
  
# h1  
## h2  
### h3  
#### h4  
##### h5  
###### h6  

+ Syntax
    ``` 
    # h1 
    ## h2 
    ### h3
    #### h4
    ##### h5
    ###### h6
     ``` 

+ Blockquote 
    + Output
        > quotes
        >   > quotes
        >   >   > quotes  
    + Syntax  
        \> quotes
        \>  > quotes
        \>  >   > quotes
  
  
+ Font style 


    | Syntax               | Output              |
    |:---:|:---:|
    | \*italic\*           | *italic*            |
    | \_italic\_           | _italic_            |
    | \**bold\*\*          | **bold**            |
    | \__bold\_\_          | __bold__            |
    | \~~strikethrough\~\~ | ~~strikethrough~~   |
    | \<u>Underline\</u>   | <u>Underline</u>    |  
      
      
+ Ordered list 
    + Output 
        1. o-list
        1. o-list
        1. o-list
        2. o-list

    + Syntax  
        \1. o-list  
        \1. o-list  
        \1. o-list    
        \2. o-list  

+ Unordered list 
    + Output
        * uo-list
            - uo-list
                + un-list
    + Syntax  
        \* uo-list  
            \- uo-list  
                \+ un-list


### Contents sytle 


+ Table  
    + Output


        | Header 1 | Header 2 |
        |:---------:|:---------:|
        | Content 1 | Content 3 |
        | Content 2 | Content 4 |


    + Syntax  
    ```
        | Header 1 | Header 2 |
        |:---------:|:---------:|
        | Content 1 | Content 3 |
        | Content 2 | Content 4 |
    ```  
+ Table align 
    + Output

  
        | Header 1 | Header 2 | Header 3 |
        | :-------- | :--------: | --------: |
        | Left | Center | Right |


    + Syntax


    ```
        | Header 1  | Header 2   | Header 3  |
        | :-------- | :--------: | --------: |
        | Left      | Center     | Right     |
    ```


+ Code block 코드 블록
    + Output  
    ```
    Code block contents
    ```  
    + Syntax  
        + Syntax should have three ` in front and end.  
            \'''  
            Code block contents  
            \'''  

    + Code block style : c, java, xml, json  
    

    ```c
        void f()
            printf(%s, "This is c code");          
    ```


        ``` c   
            void f()  
                printf(%s, "This is c code");  
        ```


+ Inline code block  
    + Output  
    `Inline code block`  
    + Syntax  
    \`Inline code block`


+ Horizontal line 
    + Output


    ---  
    ***  
    ___  


    + Syntax


    \---  
    \***  
    \___  


+ Footnotes 각주
    + Output  
    Footnote[^id]  

    [^id]: footnote explanation  
    + Syntax  
    Footnote\[^id]  


        \[^id]: footnote explanation  
+ Expander  
    + Output  
        <details>
         <summary>Fold</summary>  
            pythonprint("hello world!")  
        </details>


    + Syntax


        ```
        <detail>
         <summary>Fold</summary>  
            pythonprint("hello world!")  
        </details>
        ```

+ External link 외부 링크
    + Output
    

    [google](http://www.google.co.kr "hover:구글")  
    [google][link1]

    
    [link1]: http://www.google.com/ "hover:구글"


    <mbyun1420@gmail.com/>  
    + Syntax  
    ```
        [google](http://www.google.co.kr "hover:구글")  
        [google][link1]  
        [link1]: http://www.google.com/ "hover:구글"  
        <mbyun1420@gmail.com/>  
    ```


## etc 
+ Block setting 
    + Output


<div markdown="1">block setting </div>


    + Syntax
        ```
        <div markdown="1">block setting</div>
        ```

+ Image 
    + Output  
    ![image_example_1]({{ site.baseurl }}/assets/images/8.jpg)
    ![image_example_2][image_link]

    [image_link]: {{ site.baseurl }}/assets/images/8.jpg


    + Syntax  

    ```
        ![image_example_1]({{ site.baseurl }}/assets/images/8.jpg)
        ![image_example_2][image_link]

        [image_link]: {{ site.baseurl }}/assets/images/8.jpg
    ```

+ Video   
    + Output

        
    <p><iframe style="width:100%;" height="315" src="https://www.youtube.com/embed/Cniqsc9QfDo?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe></p>

    + Syntax  
    ```
        <p><iframe style="width:100%;" height="315" src="https://www.youtube.com/embed/Cniqsc9QfDo?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe></p>
    ```


#### Reference  
https://docs.github.com/en/free-pro-team@latest/github/writing-on-github/organizing-information-with-tables  
https://heropy.blog/2017/09/30/markdown/  
https://simhyejin.github.io/2016/06/30/Markdown-syntax/  
