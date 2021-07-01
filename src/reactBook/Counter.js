import React, {Component} from 'react';



class Counter extends Component {
  // constructor(props) {  //왜 씨발 constructor 에 props를 인자로 넣어줬는지 모르겠어
  //   super(props);
  //   this.state = {
  //     number: 0,
  //     key: '의자 밑'
  //   };
  // };
    state = {
      number: 0,
      key: '그만큼 좋다는거지'
    }
  render() {
    const { number } = this.state; // state를 조회할 때는 this.state로 조회합니다.
    const { key } =this.state;
    console.log(this.state)
    return (
      <div>
        <h1>{number}{key}</h1>
        <button onClick={() => {
          // this.setState(prevState => {
          //   return {
          //     number: prevState.number + 1,
          //     key : prevState.key + "무야호"             // 이렇게 this.setState 를 함수형태로 쓰거나 this.setState의 인자로 객체를 전달 해도된다.
          //   };
          // })
          this.setState({
            number: number + 1         // 결국엔 setState 는 함수라고 생각하면 편함. 인자로 객체를 넣거나 함수안의 함수를 작성 해도된다.
          })

          }}> +1 </button>
        <div>{this.props.children}</div> 
      </div>
    );
  }
}

export default Counter;