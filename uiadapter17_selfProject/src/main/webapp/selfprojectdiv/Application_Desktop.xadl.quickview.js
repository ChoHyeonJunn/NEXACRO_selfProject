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
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_NAME\">Main Menu1</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_ID\">1</Col></Row><Row><Col id=\"MENU_NAME\">Sub Menu1</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_ID\">2</Col></Row><Row><Col id=\"MENU_NAME\">Form 1_1_1</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">3</Col><Col id=\"FORM_URL\">Form::Form_1_1_1.xfdl</Col></Row><Row><Col id=\"MENU_NAME\">Form 1_1_2</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">4</Col><Col id=\"FORM_URL\">Form::Form_1_1_2.xfdl</Col></Row><Row><Col id=\"MENU_NAME\">Sub Menu2</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_ID\">5</Col></Row><Row><Col id=\"MENU_NAME\">Form 1_2_1</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">6</Col><Col id=\"FORM_URL\">Form::Form_1_2_1.xfdl</Col></Row><Row><Col id=\"MENU_NAME\">Main Menu2</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_ID\">7</Col></Row><Row><Col id=\"MENU_NAME\">Sub Menu1</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_ID\">8</Col></Row><Row><Col id=\"MENU_NAME\">Form 2_1_1</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">9</Col><Col id=\"FORM_URL\">Form::Form_2_1_1.xfdl</Col></Row><Row><Col id=\"MENU_NAME\">Form 2_1_2</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">10</Col><Col id=\"FORM_URL\">Form::Form_2_1_2.xfdl</Col></Row></Rows>");
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
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("QuickViewFrame", null, null, null, null, null, null, "", this);
            
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj.set_border("0px none");
			
            this.addChild(obj.name, obj);
            obj.set_formurl(nexacro._quickview_formurl);
            this.frame = obj;
            
            obj = null;
        };
        
        this.on_initEvent = function()
        {
        };
		// script Compiler

        
        this.loadPreloadList();

    };
}
)();
