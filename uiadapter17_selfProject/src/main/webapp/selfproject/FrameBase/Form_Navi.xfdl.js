(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Navi");
            this.set_titletext("New Form");
            this.set_background("#f4f4f4");
            this.set_scrollbartype("none none");
            if (Form == this.constructor)
            {
                this._setFormPosition(824,35);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("Tab00","20","10",null,"100","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_showextrabutton("true");
            obj.set_accessibilityrole("tabpage");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Tabpage2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"7","24","20","14",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("url(\'imagerc::arrange/btn_MDI_screenClose_N.png\') no-repeat center center transparent");
            obj.set_border("0px none");
            obj.set_cursor("pointer");
            obj.set_enableevent("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnArrangeVertical",null,"7","24","20","43",null,null,null,null,null,this);
            obj.set_initvalueid("vertical");
            obj.set_taborder("2");
            obj.set_background("url(\'imagerc::arrange/btn_MDI_screenV_N.png\') no-repeat center center transparent");
            obj.set_border("0px none");
            obj.set_cursor("pointer");
            obj.set_enableevent("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnArrangeHorizontal",null,"7","24","20","72",null,null,null,null,null,this);
            obj.set_initvalueid("horizontal");
            obj.set_taborder("3");
            obj.set_background("url(\'imagerc::arrange/btn_MDI_screenH_N.png\') no-repeat center center transparent");
            obj.set_border("0px none");
            obj.set_cursor("pointer");
            obj.set_enableevent("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnArrangeCascade",null,"7","24","20","101",null,null,null,null,null,this);
            obj.set_initvalueid("cascade");
            obj.set_taborder("4");
            obj.set_background("url(\'imagerc::arrange/btn_MDI_screenPop_N.png\') no-repeat center center transparent");
            obj.set_border("0px none");
            obj.set_cursor("pointer");
            obj.set_enableevent("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnArrangeMax",null,"7","24","20","130",null,null,null,null,null,this);
            obj.set_initvalueid("max");
            obj.set_taborder("5");
            obj.set_background("url(\'imagerc::arrange/btn_MDI_screenMax_N.png\') no-repeat center center transparent");
            obj.set_border("0px none");
            obj.set_cursor("pointer");
            obj.set_enableevent("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",824,35,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Navi.xfdl", function() {
        this.application = null;

        /************************************************************************
         * event : 페이지 로드
         ************************************************************************/
        this.Form_Navi_onload = function(obj,e)
        {
        	this.application = nexacro.getApplication();
        	this.Tab00.removeTabpage(0);
        	this.fn_visibleArrangeBtn();
        };

        /************************************************************************
         * event : 탭 페이지 변경 이벤트
         ************************************************************************/
        this.Tab00_onchanged = function(obj,e)
        {
        	var MENU_ID = obj.tabpages[e.postindex].name;
        	this.application.WorkFrame[MENU_ID].form.setFocus();

        	// leftFrame 에 있는 그리드 메뉴 포커스 변경
        	this.application.LeftFrame.form.fn_setGridFocus(MENU_ID);

        	// topFrame 에 있는 버튼 색 변경
        	var menuDs = this.application.gds_menu;
        	var Row = menuDs.findRow("MENU_ID", MENU_ID);
        	var UP_MENU_ID = menuDs.getColumn(Row, "UP_MENU_ID");
        	var upRow = menuDs.findRow("MENU_ID", UP_MENU_ID);
        	var UP_UP_MENU_ID = menuDs.getColumn(upRow, "UP_MENU_ID");

        	this.application.TopFrame.form.fn_setBtnColor(UP_UP_MENU_ID);
        };

        /************************************************************************
         * event : 엑스트라버튼(삭제) 클릭 이벤트
         ************************************************************************/
        this.Tab00_onextrabuttonclick = function(obj,e)
        {
        	var MENU_ID = obj.tabpages[e.index].name;

        	obj.removeTabpage(e.index);
        	this.application.WorkFrame[MENU_ID].form.close();
        	this.fn_visibleArrangeBtn();
        };

        /************************************************************************
         * event : 전체삭제 버튼 클릭
         ************************************************************************/
        this.btnClose_onclick = function(obj,e)
        {
        	var arrWorkFrame = this.application.WorkFrame.all;
        	for(var i=arrWorkFrame.length-1; i>=0; i--)
        	{
        		arrWorkFrame[i].form.close();
        		this.Tab00.removeTabpage(i);
        	}
        	this.fn_visibleArrangeBtn();
        	this.application.BottomFrame.form.fn_showNaviText('');
        };

        // function : 탭 추가
        this.fn_AddTabPage = function(MENU_ID, MENU_NAME)
        {
        	this.Tab00.insertTabpage(MENU_ID, -1, "", MENU_NAME);
        	this.fn_visibleArrangeBtn();
        }

        // function : 탭 삭제
        this.fn_DeleteTabpage = function(MENU_ID)
        {
        	var nCnt = this.Tab00.getTabpageCount();
        	for(var i=0; i<nCnt; i++)
        	{
        		if(this.Tab00.tabpages[i].name == MENU_ID)
        		{
        			this.Tab00.removeTabpage(i);
        			return;
        		}
        	}
        	this.fn_visibleArrangeBtn();
        }

        // function : 탭 활성화
        this.fn_ActiveTabPage = function(MENU_ID)
        {
        	var nCnt = this.Tab00.getTabpageCount();
        	for(var i=0; i<nCnt; i++)
        	{
        		if(this.Tab00.tabpages[i].name == MENU_ID)
        		{
        			this.Tab00.set_tabindex(i);

        			return;
        		}
        	}
        }

        // function : 페이지의 갯수가 0이면 arrange 버튼 visible false : true
        this.fn_visibleArrangeBtn = function()
        {
        	var arrWorkFrame = this.application.WorkFrame.all;

        	if(arrWorkFrame.length == 0)
        	{
        		this.btnArrangeMax.set_visible(false);
        		this.btnArrangeCascade.set_visible(false);
        		this.btnArrangeHorizontal.set_visible(false);
        		this.btnArrangeVertical.set_visible(false);
        		this.btnClose.set_visible(false);
        	}
        	else
        	{
        		this.btnArrangeMax.set_visible(true);
        		this.btnArrangeCascade.set_visible(true);
        		this.btnArrangeHorizontal.set_visible(true);
        		this.btnArrangeVertical.set_visible(true);
        		this.btnClose.set_visible(true);
        	}
        }

        /************************************************************************
         * event : arrange 버튼 클릭
         ************************************************************************/
        this.btnArrange_onclick = function(obj,e)
        {
        	var arrWorkFrame = this.application.WorkFrame.all;

        	// initvalueid 속성에 적용해 놓은 arrange 이름을 사용해 arrange 조절
        	if(obj.initvalueid == 'max')
        	{
        		var tabIdx = this.Tab00.tabindex;
        		for(var i=arrWorkFrame.length-1; i>=0; i--)
        		{
        			arrWorkFrame[i].set_showtitlebar(false);
        			arrWorkFrame[i].set_openstatus("maximize");
        			arrWorkFrame[i].set_border('');
        		}
        		this.Tab00.set_tabindex(tabIdx);
        	}
        	else
        	{
        		this.application.WorkFrame.arrange(obj.initvalueid);
        		for(var i=arrWorkFrame.length-1; i>=0; i--)
        		{
        			arrWorkFrame[i].set_showtitlebar(true);
        			arrWorkFrame[i].set_border('1px solid gray');
        		}
        	}

        	// arrange 버튼 이미지 조절
        	if(this.btnArrangeMax.enableevent == false) this.btnArrangeMax.set_enableevent(true);
        	if(this.btnArrangeCascade.enableevent == false) this.btnArrangeCascade.set_enableevent(true);
        	if(this.btnArrangeHorizontal.enableevent == false) this.btnArrangeHorizontal.set_enableevent(true);
        	if(this.btnArrangeVertical.enableevent == false) this.btnArrangeVertical.set_enableevent(true);

        	this.fn_changeArrangeImg(this.btnArrangeMax, 'N');
        	this.fn_changeArrangeImg(this.btnArrangeCascade, 'N');
        	this.fn_changeArrangeImg(this.btnArrangeHorizontal, 'N');
        	this.fn_changeArrangeImg(this.btnArrangeVertical, 'N');

        	this.fn_changeArrangeImg(obj, 'F');
        	obj.set_enableevent(false);
        };

        /************************************************************************
         * event : arrange 버튼 마우스 이벤트
         ************************************************************************/
        this.btnArrange_mouseEvent = function(obj,e)
        {
        	if (e.eventid == 'onmouseenter')
        		this.fn_changeArrangeImg(obj, 'O');
        	else if (e.eventid == 'onmouseleave')
        		this.fn_changeArrangeImg(obj, 'N');
        	else if (e.eventid == 'onlbuttondown')
        		this.fn_changeArrangeImg(obj, 'P');
        	else if (e.eventid == 'onlbuttonup')
        		this.fn_changeArrangeImg(obj, 'O');
        };

        // functoin : arrange 버튼 배경 이미지 변경
        this.fn_changeArrangeImg = function(pObj, pOption)
        {
        	var sBackground = pObj.background;
        	var Idx = sBackground.indexOf('.png');

        	pObj.set_background(sBackground.replaceAt(Idx-1, pOption));
        }

        // function : 특정 인덱스의 문자열 변경
        String.prototype.replaceAt = function(index, character)
        {
            return this.substr(0, index) + character + this.substr(index+character.length);
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Navi_onload,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab00.addEventHandler("onextrabuttonclick",this.Tab00_onextrabuttonclick,this);
            this.btnClose.addEventHandler("onmouseenter",this.btnArrange_mouseEvent,this);
            this.btnClose.addEventHandler("onmouseleave",this.btnArrange_mouseEvent,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnArrangeVertical.addEventHandler("onmouseenter",this.btnArrange_mouseEvent,this);
            this.btnArrangeVertical.addEventHandler("onmouseleave",this.btnArrange_mouseEvent,this);
            this.btnArrangeVertical.addEventHandler("onlbuttondown",this.btnArrange_mouseEvent,this);
            this.btnArrangeVertical.addEventHandler("onlbuttonup",this.btnArrange_mouseEvent,this);
            this.btnArrangeVertical.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.btnArrangeHorizontal.addEventHandler("onmouseenter",this.btnArrange_mouseEvent,this);
            this.btnArrangeHorizontal.addEventHandler("onmouseleave",this.btnArrange_mouseEvent,this);
            this.btnArrangeHorizontal.addEventHandler("onlbuttondown",this.btnArrange_mouseEvent,this);
            this.btnArrangeHorizontal.addEventHandler("onlbuttonup",this.btnArrange_mouseEvent,this);
            this.btnArrangeHorizontal.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.btnArrangeCascade.addEventHandler("onmouseenter",this.btnArrange_mouseEvent,this);
            this.btnArrangeCascade.addEventHandler("onmouseleave",this.btnArrange_mouseEvent,this);
            this.btnArrangeCascade.addEventHandler("onlbuttondown",this.btnArrange_mouseEvent,this);
            this.btnArrangeCascade.addEventHandler("onlbuttonup",this.btnArrange_mouseEvent,this);
            this.btnArrangeCascade.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.btnArrangeMax.addEventHandler("onmouseenter",this.btnArrange_mouseEvent,this);
            this.btnArrangeMax.addEventHandler("onmouseleave",this.btnArrange_mouseEvent,this);
            this.btnArrangeMax.addEventHandler("onlbuttondown",this.btnArrange_mouseEvent,this);
            this.btnArrangeMax.addEventHandler("onlbuttonup",this.btnArrange_mouseEvent,this);
            this.btnArrangeMax.addEventHandler("onclick",this.btnArrange_onclick,this);
        };
        this.loadIncludeScript("Form_Navi.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
