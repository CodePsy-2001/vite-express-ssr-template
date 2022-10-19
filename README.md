# vite-express-ssr-template

## 개요

`vite-plugin-ssr`에 `express`와 `react`, `react-router`를 덧칠한 기본 템플릿입니다.

`yarn berry`를 사용합니다.

## 타입 선언

- `@types` 디렉토리 안에 선언하세요.

## 컴포넌트 & 스타일링

- 특정 페이지에서 한 번만 사용할 컴포넌트는 `*.page.tsx` 옆에 만드세요.
- 여러 페이지에서 재사용할 수 있는 컴포넌트는 `component` 폴더에 만드세요.
- 스타일 폴더를 따로 만들지 마세요. 대신, 컴포넌트 옆에 `scss` 파일을 함께 만드세요.
- 컴포넌트 스타일링은 `[componentName].module.scss`를 이용하고, 페이지 스타일링은 `[pageName].scss`를 이용하세요.

## 서비스 & 라우팅

- 커스텀 서비스나 라우팅이 필요할 때마다, service 및 routes 폴더에 만드세요.
  - `service/passport.ts`
  - `routes/api.ts`
  
## 환경변수
-  기본 적용할 환경변수는 `.env`에 저장하세요.
-  로컬용 환경변수는 `.env.local`에 저장하세요. fallback 방식으로 적용됩니다. (prod/dev 실행 커맨드 무관)
-  TODO: prod/dev 실행 커맨드별 환경변수 적용

## 배포

`ioredis`, `mongoose` 등의 일반적인 driver 라이브러리는 vercel 등 serverless 배포 솔루션과 궁합이 좋지 않습니다.

**Railway, AWS EC2 등 실체가 있는 서버로 배포하세요!!**

빌드 커맨드: `yarn build` 또는 `vite build`

배포 커맨드: `yarn serve` 또는 `ts-node ./server/server`
