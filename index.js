import { renderToPipeableStream } from "@bureaudouble/rsc-engine/react-server-dom-esm/server.node";
import { cache, createElement } from "@bureaudouble/rsc-engine/react.forker";

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

renderToPipeableStream(createElement(B, {}, null), null);
