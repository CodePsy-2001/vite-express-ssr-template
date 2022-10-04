import React from 'react';

export { Page };

function Page({ is404 }: { is404: boolean }) {
  if (is404) {
    return (
      <>
        <h1>404 Page Not Found</h1>
        <p>This page could not be found.</p>
      </>
    );
  }

  return (
    <>
      <h1>오류가 발생했습니다</h1>
      <p>죄송합니다! 이전 페이지로 돌아가기</p>
    </>
  );
}
