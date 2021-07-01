import './App.css';
import Myclass from "./reactBook/classpropTypes"
import JSX from './reactBook/JSXgram';
import MyComponent from './reactBook/Component';
import Counter from './reactBook/Counter';
import { Fragment, Component } from 'react'; // div 요소로 태그들을 감싸고 싶지 않을 때  Fragment 라는 컴포넌트를 추가로 불러와 사용할 수 있다.
// Fragment는 <> </> 형태로도 사용할 수 있는데 실험해 보니 Fragment 컴포넌트를 import 하지 않고 <> </>로 요소들을 감싸도 오류가 나지 않는다.

/*<JSX />  jsx 문법 설명 컴포넌트*/


// function App() {
//   const name = '리액트';
//   const backColor = { backgroundColor: 'aqua'};
//   return (
//     <Fragment>

//     </Fragment>
//   );
// }
class App extends Component {
  render() {
    const name = 'react';
    return (
    <Fragment>
      <Counter>무야야야야야호오오 나는 프롭스 칠드런!</Counter>
    </Fragment>
    )
  }
}


export default App;
