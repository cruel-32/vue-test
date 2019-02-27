# MIDDLEWARE

This directory contains your Application Middleware.
The middleware lets you define custom function to be ran before rendering a page or a group of pages (layouts).

More information about the usage of this directory in the documentation:
https://nuxtjs.org/guide/routing#middleware

**This directory is not required, you can delete it if you don't want to use it.**

# 미들웨어

이 디렉토리에는 응용 프로그램 미들웨어가 들어 있습니다.
미들웨어를 사용하면 페이지 또는 페이지 그룹 (레이아웃)을 렌더링하기 전에 실행될 사용자 정의 함수를 정의 할 수 있습니다.

문서에서이 디렉토리의 사용법에 대한 추가 정보 :
https://nuxtjs.org/guide/routing#middleware

**이 디렉토리는 필요하지 않습니다. 사용하지 않으려는 경우 삭제할 수 있습니다. **


#미들웨어는 아래의 세가지에서 순차적으로 실행됩니다:

1.nuxt.config.js
2.매칭된 레이아웃
3.매칭된 페이지