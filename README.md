# 칵테일 추천 서비스

## 백엔드 실행 방법
1. 최초 실행 시 스프링 파일을 빌드해야 합니다. (스프링 코드 변경 없을 시 다시 실행시킬 때는 안 해도 됨)  
깃 bash를 열고 build.sh 파일을 실행해주세요.  
```sh build.sh```

2. 로컬 터미널에서 도커 컨테이너를 실행시켜 주세요  
```docker-compose -f docker-compose-with-flask.yml up --build```  

3. 요청 테스트  
- 모든 요청은 http://localhost:8088으로 보내주세요  
- 요청 예시: http://localhost:8088/auth/~, http://localhost:8088/flask/~   
- 컨테이너를 띄우고 나서 eureka에 등록되고 1분 정도 지난 후 api 요청이 처리됩니다. 
- 주의) flask로 보내는 모든 요청에는 Authorization 헤더에 로그인 시 발급되는 토큰을 담아서 보내야 합니다. 


참고: flask 개발을 위해 스프링 서버만 켜두고 flask 서버는 따로 켜고 싶은 경우, 로컬 터미널에서 아래 명령어를 실행해 주세요. (build.sh 파일은 동일하게 사전에 실행해야 함)  
```docker-compose -f docker-compose-without-flask.yml up --build```