

/**
 * Injects a script tag into the current document
 *
 * @param {string} content - Code to be executed in the current document
 */
function injectScript() {
  try {
    const container = document.head || document.documentElement;
    const scriptTag = document.createElement('script');
    scriptTag.setAttribute('async', 'false');
    scriptTag.src = chrome.runtime.getURL('inpage.js');
    container.insertBefore(scriptTag, container.children[0]);
    container.removeChild(scriptTag);
  } catch (error) {
    console.error('MetaMask: Provider injection failed.', error);
  }
}

const start = () => {
  injectScript();
};

start();

var message = ""
// 监听网页发送请求
window.addEventListener("message", (event) => {
  // We only accept messages from ourselves
  if (event.source != window) {
    return;
  }
  if (event.data.type && (event.data.type == "FROM_PAGE")) {
    message = event.data.text;
    // 链接插件
    let prot = chrome.runtime.connect();
    console.log("Content script received: " + event.data.text);
    prot.postMessage({ msg: event.data.text });
  }
}, false);



