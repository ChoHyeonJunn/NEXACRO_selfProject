(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Grid_Personalization");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"checkbox\" type=\"STRING\" size=\"256\"/><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"이름\" type=\"STRING\" size=\"256\"/><Column id=\"주소\" type=\"STRING\" size=\"256\"/><Column id=\"설정금액\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"직장\" type=\"STRING\" size=\"256\"/><Column id=\"승인\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">1</Col><Col id=\"이름\">James</Col><Col id=\"주소\">서울특별시 중구 세종대로 40</Col><Col id=\"설정금액\">11,235</Col><Col id=\"생성일\">2020-08-01</Col><Col id=\"직장\">투비소프트</Col><Col id=\"checkbox\">0</Col><Col id=\"승인\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"ID\">2</Col><Col id=\"이름\">Bill</Col><Col id=\"주소\">경상북도 경부시 불국로 873-243</Col><Col id=\"설정금액\">15,698</Col><Col id=\"생성일\">2020-08-01</Col><Col id=\"직장\">강남구청</Col><Col id=\"checkbox\">0</Col><Col id=\"승인\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"ID\">3</Col><Col id=\"이름\">Elyse</Col><Col id=\"주소\">경기도 수원시 장안구 연무동 190</Col><Col id=\"설정금액\">15,756</Col><Col id=\"생성일\">2020-08-02</Col><Col id=\"직장\">투비소프트</Col><Col id=\"checkbox\">0</Col><Col id=\"승인\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"ID\">4</Col><Col id=\"이름\">Jenny</Col><Col id=\"주소\">경기도 수원시 장안구 연무동 190</Col><Col id=\"설정금액\">15,756</Col><Col id=\"생성일\">2020-08-02</Col><Col id=\"직장\">투비소프트</Col><Col id=\"checkbox\">0</Col><Col id=\"승인\">imagerc::img_grd_reject.png</Col></Row><Row><Col id=\"ID\">5</Col><Col id=\"이름\">William</Col><Col id=\"주소\">서울특별시 중구 태평로1가 31 </Col><Col id=\"설정금액\">23,317</Col><Col id=\"생성일\">2020-08-03</Col><Col id=\"직장\">서울시청</Col><Col id=\"checkbox\">0</Col><Col id=\"승인\">imagerc::img_grd_approval.png</Col></Row><Row><Col id=\"ID\">6</Col><Col id=\"이름\">Daniel</Col><Col id=\"주소\">서울특별시 중구 태평로1가 31 </Col><Col id=\"설정금액\">15,756</Col><Col id=\"생성일\">2020-08-03</Col><Col id=\"직장\">투비소프트</Col><Col id=\"checkbox\">0</Col><Col id=\"승인\">imagerc::img_grd_reject.png</Col></Row><Row><Col id=\"ID\">7</Col><Col id=\"이름\">Ann</Col><Col id=\"주소\">서울특별시 중구 태평로1가 31 </Col><Col id=\"설정금액\">23,317</Col><Col id=\"생성일\">2020-08-04</Col><Col id=\"직장\">서울시청</Col><Col id=\"checkbox\">0</Col><Col id=\"승인\">imagerc::img_grd_approval.png</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_contextmenu", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">hideColumn</Col><Col id=\"level\">0</Col><Col id=\"caption\">Hide Column</Col><Col id=\"enable\">true</Col></Row><Row><Col id=\"id\">showColumn</Col><Col id=\"level\">0</Col><Col id=\"caption\">Show Column</Col><Col id=\"enable\">false</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","75","120",null,null,"75","80",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_grid");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("both");
            obj.set_extendsizetype("row");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"46\"/><Column size=\"50\"/><Column size=\"140\"/><Column size=\"230\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"60\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"46\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"#\"/><Cell col=\"2\" text=\"Name\" messageid=\"name\"/><Cell col=\"3\" text=\"Address\" messageid=\"address\"/><Cell col=\"4\" text=\"Amount\"/><Cell col=\"5\" text=\"Date\"/><Cell col=\"6\" text=\"Company\" messageid=\"company\"/><Cell col=\"7\" text=\"OK\"/></Band><Band id=\"body\"><Cell text=\"bind:checkbox\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ID\"/><Cell col=\"2\" text=\"bind:이름\"/><Cell col=\"3\" text=\"bind:주소\"/><Cell col=\"4\" text=\"bind:설정금액\" cssclass=\"grd_txtR\"/><Cell col=\"5\" text=\"bind:생성일\"/><Cell col=\"6\" text=\"bind:직장\"/><Cell col=\"7\" text=\"bind:승인\" displaytype=\"imagecontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"Grid00:10","120","40","75",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Save");
            obj.set_cssclass("btn_WF_basic01");
            obj.getSetter("messageid").set("grid.personalization.save");
            this.addChild(obj.name, obj);

            obj = new Button("btnInit",null,"Grid00:10","120","40","205",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Set Default");
            obj.set_cssclass("btn_WF_basic02");
            obj.getSetter("messageid").set("grid.personalization.default");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenu00","436","10","129","50",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_contextmenu");
            obj.set_captioncolumn("caption");
            obj.set_idcolumn("id");
            obj.set_levelcolumn("level");
            obj.set_enablecolumn("enable");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","33","26","1214","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Grid - Personalization");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","35","60","1214","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("넥사크로플랫폼의 그리드에서 제공하는 API와 HTML5에서 제공하는 Local Storage 기능을 이용하여 개인화 기능을 사용할 수 있습니다.");
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
        this.registerScript("Comp_Grid_Personalization.xfdl", function() {
        /************************************************************************
         * Grid 개인화
         *
         *	셀 이동
         *		그리드 cellmovingtype 속성 설정하여 마우스 드래그 드롭으로 컬럼 위치 변경
         *
         *	셀 크기 변경
         *		그리드 cellsizingtype 속성으로 셀 크기 변경
         *
         *	컬럼 숨기기
         *		직접 기능 구현됨
         ************************************************************************/
        /************************************************************************
         * nexacro.getPrivateProfile : 웹브라우저 환경일 경우 브라우저의 Local Storage 영역에 개인화 데이터를 저장합니다.
         ************************************************************************/


        /************************************************************************
         * event : 페이지 온로드
         ************************************************************************/
        this.Comp_Grid_Personalization_onload = function(obj,e)
        {
        	this.fv_originFormats = this.Grid00.getFormatString(); //디자인 시 정의된 전체 포맷을 XML 형식의 문자열로 반환하는 메소드입니다
        	this.fv_originRowSizeList = this.Grid00._rowSizeList.slice(); //로우s 의 사이즈들을 list 로 반환

        	var grid_format = nexacro.getPrivateProfile("grid.personalization.format"),
        	grid_rowsize = nexacro.getPrivateProfile("grid.personalization.rowsize"),
        	grid_hidingInfo = nexacro.getPrivateProfile("grid.personalization.hidinginfo");

        	if (grid_format) {
        		this.Grid00.set_formats(grid_format);
        	}

        	if (grid_rowsize) {
        		var rowSize = grid_rowsize.split(",");
        		for (var i=0,len=rowSize.length; i<len; i++) {
        			this.Grid00.setRealRowSize(i, Number(rowSize[i]));
        		}
        	}

        	if (grid_hidingInfo) {
        		this.Grid00.setHidingInfos(grid_hidingInfo);
        	}
        };

        /************************************************************************
         * event : 그리드 우클릭
         ************************************************************************/
        this.Grid00_onrbuttondown = function(obj,e)
        {
        	// head band
        	if (e.row == -1 && e.cell > -1) {
        		var ds = this.ds_contextmenu;

        		for (var i = ds.rowcount - 1; i > -1; i--) {
        			if (ds.getColumn(i, "level") == 1) {
        				ds.deleteRow(i);
        			}
        		}

        		var hide = "false", show = "false",
        			hidingInfos = obj._hidingInfos,
        			hideColumnRowIndex = ds.findRow("id", "hideColumn"),
        			showColumnRowIndex = ds.findRow("id", "showColumn");

        		if (hidingInfos.length > 0) {
        			show = "true";

        			// 숨긴 칼럼 정보 재구성
        			var rowPos = ds.findRow("id", "showColumn");
        			rowPos = ds.insertRow(rowPos + 1);
        			ds.setColumn(rowPos, "id", "showColumn_all");
        			ds.setColumn(rowPos, "level", "1");
        			ds.setColumn(rowPos, "caption", "Show All Column");
        			ds.setColumn(rowPos, "enable", "true");

        			for (var i = 0, len = hidingInfos.length; i < len; i++) {
        				rowPos = ds.insertRow(rowPos + 1);
        				ds.setColumn(rowPos, "id", "showColumn_" + i);
        				ds.setColumn(rowPos, "level", "1");
        				ds.setColumn(rowPos, "caption", hidingInfos[i].text);
        				ds.setColumn(rowPos, "enable", "true");
        			}
        		}

        		if (e.cell > -1 && obj.getBodyCellIndex(e.cell) > -1) {
        			hide = "true";
        		} else {
        			hide = "false";
        		}

        		ds.setColumn(hideColumnRowIndex, "enable", hide);
        		ds.setColumn(showColumnRowIndex, "enable", show);

        		var x = e.clientx, y = e.clienty, pmnu = this.PopupMenu00;

        		// 대상 그리드와 셀 정보를 추가
        		pmnu.grid = obj;
        		pmnu.healColIndex = e.col;
        		pmnu.headCellIndex = e.cell;
        		pmnu.trackPopupByComponent(obj, x, y);
        	}
        };

        /************************************************************************
         * event : 그리드 우클릭시 나타나는 팝업메뉴 클릭
         ************************************************************************/
        this.PopupMenu00_onmenuclick = function(obj,e)
        {
        	var col = obj.healColIndex,
        		cell = obj.headCellIndex,
        		grid = obj.grid;

        	switch(e.id) {
        	case "hideColumn":
        		this.Grid00.hideGridColumn(col, cell);
        		break;
        	default:
        		if (e.id.substr(0, 11) == "showColumn_") {
        			// 칼럼 숨기기 취소
        			var showIndex = e.id.substr(11);
        			if (showIndex == "all") {
        				this.Grid00.showGridColumnAll();
        			} else {
        				showIndex = parseInt(showIndex);
        				this.Grid00.showGridColumnByIndex([showIndex]);
        			}
        		}
        	}
        };



        this.btnInit_onclick = function(obj,e)
        {
        	this.Grid00.set_enableredraw(false);	// 이벤트 막기

        	// 온로드 시 저장한 오리지날 포맷으로 변경
        	this.Grid00.set_formats(this.fv_originFormats);
        	// 온로드 시 저장한 오리지날 사이즈리스트로 변경
        	for (var i=0,len=this.fv_originRowSizeList.length; i<len; i++) {
        		this.Grid00.setRealRowSize(i, Number(this.fv_originRowSizeList[i]));
        	}
        	this.Grid00.set_enableredraw(true);		// 이벤트 허용

        	nexacro.setPrivateProfile("grid.personalization.format", "");
        	nexacro.setPrivateProfile("grid.personalization.rowsize", "");
        	nexacro.setPrivateProfile("grid.personalization.hidinginfo", "");
        	alert("Initialized.");
        };

        this.btnSave_onclick = function(obj,e)
        {
        	var formatString = this.Grid00.getCurFormatString(),
        		rowSizeList = this.Grid00._rowSizeList.toString(),
        		hidingInfos = this.Grid00.getHidingInfos();

        	nexacro.setPrivateProfile("grid.personalization.format", formatString);
        	nexacro.setPrivateProfile("grid.personalization.rowsize", rowSizeList);
        	nexacro.setPrivateProfile("grid.personalization.hidinginfo", hidingInfos);
        	alert("Changes saved.");
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Comp_Grid_Personalization_onload,this);
            this.Grid00.addEventHandler("onrbuttondown",this.Grid00_onrbuttondown,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnInit.addEventHandler("onclick",this.btnInit_onclick,this);
            this.PopupMenu00.addEventHandler("onmenuclick",this.PopupMenu00_onmenuclick,this);
        };
        this.loadIncludeScript("Comp_Grid_Personalization.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
