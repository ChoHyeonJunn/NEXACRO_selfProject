(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("crud");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"searchType\" type=\"STRING\" size=\"256\"/><Column id=\"keyword\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Combo("Combo00","75","120","112","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">ID</Col><Col id=\"datacolumn\">id</Col></Row><Row><Col id=\"codecolumn\">NAME</Col><Col id=\"datacolumn\">name</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("id");
            obj.set_value("ID");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","190","120","230","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button05",null,"120","70","30","75",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Import");
            this.addChild(obj.name, obj);

            obj = new Button("Button04",null,"120","70","30","Button05:5",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Export");
            this.addChild(obj.name, obj);

            obj = new Button("Button03",null,"120","70","30","Button04:5",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("Button02",null,"120","70","30","Button03:5",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"120","70","30","Button02:5",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"120","70","30","Button01:5",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","75","160",null,null,"75","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"2\" text=\"DESCRIPTION\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"3\" text=\"USE_YN\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"4\" text=\"REG_USER\" displaytype=\"editcontrol\" edittype=\"normal\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:NAME\" edittype=\"normal\" displaytype=\"editcontrol\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\" edittype=\"normal\" displaytype=\"editcontrol\"/><Cell col=\"3\" text=\"bind:USE_YN\" edittype=\"normal\" displaytype=\"editcontrol\"/><Cell col=\"4\" text=\"bind:REG_USER\" edittype=\"normal\" displaytype=\"editcontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","33","26","1214","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("uiadapter17 - CRUD");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","35","60","1214","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("uiadapter17은 SpringFramework 기반으로 구성된 개발환경에서 넥사크로플랫폼의 입/출력 데이터를 변환 해주는 기능을 지원하는 모듈입니다.");
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
        this.registerScript("crud.xfdl", function() {

        /************************************************************************
         * event : 조회 버튼 클릭
         ************************************************************************/
        this.Button00_onclick = function(obj,e)
        {
        	this.fnSearch();
        };

        /************************************************************************
         * event : 추가 버튼 클릭
         ************************************************************************/
        this.Button01_onclick = function(obj,e)
        {
        	var nRow = this.ds_list.addRow();
        	this.ds_list.set_rowposition(nRow);
        	this.Grid00.setCellPos(1);
        	this.Grid00.showEditor(true);
        };

        /************************************************************************
         * event : 삭제 버튼 클릭
         ************************************************************************/
        this.Button02_onclick = function(obj,e)
        {
        	var nRow = this.ds_list.rowposition;
        	this.ds_list.deleteRow(nRow);
        };

        /************************************************************************
         * event : 저장 버튼 클릭
         ************************************************************************/
        this.Button03_onclick = function(obj,e)
        {
        	this.fnSave();
        };

        // function : 데이터 조회 트랜잭션
        this.fnSearch = function ()
        {
        	// 조회조건 셋팅
        	this.ds_search.setColumn(0, "searchType", this.Combo00.value);
        	this.ds_search.setColumn(0, "keyword"  , this.Edit00.text);

        	var strSvcId    = "search";
        	var strSvcUrl   = "svc::selectSampleList.do";
        	var inData      = "input1=ds_search";
        	var outData     = "ds_list=output1";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId ,     // transaction을 구분하기 위한 svc id값
        		strSvcUrl ,   	// transaction을 요청할 주소
        		inData ,     	// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        		outData ,     	// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        		strArg ,     	// 입력값으로 보낼 arguments, a=b
        		callBackFnc ,   // transaction의 결과를 받을 Function 이름
        		isAsync);     	// 비동기통신 여부 [생략가능]
        };

        // function : 데이터 저장 트랜잭션
        this.fnSave = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "svc::updateSampleList.do";
        	var inData      = "input1=ds_list:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId ,     // transaction을 구분하기 위한 svc id값
        		strSvcUrl ,   	// trabsaction을 요청할 주소
        		inData ,     	// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        		outData ,     	// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        		strArg ,     	// 입력값으로 보낼 arguments, a=b
        		callBackFnc ,   // transaction의 결과를 받을 Function 이름
        		isAsync);     	// 비동기통신 여부 [생략가능]
        };

        // function : 처리콜백 함수
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		this.alert(errorCode+"\n"+errorMsg);
        		return;
        	}

        	switch(svcID)
        	{
        		case "search":
        			if(this.ds_list.rowcount < 1){
        				this.alert("조회된 결과가 없습니다.");
        			}
        			break;

        		case "save":
        			this.alert("저장 되었습니다");
        			this.fnSearch();

        			break;
        	}

        };



        /************************************************************************ Xeni Excel 관련 ************************************************************************/

        // 서버 Xeni Excel 관련 Servlet Mapping 주소
        this.url = "svc::XExportImport.do";
        /*this.url = "http://localhost:8282/sampleuiadapter17/XExportImport.do";*/
        /*this.url = "xeni::XExportImport.do";*/
        // Export에 사용할 ExcelExportObject 변수생성
        this.objExcelExport = null;
        //Import에 사용할 ExcelImportObject 변수생성
        this.objExcelImport = null;

        /************************************************************************
         * event : 화면 로드
         ************************************************************************/
        this.Form_Work_onload = function(obj,e)
        {
        	/*
        	 *	xeni export 관련
        	 */
        	// 폼 로딩 후 ExcelExportObject 생성
        	this.objExcelExport = new nexacro.ExcelExportObject("ExcelExportObject00", this);

        	// 생성한 오브젝트에 이벤트 추가
        	this.objExcelExport.addEventHandler("onprogress", this.ExcelExportObject00_onprogress, this);
        	this.objExcelExport.addEventHandler("onsuccess", this.ExcelExportObject00_onsuccess, this);
        	this.objExcelExport.addEventHandler("onerror", this.ExcelExportObject00_onerror, this);

        	// ExcelExportObject 의 대상 Grid 및 속성 설정
        	/*this.objExcelExport.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid00, "Sheet1!A1","allband","allrecord", "merge", "allstyle", "none", "none", "width");*/
        	this.objExcelExport.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid00, "Sheet1!A1");
        	this.objExcelExport.set_exportmessageprocess("%d [ %d / %d ]");
        	this.objExcelExport.set_exportuitype("exportprogress");
        	this.objExcelExport.set_exporteventtype("itemrecord");
        	this.objExcelExport.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	this.objExcelExport.set_exporturl(this.url);

        	this.addChild("ExcelExportObject00", this.objExcelExport);

        	/*
        	 *	xeni import 관련
        	 */
        	this.objExcelImport = new nexacro.ExcelImportObject("ExcelImportObject00",this);
        	//생성한 오브젝트에 이벤트추가
        	this.objExcelImport.addEventHandler("onsuccess" ,this.ExcelImportObject00_onsuccess ,this);
        	this.objExcelImport.addEventHandler("onerror"   ,this.ExcelImportObject00_onerror   ,this);

        	this.objExcelImport.set_importtype(nexacro.ImportTypes.EXCEL2007);
        	this.objExcelImport.set_importurl(this.url);

        	this.addChild("ExcelImportObject00", this.objExcelImport);
        };

        /************************************************************************
         * event : Export 버튼 클릭
         ************************************************************************/
        this.Button04_onclick = function(obj,e)
        {
        	// ExcelExport 실행
        	this.objExcelExport.set_exportfilename("ExcelExport_Sample");
        	this.objExcelExport.exportData();
        	/*this.objExcelExport.exportData(["", "input1=ds_list", 0, true]);*/
        };

        // function : ExcelExportObject00 객체의 이벤트 onprogress
        this.ExcelExportObject00_onprogress = function(obj, e)
        {
        	var str = "";

        	str += "\n=========== onprogress event start================";
        	str += "\ne.eventid  :"+e.eventid;
        	str += "\ne.id :"+e.id;
        	str += "\ne.fromobject :"+e.fromobject;
        	str += "\ne.fromreferenceobject  :"+e.fromreferenceobject;
        	str += "\ne.itemindex :"+e.itemindex;
        	str += "\ne.itemtype :"+e.itemtype;
        	str += "\ne.recordindex :"+e.recordindex;

        	trace(str);
        }

        // function : ExcelExportObject00 객체의 이벤트 onsuccess
        this.ExcelExportObject00_onsuccess = function(obj, e)
        {
        	var str = "";

        	str += "\n=========== onsuccess event start=================";
        	str += "\ne.eventid : " + e.eventid;
        	str += "\ne.url: " +  e.url;
        	str += "\ne.id :"+e.id;
        	str += "\ne.fromobject :"+e.fromobject;
        	str += "\ne.fromreferenceobject  :"+e.fromreferenceobject;

        	trace(str);
        }

        // function : ExcelExportObject00 객체의 이벤트 onerror
        this.ExcelExportObject00_onerror = function(obj, e)
        {
        	var str = "";

        	str += "\n=========== onerror event start===================";
        	str += "\ne.eventid :"+e.eventid;
        	str += "\ne.id :"+e.id;
        	str += "\ne.fromobject :"+e.fromobject;
        	str += "\ne.fromreferenceobject :"+e.fromreferenceobject;
        	str += "\ne.errorcode :"+e.errorcode;
        	str += "\ne.errormsg :"+e.errormsg;

        	trace(str);
        }

        /************************************************************************
         * event : import 버튼 클릭
         ************************************************************************/
        this.Button05_onclick = function(obj,e)
        {
        	var sParam = "[command=getsheetdata;output=outDs;head=sheet1!A1:E1;body=sheet1!A2]";
        	var sParam2 = "[ds_list=outDs]";

        	this.objExcelImport.importData("", sParam, sParam2);
        };

        //Import 성공시
        this.ExcelImportObject00_onsuccess = function(obj, e)
        {
          trace(e.url);
          trace(this.ds_list.saveXML());
        };

        //Import 에러시
        this.ExcelImportObject00_onerror = function(obj, e)
        {
            alert("업로드 실패");
            trace("=========== onerror event start============");
            trace("e.eventid:    "          + e.eventid);
            trace("e.fromobject: "          + e.fromobject);
            trace("e.fromreferenceobject: " + e.fromreferenceobject);
            trace("e.errorcode: "           + e.errorcode);
            trace("e.errormsg: "            + e.errormsg);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("crud.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
