export default () => {
    self.addEventListener("message", e => {// eslint-disable-line no-restricted-globals
        if (!e) return;
        let text = e.data;

        for (let i = 0; i < text.length; i++) {
          console.log(text[i]);
        }

        postMessage({
          allChars:text.length,
          whiteChars:"UNKON"
        });
    });
};
// export function calculate(text){
//
// }
