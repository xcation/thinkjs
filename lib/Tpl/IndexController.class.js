/**
 * controller
 * @return 
 */
module.exports = Controller(function(){
    return {
        /*init: function(){
            this.super("init");
        }*/
        indexAction: function(){
            this.end("hello, thinkjs!");
            //this.display(); //render Home/index_index.html file
        }
    }
});