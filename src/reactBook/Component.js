/* 함수형 컴포넌트와 클래스형 컴포넌트.
함수형의 장점은 클래스형보다 선언하기 편하다. 메모리 자원을 덜 사용한다. 결과물의 파일 크기가 더 작다. (성능면에서는 별 차이없다.)
  단점은 state와 라이프사이클API의 사용이 불가능하다. 이 단점은 Hooks 라는 기능이 도입되면서 해결되었지만 클래스형 컴포넌트와 조금 다른 방식으로 비슷한 작업을 할 수 있다.
*/

/*
props는 properties의 줄임말로 컴포넌트 속성을 설정할 때 사용하는 요소다. props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴퍼넌트에서 설정할 수 있다.
  부모 컴포넌트에서 작성한 속성들이 객체 형태로 아래 MyComponent의 인자에 들어간다.!! 무려 그래서 props라는 매개변수를 쓰지 않더라도 아무 변수 명이나 사용할 수 있다.!
  만약 props 객체의 프로퍼티가 없어서 기본 값이 출력되게 하려면 
  함수.defaultProps 객체에 기본 값들을 설정하면 된다. 위 프로퍼티를 사용하면
  함수의 프로퍼티 중 defaultProps이 생성되고
  am 객체의 프로토타입 중에 defaultProps가 있을 거라 예상이 된다.??? console.log(am) 을 조회한 결과 defaultProps에 키와 값이 그대로 em 에 할당 되어있었다.
  그렇다면 defaultProps는 그냥 기본 값이라 이해하고 넘어가자..
*/
/* 
children은 태그 사이의 내용을 보여주는 props 다.
부모 태그에서 컴포넌트 태그의 컨텐츠에 적은 내용이 children 에 저장되었다. 또한
위에 defaultProps 같이 props 객체의 프로퍼티 값으로 children 이 생겼다.

비구조화 할당 문법을 통해 props 내부 값 추출하기.
const {name} = props; 를 쓰면 변수 name에 props의 name프로퍼티 값이 name 변수에 할당된다.
*/
/*
propTypes를 통한 props 검증 ?
propTypes에 만든 프로퍼티의 타입 값을 지정해주고 지정한 타입이 아니라면 경고 메시지는 출력해 잘못됐음을 알려줍니다.

isRequired 를 사용해 필수 propTypes 를 설정 - propTypes 를 지정하지 않았을 때 경고창을 띄어줍니다.

*/

import React from 'react';
import PropTypes from 'prop-types'

const MyComponent = am => {
  console.log(am)
  return(
  <>
    <div>안녕하세요. 제 이름은 {am.name}입니다.</div>
    <div> 나이는  {am.leng} 살 입니다. </div>
    <div>지금 기분은 ..!!{am.children}</div>
    <div>좋아하는 숫자는 {am.favoriteNumber}</div>
  </>
  )
  
};


MyComponent.defaultProps = {
  leng: 50,
  favoriteNumber: 10
}

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
}


export default MyComponent;
