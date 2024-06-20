const {
  renderToReadableStream,
} = require("react-server-dom-webpack/server.edge");
const { cache, createElement } = require("react");

const getId = cache(() => ({ id: Math.random() }));

const A = async () => {
  await new Promise(setImmediate);
  const id = getId();
  console.log(id);
  return null;
};

const B = async () => {
  const id = getId();
  console.log(id);
  return createElement(A, {}, null);
};

renderToReadableStream(createElement(B, {}, null), null);
