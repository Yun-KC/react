/*
클래스 형 컴포넌트에서 props를 사용하려면 render 함수 안에서 this.props 를 분해구조할당을 쓰던가 따로 this.props.property 를 쓰면 된다.
*/

import react, {Component} from 'react'

class Myclass extends Component {

  render() {
    const {name, children} = this.props;
    return (
      <div>

        안녕하세요, 제 이름은 {name}입니다.<br/>
        지금 기분은 {children} 입니다.!! <br />

        {this.props.name} 

      </div>
    )
}
}

export default Myclass;