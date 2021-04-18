---
layout: single
title:  "[Python] 파이썬 함수, 모듈, 라이브러리, 패키지"
categories:
    - Python
toc: true
toc_label: "Contents Table"
toc_icon: "list"
tags: 
    - Python
    - Programming
---


파이썬 내용을 정리하다 헷갈렸던 내용을 정리해놓은 다른 블로그들의 도움을 받아서 작성했다. 아래 참조 블로그들의 글도 상당히 정리가 잘 되어있으니, 더 정교하게 학습하고 싶다면 들어가서 확인해보는 것을 추천한다. 


### 포함관계 
코드의 나열이 특정 기능으로써 작동하기 위한 구조적인 포맷은 C언어에섭부터 `함수`라는 이름으로 불렸다. `함수`들을 모아서 특정 목적이나 주제에 맞게 모아놓은 것을 `모듈`이라고 한다. 그리고 이 `모듈`들을 모아놓은 것을 `라이브러리`라고 한다.   
포함관계는 `함수<모듈<라이브러리`이다.

![image_example_1]({{ site.baseurl }}/assets/images/python_structure.png)


### 함수
함수는 하나의 기능을 구현하기 위한 코드의 집합이다. 함수는 매개변수를 통한 입력과 결과를 반환하는 Return으로 이루어진 정형화된 구조를 가진다. 구조를 가진 코드의 집합이 즉 `함수`이다. 사용자는 함수를 호출하여 매개변수를 통해 값을 전달하고 결과 값을 통해 기능 구현에 대한 결과를 받는다. 함수는 작업하고 있는 Script 공간에서 사용하는지 여부에 따라 내장함수와 외장함수로 나뉜다. 외장함수는 `import`를 통해 불러온 모듈을 통해 호출 할 수 있다. 


### 모듈
기능을 구현한 함수들을 모아놓은 것을 `모듈`이라고 한다. 흔히 모듈은 `.py` 확장자로 표현되는 파일을 구성하며 `import`의 대상이 되는 단위이다. 따라서 모듈은 디렉토리 구조의 최하위 단일 구조가 되며 상위구조와 계층적인 구조를 이룬다. 


### 라이브러리
라이브러리는 함수, 모듈에 이어지는 상위 개념이다. 모듈이 비슷한 기능을 모아놓은 코드들의 모음이라면, `라이브러리`는 비슷한 모듈을 모아놓은 모음이다. 즉 기능적인 관점에서 보면 `함수-모듈-라이브러리`로 이어진다. 디렉토리 구조 관점에서 바라봤을 때 `모듈-패키지` 중 패키지에 해당한다.  
라이브러리는 파이썬 언어를 개발한 개발자들이 python.org를 통해 제공하는 표준 라이브러리 (time, sys, os, math, random, ...)와 외부 개발자 (3rd Party)들에 의해 만들어진 외부 라이브러리 (numpy, scipy, ..)가 존재한다. 상식적으로 생각했을 대에는 Python을 개발한 개발자가 호환성 측면에서나, 효율 측면에서나 더 나은 라이브러리를 만들 수 있다고 생각할 수 있다. 하지만 외부집단에 의해 만들어진 라이브러리의 성능이 더 뛰어나서인지 요즘은 외부 라이브러리가 더 많이 사용되고 있는 것 같다. 


### 패키지
패키지는 기능 관점에서의 위계보다는 디렉토리 관점에서의 위계관점에서 모듈보다 상위 개념으로 이해하는 것이 더 좋을 것 같다. `패키지`는 여러 모듈들을 하나의 상위 폴더에 넣어놓은 것이다. 따라서 패키지는 설치, 배포, 전달 등의 개념으로 실행되며 이는 라이브러리를 가져오는 것과 동일하다. 전달 가능한 자료형태로써의 구분을 위해 파이썬에서는 `__init__.py` 파일을 통해 분별했으나, 최근 파이썬 버전에서는 `__init__.py`파일이 없어도 패키지 단위로 인식이 가능하다. [wikidocs](https://wikidocs.net/1418 "hover:Wikidocs") 의 대표적인 예시를 살펴보자.  
예를들어 `game` 패키지의 파일구조가 아래와 같을 경우 `sound`, `graphic`, `play` 패키지를 하위에 가지고 있으며, `play` 패키지에 `run`, `test` 모듈을 가지고 있는 셈이다. 


``` python 
game/
    __init__.py
    sound/
        __init__.py
        echo.py
        wav.py
    graphic/
        __init__.py
        screen.py
        render.py
    play/
        __init__.py
        run.py
        test.py

```


#### 파이썬에서 활용하는 대표적인 패키지(라이브러리)

- 데이터 처리 : numpy, pandas 
- ML, DL : sciket learn, tensorflow, keras, pytorch
- 이미처리: pillow, openCV
- 시각화, 그래프: matplotlib, seaborn, bokeh 
- GUI: PyQt, Tkinter
- HTTP, 웹페이지: requests, django
- 자연어 처리: NLTK, TextBlob



### References
1. https://thinkreen.github.io/python/py-FunctionModuleClass/
2. https://wikidocs.net/15545 

4. https://blue-shadow.tistory.com/101 