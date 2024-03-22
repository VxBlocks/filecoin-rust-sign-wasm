import("./Popup").catch((error) => console.error(`Failed to import: ${error}`));

/*global chrome*/
// chrome.runtime.onConnect.addListener((port) => {
//   port.onMessage.addListener((req) => {
//     console.log(req);
//   })
// })
