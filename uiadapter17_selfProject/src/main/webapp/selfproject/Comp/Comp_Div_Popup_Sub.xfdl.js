(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Div_Popup_Sub");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_param3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","30","60","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Parameter");
            obj.set_font("normal bold 13pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("staParam1","40","94","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Param1");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("staParam2","40","122","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Param2");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("staParam3","40","150","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Param3");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edtParam1","122","94","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("test");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_text("test");
            this.addChild(obj.name, obj);

            obj = new Edit("edtParam2","122","122","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_value("17");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_text("17");
            this.addChild(obj.name, obj);

            obj = new Grid("grdParam3","122","150","420","90",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_param3");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","442","312","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Close");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtResult","122","258","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_Div_Popup_Sub.xfdl", function() {
        this.application = null;
        this.id;
        this.strParam1;
        this.strParam2;
        this.strParam3;

        /************************************************************************
         * event : 페이지 로드
         ************************************************************************/
        this.Comp_Div_Popup_Sub_onload = function(obj,e)
        {
        	this.application = nexacro.getApplication();

        	this.id = this.parent.id;

        	this.strParam1 = this.parent.param1;
        	this.strParam2 = this.parent.param2;
        	this.objParam3 = this.parent.param3;

        	this.edtParam1.set_value(this.strParam1);
        	this.edtParam2.set_value(this.strParam2);
        	this.ds_param3.copyData(this.objParam3);
        	this.grdParam3.createFormat();
        };

        /************************************************************************
         * event : 그리드 셀 클릭
         ************************************************************************/
        this.grdParam3_oncellclick = function(obj,e)
        {
        	var nRow = this.grdParam3.getSelectedRows();

        	var sText = "";
        	for(var i=0; i<this.ds_param3.getColCount(); i++)
        	{
        		sText += this.ds_param3.getColumn(nRow, i) + "\t";
        	}

        	this.txtResult.set_value(sText);
        };

        /************************************************************************
         * event : 종료 버튼 클릭
         ************************************************************************/
        this.btnClose_onclick = function(obj,e)
        {
        	// 데이터셋 리턴값
        	this.opener.ds_return3.clearData();
        	var nRow = this.opener.ds_return3.addRow();
        	this.opener.ds_return3.copyRow(nRow, this.ds_param3, this.ds_param3.rowposition);

        	if(this.id == "modelPopup")
        	{
        		// 스트링 리턴값
        		var strReturn = this.edtParam1.value + "," + this.edtParam2.value;
        		this.close(strReturn);
        	}

        	if(this.id == "ModelessPopup")
        	{
        		this.opener.edtReturn1.set_value(this.edtParam1.value);
        		this.opener.edtReturn2.set_value(this.edtParam2.value);
        		this.close();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Comp_Div_Popup_Sub_onload,this);
            this.grdParam3.addEventHandler("oncellclick",this.grdParam3_oncellclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("Comp_Div_Popup_Sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
