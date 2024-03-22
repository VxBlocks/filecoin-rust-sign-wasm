(()=>{
  class Aleoereum{
    constructor(){

    }
    /**
     * 
     * @param {object} arg 传递的消息 connect wallet
     * 
     */
    enable(arg){
      arg = arg || 'open';
      window.postMessage({ type: "FROM_PAGE", text: arg }, "*");
    }
  }
  window.aleoereum = new Aleoereum();
})()