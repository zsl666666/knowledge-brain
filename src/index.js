
function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello Webpack 5!';
  element.classList.add('hello');
  
  return element;
}

document.getElementById('root').appendChild(component());

// 热模块替换
if (module.hot) {
  module.hot.accept();
}