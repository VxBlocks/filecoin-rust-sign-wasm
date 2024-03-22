let message = "";
chrome.runtime.onConnect.addListener((port) => {
  port.onMessage.addListener((req, sender,sendResponse) => {
    if (typeof req === 'string' && req === 'open') {
      openWallet();
    } else if (typeof req === 'object'&&req.msg.record) {
      openWallet();
      message = req.msg;
      // chrome.tabs.query({active: true},function(tabs){
      //   console.log(tabs);
      // });
    }else if(typeof req === 'string' && req === '给 background 传递信息~'){
      port.postMessage(message);
    }

  })
})
chrome.system.display.getInfo((display)=>{
  var {width,height} = display[0].bounds;

})
const openWallet = () => {
  chrome.windows.create({
    url: "popup.html",
    type: "popup",
    // top: 0,
    // width: width,
    // height: height,
  })
}


// chrome.tabs.onUpdated.addListener((tabId,changeInfo,tab)=>{
//     if(tab.status === 'loading'){
//       chrome.tabs.sendMessage(tabId,message);
//     }
  
// })






