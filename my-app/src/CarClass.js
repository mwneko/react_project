import React from 'react';

class Cat extends React.Component {
    // Props 是传递给 React 组件的参数。
    // 道具通过 HTML 属性传递给组件。
    // props 代表属性
  constructor(props) {
      super(props);
      //   React Class 组件有一个内置state对象。
      //   您可能已经注意到我们state之前在组件构造函数部分中使用过。
      //   该state对象是存储属性值属于组件。
      //   当state对象改变时，组件会重新渲染。
      //    从后端get到的数据应该放在state里被调用，或者用来判断
    this.state = {color: "yellow"};
  }
  changeColor = () => {
        this.setState({color: "blue"})

    }
  render() {
      return (
          <div>
              <h2>I am a {this.state.color} Cat! and  {this.props.model}</h2>
              {/* event 跟html写法不同注意区分 */}
              <button
                  type="button"
                  onClick={this.changeColor}
              >Change color</button>
          </div>
      );
  }
}

export default Cat