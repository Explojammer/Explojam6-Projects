gdjs.endScreenCode = {};
gdjs.endScreenCode.localVariables = [];
gdjs.endScreenCode.GDwinBGObjects1= [];
gdjs.endScreenCode.GDwinBGObjects2= [];
gdjs.endScreenCode.GDtextObjects1= [];
gdjs.endScreenCode.GDtextObjects2= [];
gdjs.endScreenCode.GDcredits_9595textObjects1= [];
gdjs.endScreenCode.GDcredits_9595textObjects2= [];
gdjs.endScreenCode.GDbg2Objects1= [];
gdjs.endScreenCode.GDbg2Objects2= [];
gdjs.endScreenCode.GDplayerObjects1= [];
gdjs.endScreenCode.GDplayerObjects2= [];
gdjs.endScreenCode.GDghostObjects1= [];
gdjs.endScreenCode.GDghostObjects2= [];


gdjs.endScreenCode.asyncCallback20609628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.endScreenCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("bg2"), gdjs.endScreenCode.GDbg2Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("credits_text"), gdjs.endScreenCode.GDcredits_9595textObjects2);

{gdjs.evtTools.sound.playMusic(runtimeScene, "EndPumkin.wav", true, 80, 0.95);
}{for(var i = 0, len = gdjs.endScreenCode.GDbg2Objects2.length ;i < len;++i) {
    gdjs.endScreenCode.GDbg2Objects2[i].getBehavior("Tween").addObjectOpacityTween2("fadeTween", 255, "linear", 1.25, false);
}
}{for(var i = 0, len = gdjs.endScreenCode.GDcredits_9595textObjects2.length ;i < len;++i) {
    gdjs.endScreenCode.GDcredits_9595textObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.endScreenCode.GDcredits_9595textObjects2.length ;i < len;++i) {
    gdjs.endScreenCode.GDcredits_9595textObjects2[i].addForce(0, -(80), 1);
}
}gdjs.endScreenCode.localVariables.length = 0;
}
gdjs.endScreenCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.endScreenCode.localVariables);
for (const obj of gdjs.endScreenCode.GDbg2Objects1) asyncObjectsList.addObject("bg2", obj);
for (const obj of gdjs.endScreenCode.GDcredits_9595textObjects1) asyncObjectsList.addObject("credits_text", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(7), (runtimeScene) => (gdjs.endScreenCode.asyncCallback20609628(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.endScreenCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg2"), gdjs.endScreenCode.GDbg2Objects1);
gdjs.copyArray(runtimeScene.getObjects("credits_text"), gdjs.endScreenCode.GDcredits_9595textObjects1);
{for(var i = 0, len = gdjs.endScreenCode.GDcredits_9595textObjects1.length ;i < len;++i) {
    gdjs.endScreenCode.GDcredits_9595textObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.endScreenCode.GDbg2Objects1.length ;i < len;++i) {
    gdjs.endScreenCode.GDbg2Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{ //Subevents
gdjs.endScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.endScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.endScreenCode.GDwinBGObjects1.length = 0;
gdjs.endScreenCode.GDwinBGObjects2.length = 0;
gdjs.endScreenCode.GDtextObjects1.length = 0;
gdjs.endScreenCode.GDtextObjects2.length = 0;
gdjs.endScreenCode.GDcredits_9595textObjects1.length = 0;
gdjs.endScreenCode.GDcredits_9595textObjects2.length = 0;
gdjs.endScreenCode.GDbg2Objects1.length = 0;
gdjs.endScreenCode.GDbg2Objects2.length = 0;
gdjs.endScreenCode.GDplayerObjects1.length = 0;
gdjs.endScreenCode.GDplayerObjects2.length = 0;
gdjs.endScreenCode.GDghostObjects1.length = 0;
gdjs.endScreenCode.GDghostObjects2.length = 0;

gdjs.endScreenCode.eventsList1(runtimeScene);

return;

}

gdjs['endScreenCode'] = gdjs.endScreenCode;
