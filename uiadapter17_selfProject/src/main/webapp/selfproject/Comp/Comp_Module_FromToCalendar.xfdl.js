(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Module_FromToCalendar");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new TextArea("txtResult",null,"120","45%",null,"75","20",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new TowMonthCalendar("TowMonthCalendar00","75","120","45%","33",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","33","26","1214","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Module Developer - From To Calendar");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","35","60","1214","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("넥사크로 모듈 디벨로퍼는 넥사크로 플랫폼 기반의 사용자 모듈 작성을 지원하는 개발 도구입니다. 기본 메뉴 구성과 사용법은 넥사크로 스튜디오와 비슷합니다. \r\n기존 컴포넌트를 조합해 복합적인 기능을 제공하는 컴포지트 컴포넌트와 특정 컴포넌트를 상속해서 만드는 사용자 컴포넌트 개발을 지원합니다.\r\n\r\n");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_Module_FromToCalendar.xfdl", function() {


        /************************************************************************
         * event : 페이지 온로드
         ************************************************************************/
        this.Form_Work_onload = function(obj,e)
        {
        	this.txtResult.set_value(
        		"시작일 : \n" +
        		"종료일 : \n" +
        		"기간 : 일"
        	)
        };

        /************************************************************************
         * event : FromToCalendar 온체인지
         ************************************************************************/
        this.showEvent = "";
        this.TowMonthCalendar00_onchanged = function(obj, e)
        {
        	var fromValue = (this.TowMonthCalendar00.fromValue != undefined) ? this.TowMonthCalendar00.fromValue : '';
        	var toValue = (this.TowMonthCalendar00.toValue != undefined) ? this.TowMonthCalendar00.toValue : '';
        	var dayCount;
        	if(this.TowMonthCalendar00.fromValue != '' && this.TowMonthCalendar00.toValue != ''){
        		dayCount = this.TowMonthCalendar00.getDayCount();
        	}else {
        		dayCount = '';
        	}

        	this.showEvent += "FromToCalendar onchanged event \n";
        	this.txtResult.set_value(
        		"시작일 : " + fromValue + "\n" +
        		"종료일 : " + toValue  + "\n" +
        		"기간 : " + (dayCount + 1) + "일\n\n" +
        		this.showEvent
        	)
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.TowMonthCalendar00.addEventHandler("onchanged",this.TowMonthCalendar00_onchanged,this);
        };
        this.loadIncludeScript("Comp_Module_FromToCalendar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
