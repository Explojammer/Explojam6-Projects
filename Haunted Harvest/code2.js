gdjs.mainMenuCode = {};
gdjs.mainMenuCode.localVariables = [];
gdjs.mainMenuCode.GDplayButtonObjects1= [];
gdjs.mainMenuCode.GDplayButtonObjects2= [];
gdjs.mainMenuCode.GDcreditsObjects1= [];
gdjs.mainMenuCode.GDcreditsObjects2= [];
gdjs.mainMenuCode.GDcredits_9595frameObjects1= [];
gdjs.mainMenuCode.GDcredits_9595frameObjects2= [];
gdjs.mainMenuCode.GDcredits_9595textObjects1= [];
gdjs.mainMenuCode.GDcredits_9595textObjects2= [];
gdjs.mainMenuCode.GDstartBGObjects1= [];
gdjs.mainMenuCode.GDstartBGObjects2= [];
gdjs.mainMenuCode.GDbgObjects1= [];
gdjs.mainMenuCode.GDbgObjects2= [];
gdjs.mainMenuCode.GDplayerObjects1= [];
gdjs.mainMenuCode.GDplayerObjects2= [];
gdjs.mainMenuCode.GDghostObjects1= [];
gdjs.mainMenuCode.GDghostObjects2= [];


gdjs.mainMenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("playButton"), gdjs.mainMenuCode.GDplayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainMenuCode.GDplayButtonObjects1.length;i<l;++i) {
    if ( gdjs.mainMenuCode.GDplayButtonObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.mainMenuCode.GDplayButtonObjects1[k] = gdjs.mainMenuCode.GDplayButtonObjects1[i];
        ++k;
    }
}
gdjs.mainMenuCode.GDplayButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "tutorial", false);
}}

}


};

gdjs.mainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mainMenuCode.GDplayButtonObjects1.length = 0;
gdjs.mainMenuCode.GDplayButtonObjects2.length = 0;
gdjs.mainMenuCode.GDcreditsObjects1.length = 0;
gdjs.mainMenuCode.GDcreditsObjects2.length = 0;
gdjs.mainMenuCode.GDcredits_9595frameObjects1.length = 0;
gdjs.mainMenuCode.GDcredits_9595frameObjects2.length = 0;
gdjs.mainMenuCode.GDcredits_9595textObjects1.length = 0;
gdjs.mainMenuCode.GDcredits_9595textObjects2.length = 0;
gdjs.mainMenuCode.GDstartBGObjects1.length = 0;
gdjs.mainMenuCode.GDstartBGObjects2.length = 0;
gdjs.mainMenuCode.GDbgObjects1.length = 0;
gdjs.mainMenuCode.GDbgObjects2.length = 0;
gdjs.mainMenuCode.GDplayerObjects1.length = 0;
gdjs.mainMenuCode.GDplayerObjects2.length = 0;
gdjs.mainMenuCode.GDghostObjects1.length = 0;
gdjs.mainMenuCode.GDghostObjects2.length = 0;

gdjs.mainMenuCode.eventsList0(runtimeScene);

return;

}

gdjs['mainMenuCode'] = gdjs.mainMenuCode;
