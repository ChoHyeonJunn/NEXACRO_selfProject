(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Div");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div_Top","0","0","1024","75",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("frameTop");
            obj.set_url("FrameDiv::Form_Top.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div_Left","0","75","200","673",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("frameLeft");
            obj.set_url("FrameDiv::Form_Left.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div_Bottom","0","748","1024","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("frameBottom");
            obj.set_url("FrameDiv::Form_Bottom.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div_Navi","200","75","824","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("frameNavi");
            obj.set_url("FrameDiv::Form_Navi.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div_Work","200","110","824","638",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("frameWork");
            obj.set_url("FrameDiv::Form_Work.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","FrameDiv::Form_Top.xfdl");
            this._addPreloadList("fdl","FrameDiv::Form_Left.xfdl");
            this._addPreloadList("fdl","FrameDiv::Form_Bottom.xfdl");
            this._addPreloadList("fdl","FrameDiv::Form_Navi.xfdl");
            this._addPreloadList("fdl","FrameDiv::Form_Work.xfdl");
        };
        
        // User Script
        this.registerScript("FormDiv.xfdl", function() {
        /************************************************************************
         * 화면 로드 시
         ************************************************************************/
        this.Form_Div_onload = function(obj,e)
        {
        // 	// Frame Top
        // 	var objChildFrameTop = new ChildFrame();
        // 	objChildFrameTop.init("childframetop", 0, 0, 1024, 75, null, null, "FrameDiv::Form_Top.xfdl");
        // 	this.Div_Top.addChild("childframetop", objChildFrameTop);
        // 	objChildFrameTop.show();
        // 	objChildFrameTop.set_dragmovetype("none");
        //
        // 	// Frame Left
        // 	var objChildFrameLeft = new ChildFrame();
        // 	objChildFrameLeft.init("childframeleft", 0, 0, 225, 673, null, null, "FrameDiv::Form_Left.xfdl");
        // 	objChildFrameLeft.show();
        // 	this.Div_Left.addChild("childframeleft", objChildFrameLeft);
        // 	objChildFrameLeft.set_dragmovetype("none");
        //
        // 	// Frame Navi
        // 	var objChildFrameNavi = new ChildFrame();
        // 	objChildFrameNavi.init("childframenavi", 0, 0, 824, 35, null, null, "FrameDiv::Form_Navi.xfdl");
        // 	this.Div_Navi.addChild("childframenavi", objChildFrameNavi);
        // 	objChildFrameNavi.show();
        // 	objChildFrameNavi.set_dragmovetype("none");
        //
        // 	// FrameSet Work
        // 	var objFrameSetWork = new FrameSet();
        // 	objFrameSetWork.init("childframework", 0, 0, 824, 638, null, null, "FrameDiv::Form_Work.xfdl");
        // 	this.Div_Work.addChild("childframework", objChildFrameWork);
        // 	objFrameSetWork.show();
        // 	objFrameSetWork.set_dragmovetype("none");
        //
        // 	// Frame Bottom
        // 	var objChildFrameBottom = new ChildFrame();
        // 	objChildFrameBottom.init("childframebottom", 0, 0, 1024, 20, null, null, "FrameDiv::Form_Bottom.xfdl");
        // 	this.Div_Bottom.addChild("childframebottom", objChildFrameBottom);
        // 	objChildFrameBottom.show();
        // 	objChildFrameBottom.set_dragmovetype("none");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Div_onload,this);
        };
        this.loadIncludeScript("FormDiv.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
