(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Div_Popup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_param3", this);
            obj._setContents("<ColumnInfo><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"DEPT_CD\">01</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"DEPT_CD\">03</Col></Row><Row><Col id=\"FULL_NAME\">Adam</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"DEPT_CD\">01</Col></Row><Row><Col id=\"FULL_NAME\">Ray</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">60000</Col><Col id=\"DEPT_CD\">02</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return3", this);
            obj._setContents("<ColumnInfo><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","33","26","1214","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Popup Div");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","75","120","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Parameter");
            obj.set_font("normal bold 13pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("staParam1","75","154","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Param1");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("staParam2","75","182","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Param2");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("staParam3","75","210","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Param3");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edtParam1","staParam1:40","154","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_value("test");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_text("test");
            this.addChild(obj.name, obj);

            obj = new Edit("edtParam2","staParam2:40","182","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("17");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_text("17");
            this.addChild(obj.name, obj);

            obj = new Grid("grdParam3","staParam3:40","210",null,"120","52%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_param3");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"FULL_NAME\"/><Cell col=\"1\" text=\"DEPT_CD\"/><Cell col=\"2\" text=\"HIRE_DATE\"/><Cell col=\"3\" text=\"SALARY\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\"/><Cell col=\"1\" text=\"bind:DEPT_CD\"/><Cell col=\"2\" text=\"bind:HIRE_DATE\"/><Cell col=\"3\" text=\"bind:SALARY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","51%","120","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Return Value");
            obj.set_font("normal bold 13pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("staReturn1","51%","154","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Return1");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("staReturn2","51%","182","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Return2");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("staReturn3","51%","210","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Return3");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReturn1","staReturn1:40","154","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_text("test");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReturn2","staReturn2:40","182","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_text("17");
            this.addChild(obj.name, obj);

            obj = new Grid("grdReturn3","staReturn3:40","210",null,"120","75",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("ds_return3");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"FULL_NAME\"/><Cell col=\"1\" text=\"DEPT_CD\"/><Cell col=\"2\" text=\"HIRE_DATE\"/><Cell col=\"3\" text=\"SALARY\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\"/><Cell col=\"1\" text=\"bind:DEPT_CD\"/><Cell col=\"2\" text=\"bind:HIRE_DATE\"/><Cell col=\"3\" text=\"bind:SALARY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","75","350",null,null,"75","20",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("");
            obj.set_border("1px solid black");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("staModeless","75","35","70","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Modeless");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("staAutosize","75","73","70","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Autosize");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("staResizable","75","111","70","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Resizable");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("staTitlebar","staModeless:300","35","70","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Titlebar");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("staWidth","staAutosize:300","73","70","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Width");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("staMaximize","staResizable:300","111","70","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("Maximize");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("staStatusbar","staTitlebar:300","35","70","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("Statusbar");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("staHeight","staWidth:300","73","70","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("Height");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("staOpacity","staMaximize:300","111","70","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("Opacity");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("chkModeless","staModeless:15","35","150","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("chkAutosize","staAutosize:15","73","150","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_value("true");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("chkResizable","staResizable:15","111","150","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("chkTitlebar","staTitlebar:15","35","150","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("chkMaximize","staMaximize:15","111","150","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("chkStatusbar","staStatusbar:15","35","150","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Spin("spnWidth","staWidth:15","68","110","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_increment("50");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_enable("false");
            obj.set_min("100");
            obj.set_max("1000");
            obj.set_value("600");
            this.Div00.addChild(obj.name, obj);

            obj = new Spin("spnOpacity","staOpacity:15","111","110","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_increment("0.1");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_min("0");
            obj.set_max("1");
            obj.set_value("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Spin("spnHeight","staHeight:15","68","110","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_increment("50");
            obj.set_enable("false");
            obj.set_min("100");
            obj.set_max("1000");
            obj.set_value("500");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnCallPopup",null,null,"120","50","20","20",null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("팝업 호출");
            obj.set_font("normal bold 14pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","35","60","1214","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("다양한 형태의 팝업 호출. 넥사크로플랫폼에서는 모달/모달리스 형태로 호출할 수 있는 API가 제공되고 타이틀바, 리사이즈 등의 옵션을 선택할 수 있습니다.");
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
        this.registerScript("Comp_Div_Popup.xfdl", function() {
        this.application = null;

        /************************************************************************
         * event : 페이지 로드
         ************************************************************************/
        this.Comp_Div_Popup_onload = function(obj,e)
        {
        	this.application = nexacro.getApplication();
        };

        /************************************************************************
         * event : chkAutosize 체크시 width/height 설정 불가
         ************************************************************************/
        this.Div00_chkAutosize_canchange = function(obj,e)
        {
        	this.Div00.form.spnWidth.set_enable(!e.postvalue);
        	this.Div00.form.spnHeight.set_enable(!e.postvalue);
        };

        /************************************************************************
         * event : 팝업 호출 클릭
         ************************************************************************/
        this.titlebarValue = null;
        this.statusbarValue = null;
        this.resizableValue = null;
        this.maximizeValue = null;
        this.opacityValue = null;
        this.autosizeValue = null;
        this.widthValue = null;
        this.heightValue = null;
        this.nLeft = null;
        this.nTop = null;

        this.Div00_btnCallPopup_onclick = function(obj,e)
        {
        	this.titlebarValue = this.Div00.form.chkTitlebar.value;
        	this.statusbarValue = this.Div00.form.chkStatusbar.value;
        	this.resizableValue = this.Div00.form.chkResizable.value;
        	this.maximizeValue = this.Div00.form.chkMaximize.value ? "maximize" : "normal";
        	this.opacityValue = this.Div00.form.spnOpacity.value;
        	this.autosizeValue = this.Div00.form.chkAutosize.value;
        	this.widthValue = this.autosizeValue ? 600 : this.Div00.form.spnWidth.value;
        	this.heightValue = this.autosizeValue ? 500 : this.Div00.form.spnHeight.value;
        	this.nLeft = Math.round((this.application.mainframe.width - this.widthValue) / 2);
        	this.nTop  = Math.round((this.application.mainframe.height - this.heightValue) / 2) ;

        	if(this.Div00.form.chkModeless.value)
        		this.fn_popupModeless();
        	else
        		this.fn_popupModel();
        };

        // function : 모달창
        this.fn_popupModel = function()
        {
        	var objChildFrame = new ChildFrame("modelPopup"
        									  , this.nLeft
        									  , this.nTop
        									  , this.widthValue
        									  , this.heightValue
        									  , null
        									  , null
        									  , "Comp::Comp_Div_Popup_Sub.xfdl");

        	objChildFrame.set_showtitlebar(this.titlebarValue);
        	objChildFrame.set_showstatusbar(this.statusbarValue);
        	objChildFrame.set_resizable(this.resizableValue);
        	objChildFrame.set_openstatus(this.maximizeValue);
        	objChildFrame.set_opacity(this.opacityValue);
        	objChildFrame.set_autosize(this.autosizeValue);
        	objChildFrame.set_dragmovetype("none");

        	var objParam = {param1:this.edtParam1.value
        	              , param2:this.edtParam2.value
        				  , param3:this.ds_param3};

        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , objParam
        						  , this
        						  , "fn_popupCallback");
        }

        // function : 모달창 콜백
        this.fn_popupCallback = function(strPopupID, strReturn)
        {
        	var arrStrReturn = strReturn.split(',');

        	this.edtReturn1.set_value(arrStrReturn[0]);
        	this.edtReturn2.set_value(arrStrReturn[1]);
        };

        // function : 모달리스
        this.fn_popupModeless = function()
        {
        	var nLeftv = system.clientToScreenX(this, this.nLeft);
        	var nTopv  = system.clientToScreenY(this, this.nTop);

        	var sOpenStyle = "showtitlebar=" + this.titlebarValue
        				   + " showstatusbar=" + this.statusbarValue
        				   + " resizable=" + this.resizableValue
        				   + " openstatus=" + this.maximizeValue
        				   + " opacity=" + this.opacityValue
        				   + " autosize=" + this.autosizeValue
        				   + " dragmovetype=none";

        	var objParam = {param1:this.edtParam1.value
        	              , param2:this.edtParam2.value
        				  , param3:this.ds_param3};

        	nexacro.open("ModelessPopup"
        			   , "Comp::Comp_Div_Popup_Sub.xfdl"
        			   , this.getOwnerFrame()
        			   , objParam
        			   , sOpenStyle
        			   , nLeftv
        			   , nTopv
        			   , this.widthValue
        			   , this.heightValue
        			   , this);
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Comp_Div_Popup_onload,this);
            this.Div00.form.chkAutosize.addEventHandler("canchange",this.Div00_chkAutosize_canchange,this);
            this.Div00.form.btnCallPopup.addEventHandler("onclick",this.Div00_btnCallPopup_onclick,this);
        };
        this.loadIncludeScript("Comp_Div_Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
