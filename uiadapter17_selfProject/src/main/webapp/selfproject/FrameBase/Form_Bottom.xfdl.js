(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Bottom");
            this.set_titletext("Form_Bottom");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,20);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staNavi","10","0",null,"100%","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1024,20,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Bottom.xfdl", function() {
        this.application = null;
        /************************************************************************
         * event : 페이지 온로드
         ************************************************************************/
        this.Form_Bottom_onload = function(obj,e)
        {
        	this.application = nexacro.getApplication();
        };

        // function : bottom 에 네비게이션 경로 표현
        this.fn_showNaviText = function(pNaviText)
        {
        	this.staNavi.set_text(pNaviText);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Bottom_onload,this);
        };
        this.loadIncludeScript("Form_Bottom.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
