# Git Action (From dream coding of Ellie)
<b>Git Action</b>은 특정 이벤트 발생 시, 원하는 일을 자동으로 동작하도록 만들어주는 툴을 말한다.

## Event, Workflows, Jobs, Actions, Runners
* Event (on: push)
    * main branch로 merge 하거나
    * commit을 push 하거나
    * issue를 누군가 열거나 (생성하거나)
* Workflows
    * 이벤트가 발생이 한다면 수행하는 장소
    * 하나 혹은 다수의 Job 존재
    * 자동화하고 싶은 것을 설정
* Job
    * 유닛 테스트를 수행하거나
    * E2E (하나의 기능) 테스트를 수행하거나
    * 순서대로 실행 가능하도록 하거나
    * npm 명령어를 실행하거나
    * Action을 수행하거나
* Action
    * npm을 사용하는 것처럼 만들어진 것을 사용하는 것
    * 재사용이 가능한 Action을 사용하거나
    * check out으로 수행한 것을 확인하거나
    * setup node로 노드 환경을 설치하거나
* Runner
    * VM Machine 혹은 Container
    * 각 Job은 독립적인 Runner에서 실행

## 깃허브 Action
* 파일 생성하기
    * .github/workflows/workflow.yml
    ```
    name: learn-github-actions
    on: [push] // 커밋이 푸시될 때마다
    jobs: // 잡 실행
        check-bats-version: // 어떤 일을 수행하는지
            runs-on: ubuntu-latest // 어떤 VM Machine을 사용할 것인지
            steps:
                - uses: actions/checkout@v3
                - uses: actions/setup-node@v3
                  with:
                    node-version: '14'
                - run: npm install -g bats
                - run: bats -v
    ```

## 실제 테스트 해보기
```
# This workflow will do a clean installation of node dependencies, cache/restore them, build the source code and run tests across different versions of node
# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions

name: Example CI

# main branch에 Push될 때마다, main branch에 Pull Request될 때마다 

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

# 이벤트가 발생할 때마다 Test 수행

jobs:
  test:

    # 우분투 최신 환경에서 테스트
    runs-on: ubuntu-latest

    # 특정 버전에서 테스트 해볼 수 있는 코드
    strategy:
      matrix:
        node-version: [12.x, 14.x, 16.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test

```

## 예시 코드로 확인하기 [Link](https://youtu.be/iLqGzEkusIw?t=372)

[엘리의 드림코딩, Git Action](https://www.youtube.com/watch?v=iLqGzEkusIw)