(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Left");
            this.set_titletext("Form_Left");
            this.set_locale("aa_DJ");
            this.set_dragscrolltype("horz");
            this.set_scrolltype("both");
            this.set_scrollbartype("none none");
            this.set_background("#f4f4f4");
            if (Form == this.constructor)
            {
                this._setFormPosition(225,673);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("Grid00","0","0",null,"100%","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("gds_menu");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_scrollbartype("none none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"225\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NAME\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:MENU_LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("ButtonSize",null,"311","50","50","-5",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cursor("e-resize");
            obj.set_border("0px none");
            obj.set_background("url(\'imagerc::directions.png\') no-repeat center center");
            obj.set_tooltiptype("default");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",225,673,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Left.xfdl", function() {
        this.application = null;

        /************************************************************************
         * event : 페이지 로드
         ************************************************************************/
        this.Form_Left_onload = function(obj,e)
        {
        	this.application = nexacro.getApplication();

        	// 초기 서브메뉴 셋팅
        	this.fn_setLeftMenu("010000");
        };

        // function : left메뉴 데이터셋 셋팅
        this.fn_setLeftMenu = function(pMENU_ID)
        {
        	// left 메뉴에 적용될 그리드의 dataset 필터링
        	this.application.gds_menu.filter("MENU_ID.substr(0,2)=='" + pMENU_ID.substr(0,2) + "'")

        	// top 메뉴에 선택된 버튼 색 변경
        	this.application.TopFrame.form.fn_setBtnColor(pMENU_ID)
        }

        // function : 메뉴 포커스 변경
        this.fn_setGridFocus = function(pMENU_ID)
        {
        	// left메뉴 데이터 다시 셋팅
        	this.fn_setLeftMenu(pMENU_ID);

        	// left메뉴 포커스 변경
        	var Row = this.application.gds_menu.findRow("MENU_ID", pMENU_ID);
        	this.Grid00.selectRow(Row);
        }

        /************************************************************************
         * event : 좌측 영역 화면의 Grid 컴포넌트 oncellclick(셀 클릭) 이벤트
         ************************************************************************/
        this.Grid00_oncellclick = function(obj,e)
        {
        	var MENU_ID = this.application.gds_menu.getColumn(e.row, "MENU_ID");
        	this.fn_openForm(MENU_ID);
        };

        // function : 폼 오픈
        this.fn_openForm = function(MENU_ID)
        {
        	var objNaviFrame = this.application.NaviFrame;
        	var objWorkFrame = this.application.WorkFrame;

        	// 메뉴 관련 정보
        	var menuDs = this.application.gds_menu;

        	var Row = menuDs.findRow("MENU_ID", MENU_ID);
        	var MENU_NAME  = menuDs.getColumn(Row, "MENU_NAME");
        	var MENU_LEVEL = menuDs.getColumn(Row, "MENU_LEVEL");
        	var FORM_URL  = menuDs.getColumn(Row, "FORM_URL");
        	var UP_MENU_ID = menuDs.getColumn(Row, "UP_MENU_ID");

        	// 메뉴 레벨이 2보다 작은 경우 - 메뉴 트리 경로이다.
        	if(MENU_LEVEL < 2) return;

        	// 선택한 메뉴가 이미 열려있을 경우
        	var arrObj = objWorkFrame.all;
        	for(var i=0; i<arrObj.length; i++)
            {
                if(arrObj[i].name == MENU_ID){
                    arrObj[i].setFocus();
                    return;
                }
            }

        	// 부모 메뉴 관련 정보
        	var upRow = menuDs.findRow("MENU_ID", UP_MENU_ID);
        	var UP_MENU_NAME  = menuDs.getColumn(upRow, "MENU_NAME");
        	var UP_UP_MENU_ID = menuDs.getColumn(upRow, "UP_MENU_ID");

        	var upupRow = menuDs.findRow("MENU_ID", UP_UP_MENU_ID);
        	var UP_UP_MENU_NAME  = menuDs.getColumn(upupRow, "MENU_NAME");

        	// form 추가 (FrameBase::Form_Work 를 열고 Param 전달 - Form_Work에서 전달받은 url을 연다)
        	var oParam = { MENU_ID : MENU_ID,
        				   MENU_NAME : MENU_NAME,
        				   FORM_URL : FORM_URL,
        				   TITLE_TEXT : UP_UP_MENU_NAME + " > " + UP_MENU_NAME + " > " + MENU_NAME
        				   };

        	var objChildFrame = new ChildFrame(MENU_ID, 0, 0, 824, 638);

            objWorkFrame.addChild(objChildFrame.name, objChildFrame);

        	objChildFrame.param = oParam;
            objChildFrame.set_formurl("FrameBase::Form_Work.xfdl");
            objChildFrame.set_resizable(true);
            objChildFrame.set_showtitlebar(false);
            objChildFrame.set_titletext(UP_UP_MENU_NAME + " > " + UP_MENU_NAME + " > " + MENU_NAME);
            objChildFrame.set_openstatus("maximize");
            objChildFrame.show();

        	// tab 추가
        	objNaviFrame.form.fn_AddTabPage(MENU_ID, MENU_NAME);
        	objNaviFrame.form.btnArrangeMax.click();	// max arrange 버튼 클릭이벤트 강제 발생
        }

        /************************************************************************
         * event : 버튼 클릭으로 숨기기/보이기
         ************************************************************************/
        this.ButtonSize_onclick = function(obj,e)
        {
        	if(this.blockButtonClick == 0)	return;

        	var arrSeparateSize = this.application.HFrameSet00.separatesize.split(',');

        	if(arrSeparateSize[0] > 20)
        	{
        		this.application.HFrameSet00.set_separatesize("20,*");
        	}
        	else
        	{
        		this.application.HFrameSet00.set_separatesize("225,*");
        	}
        };

        /************************************************************************
         * event : 버튼 드래그로 left사이즈 조절
         ************************************************************************/
        this.isButtonDrag = false;	// left frame 에서 버튼을 이용해서만 드래그 이벤트가 발생하도록 flag
        this.blockButtonClick;		// 2 : 초기화 / 1 : 드래그없이버튼업 / 0 : 드래그후버튼업

        this.ButtonSize_onlbuttondown = function(obj,e)
        {
        	this.isButtonDrag = true;
        	this.blockButtonClick = 2;
        };
        this.ButtonSize_onlbuttonup = function(obj,e)
        {
        	this.isButtonDrag = false;
        	this.blockButtonClick -= 1;
        };

        this.Form_Left_ondrag = function(obj,e)
        {
        	if(this.isButtonDrag)	return true;
        	else					return false;
        };
        this.Form_Left_ondragmove = function(obj,e)
        {
        	if(e.clientx < 50) return;
        	this.application.HFrameSet00.set_separatesize((e.clientx + 20) + ",*");
        	this.blockButtonClick = 1;
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Left_onload,this);
            this.addEventHandler("ondrag",this.Form_Left_ondrag,this);
            this.addEventHandler("ondragmove",this.Form_Left_ondragmove,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.ButtonSize.addEventHandler("onlbuttondown",this.ButtonSize_onlbuttondown,this);
            this.ButtonSize.addEventHandler("onclick",this.ButtonSize_onclick,this);
            this.ButtonSize.addEventHandler("onlbuttonup",this.ButtonSize_onlbuttonup,this);
        };
        this.loadIncludeScript("Form_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
