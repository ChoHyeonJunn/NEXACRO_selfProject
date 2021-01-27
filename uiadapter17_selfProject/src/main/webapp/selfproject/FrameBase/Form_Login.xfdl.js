(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Login");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","35%","35%",null,null,"35%","35%","400",null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("beige");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","4","15","100%","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Self Project Login");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","9.92%","60",null,"31","9.92%",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("ID");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","9.92%","105",null,"31","9.92%",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_displaynulltext("Password");
            obj.set_password("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","9.92%","150",null,"31","9.92%",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("로그인");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Login.xfdl", function() {
        this.application = null;

        /************************************************************************
         * event : 폼 온로드
         ************************************************************************/
        this.Form_Login_onload = function(obj,e)
        {
        	this.application = nexacro.getApplication();

        	// 임시로 로그인 허용
        	// this.fn_loginSuccess();
        };

        /************************************************************************
         * event : 로그인 버튼 클릭
         ************************************************************************/
        this.Div00_Button00_onclick = function(obj,e)
        {

        	var ID = this.Div00.form.Edit00.value;
        	var PASSWORD = this.Div00.form.Edit01.value;

        	// this.alert("TEST 로그인 시도" + "\nID : " + ID + "\nPASSWORD : " + PASSWORD);

        	this.fn_loginSuccess();
        	// this.fn_loginFail();
        };

        // function : 로그인 성공
        this.fn_loginSuccess = function()
        {
        	// separatesize 조절하여 로그인frame을 감추고, 컨텐츠를 가지는 frame을 보여준다.
        	this.application.VFrameSet00.set_separatesize("0,75,*,20");
        }

        // function : 로그인 실패
        this.fn_loginFail = function()
        {
        	return;
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Login_onload,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
        };
        this.loadIncludeScript("Form_Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
