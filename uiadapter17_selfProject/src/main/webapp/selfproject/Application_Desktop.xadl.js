(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
			// global dataobject
		
            // global dataset
            obj = new Dataset("gds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_NAME\">그리드</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_ID\">010000</Col><Col id=\"UP_MENU_ID\">0</Col></Row><Row><Col id=\"MENU_NAME\">uiadapter17</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_ID\">010100</Col><Col id=\"UP_MENU_ID\">010000</Col></Row><Row><Col id=\"MENU_ID\">010103</Col><Col id=\"MENU_NAME\">CRUD</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"UP_MENU_ID\">010100</Col><Col id=\"FORM_URL\">uiadapter17::crud.xfdl</Col></Row><Row><Col id=\"MENU_ID\">010104</Col><Col id=\"MENU_NAME\">내려받기 &amp; 가져오기</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"UP_MENU_ID\">010100</Col><Col id=\"FORM_URL\">uiadapter17::file.xfdl</Col></Row><Row><Col id=\"MENU_NAME\">다양한 기능</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_ID\">010200</Col><Col id=\"UP_MENU_ID\">010000</Col></Row><Row><Col id=\"MENU_ID\">010202</Col><Col id=\"MENU_NAME\">소계 &amp; 트리 그리드</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"UP_MENU_ID\">010200</Col><Col id=\"FORM_URL\">Comp::Comp_Grid.xfdl</Col></Row><Row><Col id=\"MENU_ID\">010203</Col><Col id=\"MENU_NAME\">페이징</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"UP_MENU_ID\">010200</Col><Col id=\"FORM_URL\">Comp::Comp_Grid_Pagination.xfdl</Col></Row><Row><Col id=\"MENU_ID\">010204</Col><Col id=\"MENU_NAME\">개인화</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"UP_MENU_ID\">010200</Col><Col id=\"FORM_URL\">Comp::Comp_Grid_Personalization.xfdl</Col></Row><Row><Col id=\"MENU_ID\">020000</Col><Col id=\"MENU_NAME\">컴포넌트</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"UP_MENU_ID\">0</Col></Row><Row><Col id=\"MENU_ID\">020100</Col><Col id=\"MENU_NAME\">DIV</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"UP_MENU_ID\">020000</Col></Row><Row><Col id=\"MENU_ID\">020101</Col><Col id=\"MENU_NAME\">팝업 표현</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"UP_MENU_ID\">020100</Col><Col id=\"FORM_URL\">Comp::Comp_Div_Popup.xfdl</Col></Row><Row><Col id=\"MENU_ID\">020200</Col><Col id=\"MENU_NAME\">사용자 컴포넌트</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"UP_MENU_ID\">020000</Col></Row><Row><Col id=\"MENU_ID\">020201</Col><Col id=\"MENU_NAME\">From To Calendar</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"UP_MENU_ID\">020200</Col><Col id=\"FORM_URL\">Comp::Comp_Module_FromToCalendar.xfdl</Col></Row><Row><Col id=\"MENU_NAME\">외부 모듈 연동</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_ID\">030000</Col><Col id=\"UP_MENU_ID\">0</Col></Row><Row><Col id=\"MENU_ID\">030200</Col><Col id=\"MENU_NAME\">rChart</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"UP_MENU_ID\">030000</Col></Row><Row><Col id=\"MENU_ID\">030201</Col><Col id=\"MENU_NAME\">샘플</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"UP_MENU_ID\">030200</Col><Col id=\"FORM_URL\">rChart::chart.xfdl</Col></Row><Row><Col id=\"MENU_ID\">030202</Col><Col id=\"MENU_NAME\">차트그리드</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"UP_MENU_ID\">030200</Col><Col id=\"FORM_URL\">rChart::chartgrid.xfdl</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            
            // global variable

            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("Desktop_screen");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1024","768",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.set_titletext("MidLeftFrame");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("VFrameSet00",null,null,null,null,null,null,this);
            frame0.set_separatesize("*,0,0,0,0");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("LoginFrame",null,null,null,null,null,null,"FrameBase::Form_Login.xfdl",frame0);
            frame1.set_showtitlebar("false");
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("FrameBase::Form_Login.xfdl");


            var frame2 = new ChildFrame("TopFrame",null,null,null,null,null,null,"FrameBase::Form_Top.xfdl",frame0);
            frame2.set_showtitlebar("false");
            frame2.set_showstatusbar("false");
            frame0.addChild(frame2.name, frame2);
            frame2.set_formurl("FrameBase::Form_Top.xfdl");


            var frame3 = new HFrameSet("HFrameSet00",null,null,null,null,null,null,frame0);
            frame3.set_separatesize("225,*");
            frame0.addChild(frame3.name, frame3);

            var frame4 = new ChildFrame("LeftFrame",null,null,null,null,null,null,"FrameBase::Form_Left.xfdl",frame3);
            frame4.set_showtitlebar("false");
            frame4.set_showstatusbar("false");
            frame3.addChild(frame4.name, frame4);
            frame4.set_formurl("FrameBase::Form_Left.xfdl");


            var frame5 = new VFrameSet("VFrameSet01",null,null,null,null,null,null,frame3);
            frame5.set_separatesize("35,*");
            frame3.addChild(frame5.name, frame5);

            var frame6 = new ChildFrame("NaviFrame",null,null,null,null,null,null,"FrameBase::Form_Navi.xfdl",frame5);
            frame6.set_showcascadetitletext("true");
            frame6.set_topmost("true");
            frame6.set_dragmovetype("none");
            frame6.set_showtitlebar("false");
            frame5.addChild(frame6.name, frame6);
            frame6.set_formurl("FrameBase::Form_Navi.xfdl");


            var frame7 = new FrameSet("WorkFrame",null,null,null,null,null,null,frame5);
            frame7.set_background("url(\'imagerc::img_WF_mainPR01.png\') no-repeat center center #f4f4f4");
            frame5.addChild(frame7.name, frame7);

            var frame8 = new ChildFrame("BottomFrame",null,null,null,null,null,null,"FrameBase::Form_Bottom.xfdl",frame0);
            frame8.set_showtitlebar("false");
            frame8.set_showstatusbar("false");
            frame0.addChild(frame8.name, frame8);
            frame8.set_formurl("FrameBase::Form_Bottom.xfdl");
        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Application_onload,this);
        };
        
        // script Compiler
        this.registerScript("Application_Desktop.xadl", function() {
        this.VFrameSet00;
        this.HFrameSet00;
        this.VFrameSet01;
        this.WorkFrame;
        this.TopFrame;
        this.LeftFrame;
        this.NaviFrame;
        this.BottomFrame;
        this.LoginFrame;

        this.Application_onload = function(obj, e)
        {
        	this.VFrameSet00 = this.mainframe.VFrameSet00;
        		this.LoginFrame = this.mainframe.VFrameSet00.LoginFrame;
        		this.TopFrame = this.mainframe.VFrameSet00.TopFrame;
        		this.HFrameSet00 = this.mainframe.VFrameSet00.HFrameSet00;
        			this.LeftFrame = this.mainframe.VFrameSet00.HFrameSet00.LeftFrame;
        			this.VFrameSet01 = this.mainframe.VFrameSet00.HFrameSet00.VFrameSet01;
        				this.NaviFrame = this.mainframe.VFrameSet00.HFrameSet00.VFrameSet01.NaviFrame;
        				this.WorkFrame = this.mainframe.VFrameSet00.HFrameSet00.VFrameSet01.WorkFrame;
        		this.BottomFrame = this.mainframe.VFrameSet00.BottomFrame;
        }
        });
        this.checkLicense("");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::sampleCss.xcss");
        this.loadCss("xcssrc::compositeModule.xcss");
        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
