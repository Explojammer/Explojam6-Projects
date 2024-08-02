var gdjs;(function(s){class _ extends s.RuntimeObject{constructor(i,t){super(i,t);this._transformationIsUpToDate=!1;this._tilemapJsonFile=t.content.tilemapJsonFile,this._tilesetJsonFile=t.content.tilesetJsonFile,this._collisionMaskTag=t.content.collisionMaskTag,this._debugMode=t.content.debugMode,this._fillColor=s.rgbOrHexStringToNumber(t.content.fillColor),this._outlineColor=s.rgbOrHexStringToNumber(t.content.outlineColor),this._fillOpacity=t.content.fillOpacity,this._outlineOpacity=t.content.outlineOpacity,this._outlineSize=t.content.outlineSize,this._tileMapManager=s.TileMap.TileMapRuntimeManager.getManager(i),this._width=0,this._height=0,this._scaleX=1,this._scaleY=1;const o=new TileMapHelper.EditableTileMap(1,1,0,0,new Map);this._collisionTileMap=new s.TileMap.TransformedCollisionTileMap(o,this._collisionMaskTag),this._renderer=new s.TileMap.TileMapCollisionMaskRenderer(this,i),this._updateTileMap(),this.onCreated()}updatePreRender(i){super.updatePreRender(i),this._debugMode&&this.hitBoxesDirty&&this.updateHitBoxes()}getRendererObject(){return this._renderer.getRendererObject()}getVisibilityAABB(){return null}updateFromObjectData(i,t){return i.content.tilemapJsonFile!==t.content.tilemapJsonFile&&this.setTilemapJsonFile(t.content.tilemapJsonFile),i.content.tilesetJsonFile!==t.content.tilesetJsonFile&&this.setTilesetJsonFile(t.content.tilesetJsonFile),i.content.debugMode!==t.content.debugMode&&this.setDebugMode(t.content.debugMode),i.content.fillColor!==t.content.fillColor&&this.setFillColor(s.rgbOrHexStringToNumber(t.content.fillColor)),i.content.outlineColor!==t.content.outlineColor&&this.setOutlineColor(s.rgbOrHexStringToNumber(t.content.outlineColor)),i.fillOpacity!==t.fillOpacity&&this.setFillOpacity(t.fillOpacity),i.outlineOpacity!==t.outlineOpacity&&this.setOutlineOpacity(t.outlineOpacity),i.outlineSize!==t.outlineSize&&this.setOutlineSize(t.outlineSize),!0}getNetworkSyncData(){return{...super.getNetworkSyncData(),tmjf:this.getTilemapJsonFile(),tsjf:this.getTilesetJsonFile(),dm:this.getDebugMode(),oc:this.getOutlineColor(),fc:this.getFillColor(),os:this.getOutlineSize(),fo:this.getFillOpacity(),oo:this.getOutlineOpacity(),wid:this.getWidth(),hei:this.getHeight()}}updateFromNetworkSyncData(i){super.updateFromNetworkSyncData(i),i.tmjf!==void 0&&this.setTilemapJsonFile(i.tmjf),i.tsjf!==void 0&&this.setTilesetJsonFile(i.tsjf),i.dm!==void 0&&this.setDebugMode(i.dm),i.oc!==void 0&&this.setOutlineColor(i.oc),i.fc!==void 0&&this.setFillColor(i.fc),i.os!==void 0&&this.setOutlineSize(i.os),i.fo!==void 0&&this.setFillOpacity(i.fo),i.oo!==void 0&&this.setOutlineOpacity(i.oo),i.wid!==void 0&&this.setWidth(i.wid),i.hei!==void 0&&this.setHeight(i.hei)}extraInitializationFromInitialInstance(i){i.customSize&&(this.setWidth(i.width),this.setHeight(i.height))}_updateTileMap(){this._tileMapManager.getOrLoadTileMap(this._tilemapJsonFile,this._tilesetJsonFile,0,i=>{!i||(this._collisionTileMap=new s.TileMap.TransformedCollisionTileMap(i,this._collisionMaskTag),this.hitBoxes=Array.from(this._collisionTileMap.getAllHitboxes(this._collisionMaskTag)),this._renderer.redrawCollisionMask(),this._width=this._collisionTileMap.getWidth()*this._scaleX,this._height=this._collisionTileMap.getHeight()*this._scaleY)})}updateHitBoxes(){this.updateTransformation();for(const i of this._collisionTileMap.getAllHitboxes(this._collisionMaskTag));this.hitBoxesDirty=!1,this._renderer.redrawCollisionMask(),this.updateAABB()}updateTransformation(){if(this._transformationIsUpToDate)return;const i=this._collisionTileMap.getTransformation(),t=Math.abs(this._scaleX),o=Math.abs(this._scaleY);i.setToIdentity(),i.translate(this.x,this.y);const l=this.angle*Math.PI/180;i.rotateAround(l,this.getCenterX(),this.getCenterY()),i.scale(t,o),this._collisionTileMap.setTransformation(i),this._transformationIsUpToDate=!0}getHitBoxes(){return this.hitBoxesDirty&&(this.updateHitBoxes(),this.updateAABB(),this.hitBoxesDirty=!1),this.hitBoxes}getHitBoxesAround(i,t,o,l){return this.updateTransformation(),this._collisionTileMap.getHitboxesAround(this._collisionMaskTag,i,t,o,l)}insideObject(i,t){return this.updateTransformation(),this._collisionTileMap.pointIsInsideTile(i,t,this._collisionMaskTag)}updateAABB(){if(this.getAngle()===0)this.aabb.min[0]=this.x,this.aabb.min[1]=this.y,this.aabb.max[0]=this.aabb.min[0]+this.getWidth(),this.aabb.max[1]=this.aabb.min[1]+this.getHeight();else{const i=this._collisionTileMap.getTransformation(),t=0,o=this._collisionTileMap.getWidth(),l=0,n=this._collisionTileMap.getHeight(),e=this.aabb.min;e[0]=t,e[1]=l,i.transform(e,e);const a=e[0],r=e[1];e[0]=o,e[1]=l,i.transform(e,e);const h=e[0],p=e[1];e[0]=o,e[1]=n,i.transform(e,e);const f=e[0],g=e[1];e[0]=t,e[1]=n,i.transform(e,e);const d=e[0],u=e[1];this.aabb.min[0]=Math.min(a,h,f,d),this.aabb.max[0]=Math.max(a,h,f,d),this.aabb.min[1]=Math.min(r,p,g,u),this.aabb.max[1]=Math.max(r,p,g,u)}}setTilemapJsonFile(i){this._tilemapJsonFile=i,this._updateTileMap()}getTilemapJsonFile(){return this._tilemapJsonFile}isTilemapJsonFile(i){return this._tilemapJsonFile===i}setTilesetJsonFile(i){this._tilesetJsonFile=i,this._updateTileMap()}getTilesetJsonFile(){return this._tilesetJsonFile}isTilesetJsonFile(i){return this._tilesetJsonFile===i}getDebugMode(){return this._debugMode}setDebugMode(i){this._debugMode=i,this._renderer.redrawCollisionMask()}getFillColor(){return this._fillColor}getOutlineColor(){return this._outlineColor}setFillColor(i){this._fillColor=i}setOutlineColor(i){this._outlineColor=i}setOutlineSize(i){this._outlineSize=i}getOutlineSize(){return this._outlineSize}setFillOpacity(i){this._fillOpacity=i}getFillOpacity(){return this._fillOpacity}setOutlineOpacity(i){this._outlineOpacity=i}getOutlineOpacity(){return this._outlineOpacity}setX(i){super.setX(i),this._transformationIsUpToDate=!1}setY(i){super.setY(i),this._transformationIsUpToDate=!1}setAngle(i){super.setAngle(i),this._transformationIsUpToDate=!1}setWidth(i){this._width!==i&&(this._scaleX=i/this._collisionTileMap.getWidth(),this._width=i,this._transformationIsUpToDate=!1,this.invalidateHitboxes())}setHeight(i){this._height!==i&&(this._scaleY=i/this._collisionTileMap.getHeight(),this._height=i,this._transformationIsUpToDate=!1,this.invalidateHitboxes())}setSize(i,t){this.setWidth(i),this.setHeight(t)}getScale(){const i=this.getScaleX(),t=this.getScaleY();return i===t?i:Math.sqrt(i*t)}setScale(i){this.setScaleX(i),this.setScaleY(i)}setScaleX(i){i<0&&(i=0),this._scaleX!==i&&(this._scaleX=i,this._width=i*this._collisionTileMap.getWidth(),this._transformationIsUpToDate=!1,this.invalidateHitboxes())}setScaleY(i){i<0&&(i=0),this._scaleY!==i&&(this._scaleY=i,this._height=i*this._collisionTileMap.getHeight(),this._transformationIsUpToDate=!1,this.invalidateHitboxes())}getWidth(){return this._width}getHeight(){return this._height}getScaleX(){return this._scaleX}getScaleY(){return this._scaleY}}s.TileMapCollisionMaskRuntimeObject=_,s.registerObject("TileMap::CollisionMask",s.TileMapCollisionMaskRuntimeObject),_.supportsReinitialization=!1})(gdjs||(gdjs={}));
//# sourceMappingURL=tilemapcollisionmaskruntimeobject.js.map
