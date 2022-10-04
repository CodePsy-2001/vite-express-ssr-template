# vite-express-ssr-template

## 개요

`vite-plugin-ssr`에 `express`와 `react`를 덧칠한 기본 템플릿입니다.

## 타입 선언

- `@types` 디렉토리 안에 선언하세요.

## 컴포넌트 & 스타일링

- 특정 페이지에서 한 번만 사용할 컴포넌트는 `*.page.tsx` 옆에 만드세요.
- 여러 페이지에서 재사용할 수 있는 컴포넌트는 component 폴더에 만드세요.
- 스타일 폴더를 따로 만들지 마세요. 대신, 컴포넌트 옆에 `scss` 파일을 함께 만드세요.

## 서비스 && 라우팅

- 커스텀 서비스나 라우팅이 필요할 때마다, service 및 routes 폴더에 만드세요.
  - Ex) `service/passport.ts`
  - Ex) `routes/api.ts`

## 배포

### general server

`ioredis`, `mongoose` 등의 일반적인 driver 라이브러리는 vercel 등 serverless 배포 솔루션과 궁합이 좋지 않습니다. **Railway, AWS EC2 등 실체가 있는 서버로 배포하세요!!**

### serverless function

vercel 등 서버리스 컨테이너에 배포하고 싶다면 다음 사항을 따르세요.

- 라이브러리 제한
  - `mongoose` 등 driver 라이브러리 금지
  - `serverless-mysql` 등 serverless 전용 라이브러리 이용
  - `@upstash/redis` 등 HTTP로 래핑한 라이브러리 이용
  - `graphql` 등 DB 연결은 외부 서버에 맡기고, 본 repo에선 HTTP 요청만 처리
- express 기능 제한
  - router 중첩 지양
  - 중복되는 router 기능은 페이지마다 onBeforeRender 함수 안에서 구현
- vercel 설정
  1. 루트 디렉토리에 vercel.json 생성

      ```json
      {
        "rewrites": [
          {
            "source": "/((?!assets/).*)",
            "destination": "/api/prod.ts"
          }
        ]
      }
      ```

  2. Vite 기본 템플릿 선택
  3. 기타 build 및 deploy 명령 설정
