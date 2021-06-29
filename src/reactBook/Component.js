/* 함수형 컴포넌트와 클래스형 컴포넌트.
함수형의 장점은 클래스형보다 선언하기 편하다. 메모리 자원을 덜 사용한다. 결과물의 파일 크기가 더 작다. (성능면에서는 별 차이없다.)
  단점은 state와 라이프사이클API의 사용이 불가능하다. 이 단점은 Hooks 라는 기능이 도입되면서 해결되었지만 클래스형 컴포넌트와 조금 다른 방식으로 비슷한 작업을 할 수 있다.
*/

/*
props는 properties의 줄임말로 컴포넌트 속성을 설정할 때 사용하는 요소다. props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴퍼넌트에서 설정할 수 있다.
  부모 컴포넌트에서 작성한 속성들이 객체형태로 아래 MyComponent의 인자에 들어간다.!! 무려 그래서 props라는 매개변수를 쓰지 않더라도 아무 변수 명이나 사용할 수 있다.!
  만약 props 객체의 프로퍼티가 없어서 기본 값이 출력되게 하려면 
  함수.defaultProps 객체에 기본 값들을 설정하면 된다. 위 프로퍼티를 사용하면
  함수의 프로퍼티 중 defaultProps이 생성되고
  am 객체의 프로토타입 중에 defaultProps가 있을 거라 예상이 된다.??? console.log(am) 을 조회한 결과 defaultProps에 키와 값이 그대로 em 에 할당 되어있었다.
  그렇다면 defaultProps는 그냥 기본 값이라 이해하고 넘어가자..
*/

import React from 'react';

const MyComponent = am => {
  console.log(am)
  return(
  <>
    <div>안녕하세요. 제 이름은 {am.name}입니다.</div>
    <div>제 똥은 {am.leng} cm 입니다. </div>
  </>
  )
  
};


MyComponent.defaultProps = {
  leng: 50
}

export default MyComponent;
