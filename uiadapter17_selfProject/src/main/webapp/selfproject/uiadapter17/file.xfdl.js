(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("file");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFileList", this);
            obj._setContents("<ColumnInfo><Column id=\"fileName\" type=\"STRING\" size=\"256\"/><Column id=\"fileSize\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUploadedFileList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"realFileName\" type=\"STRING\" size=\"256\"/><Column id=\"displayFileName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDownFileList", this);
            obj._setContents("<ColumnInfo><Column id=\"realFileName\" type=\"STRING\" size=\"256\"/><Column id=\"displayFileName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","75","120","35%","210",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsFileList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"fileName\"/><Cell col=\"1\" text=\"fileSize (byte)\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:fileName\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:fileSize\" textAlign=\"right\"/><Cell col=\"2\" expandimage=\"url('theme://images/btn_TF_Close_O.png')\" expandshow=\"show\" expandsize=\"25\" cursor=\"pointer\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","Grid00:1%","120","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("파일추가");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","Grid00:1%","180","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","75","341","35.00%",null,null,"20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","TextArea00:1%","341","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("Button03",null,"120","120","50","75",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("파일 다운로드");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","51%","120","35%","210",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsUploadedFileList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"271\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"chk\"/><Cell col=\"1\" text=\"Donwload FileName\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:displayFileName\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","33","26","1214","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("uiadapter17 - File Upload/Download");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","35","60","1214","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Nexacro 17 의 오브젝트 중의 하나인 FileUpTransfer / FileDownTransfer 를 사용해 선택한 파일을 서버로 전송하여 저장 / 서버의 파일을 다운로드 할 수 있습니다.");
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
        this.registerScript("file.xfdl", function() {
        this.application = null;
        this.sUpFileUrl = "svc::uploadFiles.do"	// 파일 전송 URL
        this.sDownFileUrl = "svc::downloadFile.do"	// 파일 다운로드 URL
        this.nMaxFileSize = 2000000;	// 각 파일 최대사이즈 (2 Mbyte)

        /************************************************************************
         * event : 온로드
         ************************************************************************/
        this.file_onload = function(obj,e)
        {
        	this.application = nexacro.getApplication();

        	/*
        	*	파일 업로드 관련
        	*/
        	// 파일 업로드시 파일저장 폴더경로 PostData 셋팅
        	this.FileUpTransfer00.setPostData("filepath","sample");
        	// 파일업로드 전송 URL 셋팅
        	this.FileUpTransfer00.set_url(this.sUpFileUrl);

        	/*
        	*	파일 다운로드 관련
        	*/
        	//파일다운로드시 파일다운 폴더경로 PostData 셋팅
        	this.FileDownTransfer00.setPostData("filepath","sample");
        	//파일업로드 전송 URL 셋팅
        	this.FileDownTransfer00.set_url(this.sDownFileUrl);
        };

        /************************************************************************
         * event : 파일추가 클릭
         ************************************************************************/
        this.Button00_onclick = function(obj,e)
        {
        	this.FileDialog00.open("파일선택", FileDialog.LOAD);
        };

        /************************************************************************
         * event : 파일 선택창 (FileDialog) 닫힐시
         ************************************************************************/
        this.FileDialog00_onclose = function(obj,e)
        {
        	if(e.reason == 0 ) {  //파일선택 취소
        		return;
        	}else{
        		if(e.reason == 1) {    //FileDialog.LOAD 옵션의 파일선택
        			var vFile = e.virtualfiles[0];
        			var isExist = this.FileUpTransfer00.existFile(vFile);

        			//파일중복체크
        			if(isExist){
        				alert("이미추가된 파일이 있습니다.");
        				return;
        			}

        			//VirtualFile 이벤트 생성
        			vFile.addEventHandler("onsuccess", this.Upload_VirtualFile_onsuccess, this);
        			vFile.addEventHandler("onerror", this.Upload_VirtualFile_onerror, this);

        			//File 사이즈 체크를 위해
        			vFile.open(null,VirtualFile.openRead);
        		}
        	}
        };

        // function : 업로드용 Virtual 파일 onsuccess 이벤트
        this.Upload_VirtualFile_onsuccess = function(obj, e)
        {
        	if (e.reason == 1)  //open() callback
        	{
        		//파일사이즈 체크
        		obj.getFileSize();
        	}
        	if (e.reason == 9) //getFileSize() callback
        	{
        		obj.close();

        		var sFileName = obj.filename;
        		var nFileSize = e.filesize;

        		if(nFileSize > this.nMaxFileSize){
        			alert("첨부파일 최대용량은 2 MByte 입니다.");
        			return;
        		}

        		//FileUpTransfer 해당 파일추가
        		var nIdx = this.FileUpTransfer00.addFile(sFileName,obj);

        		//화면 파일정보 셋팅
        		var nRow = this.dsFileList.insertRow(nIdx);
        		this.dsFileList.setColumn(nRow, "fileName", sFileName);
        		this.dsFileList.setColumn(nRow, "fileSize", nFileSize);
        	}
        }

        // function : 업로드용 Virtual 파일 onerror 이벤트
        this.Upload_VirtualFile_onerror = function(obj, e)
        {
        	var msg = ">>>>>>>>> VirtualFile event ERROR >>>>>>>>\n";
        	msg += "errortype : "+e.errortype+"\n";
        	msg += "errormsg : "+e.errormsg+"\n";
        	msg += "statuscode : "+e.statuscode;

        	alert(msg);
        }

        /************************************************************************
         * event : 그리드 삭제이미지 클릭시
         ************************************************************************/
        this.Grid00_onexpandup = function(obj,e)
        {
        	var nRow = e.row;

        	//FileUpTransfer 해당 파일삭제
        	var nIdx = this.FileUpTransfer00.removeFileByIndex(nRow);

        	//정상삭제 시 해당 데이터 삭제
        	if(nIdx > -1) {
        		obj.getBindDataset().deleteRow(nRow);
        	}
        };

        /************************************************************************
         * event : 초기화 클릭
         ************************************************************************/
        this.Button01_onclick = function(obj,e)
        {
        	//파일정보 초기화
        	this.fn_FileClear();
        };

        /************************************************************************
        * event : 파일전송 성공
        ************************************************************************/
        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	var msg = ">>>>>>>>>>>>>>>>>>>>>>>>>>  SUCCESS >>>>>>>>>>>>>>>>>>>>>>>>>>\n";
        	msg += "code :"+e.code+"\n";
        	msg += "message :"+e.message+"\n";
        	msg += "url :"+e.url+"\n";
        	msg += "datasets[0].saveXML() :"+e.datasets[0].saveXML()+"\n";

        	this.TextArea00.set_value(msg);

        	// dsUploadedFileList 에 업로드 성공한 ds 목록 추가
        	this.fn_InsertUploadedFileList();
        	// 파일정보 초기화
        	this.fn_FileClear();
        };
        /************************************************************************
        * event : 파일전송 중
        ************************************************************************/
        this.FileUpTransfer00_onprogress = function(obj,e)
        {
        	trace(e.loaded +" / "+e.total +" Byte Uploading...");
        };
        /************************************************************************
        * event : 파일전송 실패
        ************************************************************************/
        this.FileUpTransfer00_onerror = function(obj,e)
        {
        	var msg = ">>>>>>>>>>>>>>>>>>>>>>>>>>  ERROR >>>>>>>>>>>>>>>>>>>>>>>>>>\n";
        	msg += "statuscode: "+e.statuscode+"\n";
        	msg += "requesturi: "+e.requesturi+"\n";
        	msg += "locationuri: "+e.locationuri+"\n" ;
        	msg += "errormsg: "+e.errormsg+"\n";

        	this.TextArea00.set_value(msg);
        };

        /************************************************************************
         * event : 저장 클릭
         ************************************************************************/
        this.Button02_onclick = function(obj,e)
        {
        	if(this.FileUpTransfer00.filelist.length == 0) {
        		alert("첨부한 파일이 없습니다.");
        		return;
        	}

        	//파일전송
        	this.FileUpTransfer00.upload();
        };

        // function : dsUploadedFileList 에 업로드 성공한 ds 목록 추가
        this.fn_InsertUploadedFileList = function()
        {
        	//화면 파일정보 셋팅
        	var nRow = this.dsFileList.getRowCount();

        	for(var i=0; i<nRow; i++)
        	{
        		var sFileName = this.dsFileList.getColumn(i, "fileName");
        		var sFileSize = this.dsFileList.getColumn(i, "fileSize");

        		var nAddedRow = this.dsUploadedFileList.addRow();
        		this.dsUploadedFileList.setColumn(nAddedRow, "chk", 0);
        		this.dsUploadedFileList.setColumn(nAddedRow, "realFileName", sFileName);
        		this.dsUploadedFileList.setColumn(nAddedRow, "displayFileName", "파일"+sFileName);
        	}
        }

        // function : 파일정보 초기화
        this.fn_FileClear = function (){
        	//FileUpTransfer 파일 모두삭제
        	this.FileUpTransfer00.clearFileList();

        	//파일정보 모두삭제
        	this.dsFileList.clearData();
        }





        /************************************************************************
         * event : 파일 다운로드 버튼클릭
         ************************************************************************/
        this.Button03_onclick = function(obj,e)
        {
        	var objDs = this.dsUploadedFileList;
        	var nCnt = objDs.getRowCount();

        	this.dsDownFileList.clearData();

        	for(var i=0;i<nCnt;i++){
        		var nChk = objDs.getColumn(i,"chk");

        		if(nChk==1) {
        			var nRow = this.dsDownFileList.addRow();

        			this.dsDownFileList.setColumn(nRow, "realFileName", objDs.getColumn(i,"realFileName"));
        			this.dsDownFileList.setColumn(nRow, "displayFileName", objDs.getColumn(i,"displayFileName"));
        		}
        	}

        	if(this.dsDownFileList.getRowCount() == 0) {
        		alert("다운로드 할 파일을 선택하세요.");
        		return;
        	}

        	/*
        		서버로 전송할 파일정보를 셋팅

        		[추천] String 에 여러파일명 정보 넘겨 서버에서 잘라서 처리
        		setPostData("file_realFilenames","1.xlsx,111.xlsx,Hydrangeas.jpg")
        		setPostData("file_displayFilenames","파일1.xlsx,파일111.xlsx,파일Hydrangeas.jpg")

        		[비추천] 데이터셋을 넘기지 못해 XML 스트링으로 넘겨 서버에서 Dataset으로 변경
        		몇가지 문자만 변환해서 해보니 동작하여 작성해 봅니다 (공식방법 아닙니다)
        	*/
        	this.FileDownTransfer00.setPostData("fileInfo",this.dsDownFileList.saveXML());

        	// NRE 를 위한 다운로드 Default 파일명
        	if(this.dsDownFileList.getRowCount() > 1) {
        		// 파일여러개 선택시 zip 파일로 압축하여 다운로드
        		this.FileDownTransfer00.set_downloadfilename("첨부파일.zip");
        	}else{
        		// 파일이 1개일 경우 해당 파일명으로 다운로드
        		this.FileDownTransfer00.set_downloadfilename(this.dsDownFileList.getColumn(0, "displayFileName"));
        	}

        	// 파일다운로드 실행
        	this.FileDownTransfer00.download();
        };

        /************************************************************************
         * event : 파일다운로드 성공시 (NRE 에서만 지원)
         ************************************************************************/
        this.FileDownTransfer00_onsuccess = function(obj,e)
        {
        	var sMsg = e.targetfullpath +"\n"+  e.url;
        	this.alert(sMsg);
        };

        /************************************************************************
        * event : 파일다운로드 실패시 (NRE 에서만 지원)
        ************************************************************************/
        this.FileDownTransfer00_onerror = function(obj,e)
        {
        	var sMsg = ">>>>>>>>>>>>>>>>>>>>>>>>>>  ERROR >>>>>>>>>>>>>>>>>>>>>>>>>>\n";
        	sMsg += "statuscode: "+e.statuscode+"\n";
        	sMsg += "requesturi: "+e.requesturi+"\n";
        	sMsg += "locationuri: "+e.locationuri+"\n" ;
        	sMsg += "errormsg: "+e.errormsg+"\n";

        	this.alert(sMsg);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.file_onload,this);
            this.Grid00.addEventHandler("onexpandup",this.Grid00_onexpandup,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
            this.FileDownTransfer00.addEventHandler("onsuccess",this.FileDownTransfer00_onsuccess,this);
            this.FileDownTransfer00.addEventHandler("onerror",this.FileDownTransfer00_onerror,this);
        };
        this.loadIncludeScript("file.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
