export default () => {
  const messageHandler = e => {
    if (!e) return;
    e.data.text().then((res)=>postMessage(res));
  };

    self.addEventListener("message", messageHandler);// eslint-disable-line no-restricted-globals
    return () => self.removeEventListener("message", messageHandler);// eslint-disable-line no-restricted-globals
};
