(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(824,638);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",824,638,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {
        this.application = null;
        this.MENU_ID = null;
        this.MENU_NAME = null;
        this.FORM_URL = null;
        this.TITLE_TEXT = null;

        /************************************************************************
         * event : 페이지 로드
         ************************************************************************/
        this.Form_Work_onload = function(obj,e)
        {
        	this.application = nexacro.getApplication();
        	var objOwnerFrame = this.getOwnerFrame();

        	this.MENU_ID   = objOwnerFrame.param.MENU_ID;	// 3
        	this.MENU_NAME = objOwnerFrame.param.MENU_NAME;	// Form 1_1_1
        	this.FORM_URL = objOwnerFrame.param.FORM_URL;	// Form::Form_1_1_1.xfdl
        	this.TITLE_TEXT = objOwnerFrame.param.TITLE_TEXT;	// menu > sub_menu > menu_name

        	this.Div00.set_url(this.FORM_URL);
        	this.Div00.form.resetScroll();
        };

        /************************************************************************
         * event : 페이지 활성화시
         ************************************************************************/
        this.Form_Work_onactivate = function(obj,e)
        {
        	// 탭페이지 활성화 function 호출
        	this.application.NaviFrame.form.fn_ActiveTabPage(this.MENU_ID);
        	// bottom 영역에 메뉴 navi 표시
        	this.application.BottomFrame.form.fn_showNaviText(this.TITLE_TEXT);
            this.Div00.form.resetScroll();
        	return;
        };

        /************************************************************************
         * event : 페이지 삭제시
         ************************************************************************/
        this.Form_Work_onclose = function(obj,e)
        {
        	// 탭페이지 삭제 function 호출
        	this.application.NaviFrame.form.fn_DeleteTabpage(this.MENU_ID);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.addEventHandler("onactivate",this.Form_Work_onactivate,this);
            this.addEventHandler("onclose",this.Form_Work_onclose,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
