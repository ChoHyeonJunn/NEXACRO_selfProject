(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top");
            this.set_titletext("Form_Top");
            this.set_scrolltype("none");
            this.set_background("url(\'imagerc::img_top_logo.png\') no-repeat 3% center");
            this.set_border("0px none,0px none,1px solid black");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,75);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1024,75,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Top.xfdl", function() {
        this.application = null;

        /************************************************************************
         * event : 페이지 로드
         ************************************************************************/
        this.Form_Top_onload = function(obj,e)
        {
        	this.application = nexacro.getApplication();
        	this.createMenuButton();
        };

        // function : 메뉴 버튼 생성
        this.buttonList = [];
        this.createMenuButton = function()
        {
        	var left=230, top=15, width=130, height=45, gap=5;

        	this.application.gds_menu.filter("MENU_LEVEL==0");

        	for (var i=0, len=this.application.gds_menu.rowcount; i<len; i++) {
        		var menuId = this.application.gds_menu.getColumn(i, "MENU_ID"),
        			id = menuId,
        			button = new Button(id, left, top, width, height, null, null);

        		/*button.set_cssclass("btn_TF_topNav");*/
        		button.set_text(this.application.gds_menu.getColumn(i, "MENU_NAME"));
        		button.set_cssclass("bg_sample");
        		button.set_id(menuId);
        		button.set_visible(true);
        		button.menuId = menuId;
        		button.addEventHandler("onclick", this.btnMenu_onclick, this);
        		this.addChild(id, button);
        		button.show();

        		left += width + gap;
        		this.buttonList.push(button);
        	}

        	this.application.gds_menu.filter("");
        };

        /************************************************************************
         * event : 메뉴 버튼 클릭 - left 메뉴 생성
         ************************************************************************/
        this.btnMenu_onclick = function(obj,e)
        {
        	// 버튼 색 변경
        	this.fn_setBtnColor(obj.id);

        	// left 메뉴 셋팅 함수 호출
        	this.application.LeftFrame.form.fn_setLeftMenu(obj.menuId);
        };

        this.fn_setBtnColor = function(pMENU_ID)
        {
        	// 버튼 색 변경
        	for(var i=0; i<this.buttonList.length; i++){
        		if(this.buttonList[i].id == pMENU_ID){
        			this.buttonList[i].set_background("#6163ef");
        			this.buttonList[i].set_color("#ffffff");
        		}
        		else{
        			this.buttonList[i].set_background("#ffffff");
        			this.buttonList[i].set_color("#555555");
        		}
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Top_onload,this);
        };
        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
