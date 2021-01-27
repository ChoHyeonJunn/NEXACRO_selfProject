(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Grid");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset5", this);
            obj._setContents("<ColumnInfo><Column id=\"CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY\" type=\"INT\" size=\"256\"/><Column id=\"BONUS\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">John </Col><Col id=\"ID\">KR101</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">300</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Jackson</Col><Col id=\"ID\">KR102</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">200</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Adam</Col><Col id=\"ID\">KR103</Col><Col id=\"SALARY\">3000</Col><Col id=\"BONUS\">50</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Melon</Col><Col id=\"ID\">KR104</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">1000</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Kate </Col><Col id=\"ID\">KR105</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">200</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Bts</Col><Col id=\"ID\">KR106</Col><Col id=\"SALARY\">1000</Col><Col id=\"BONUS\">500</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Andrew </Col><Col id=\"ID\">KR107</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">30</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Belle</Col><Col id=\"ID\">KR108</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">50</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Elsa</Col><Col id=\"ID\">KR109</Col><Col id=\"SALARY\">7000</Col><Col id=\"BONUS\">100</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Kein </Col><Col id=\"ID\">KR110</Col><Col id=\"SALARY\">1000</Col><Col id=\"BONUS\">100</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Ivy</Col><Col id=\"ID\">KR111</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">300</Col><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Kara</Col><Col id=\"ID\">KR112</Col><Col id=\"SALARY\"/><Col id=\"BONUS\"/><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Twice</Col><Col id=\"ID\">KR113</Col><Col id=\"SALARY\"/><Col id=\"BONUS\"/><Col id=\"CORP\">Korea Corp.</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">John </Col><Col id=\"ID\">KR101</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">300</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Jackson</Col><Col id=\"ID\">KR102</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">200</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Kate </Col><Col id=\"ID\">KR105</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">200</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Bts</Col><Col id=\"ID\">KR106</Col><Col id=\"SALARY\">1000</Col><Col id=\"BONUS\">500</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Andrew </Col><Col id=\"ID\">KR107</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">30</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Belle</Col><Col id=\"ID\">KR108</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">50</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Elsa</Col><Col id=\"ID\">KR109</Col><Col id=\"SALARY\">7000</Col><Col id=\"BONUS\">100</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Kein </Col><Col id=\"ID\">KR110</Col><Col id=\"SALARY\">1000</Col><Col id=\"BONUS\">100</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Ivy</Col><Col id=\"ID\">KR111</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">300</Col></Row><Row><Col id=\"CORP\">Japen Corp.</Col><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Twice</Col><Col id=\"ID\">KR113</Col><Col id=\"SALARY\">4000</Col><Col id=\"BONUS\">200</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_explorer", this);
            obj._setContents("<ColumnInfo><Column id=\"TREE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TREE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TREE_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"TREE_STATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TREE_ID\">10</Col><Col id=\"TREE_NM\">Project 'EduProject''</Col><Col id=\"TREE_LEVEL\">0</Col><Col id=\"TREE_STATE\">1</Col></Row><Row><Col id=\"TREE_ID\">20</Col><Col id=\"TREE_NM\">Environment</Col><Col id=\"TREE_LEVEL\">1</Col><Col id=\"TREE_STATE\">1</Col></Row><Row><Col id=\"TREE_ID\">30</Col><Col id=\"TREE_NM\">ScreenDefinition</Col><Col id=\"TREE_LEVEL\">2</Col><Col id=\"TREE_STATE\">1</Col></Row><Row><Col id=\"TREE_ID\">40</Col><Col id=\"TREE_NM\">Phone_screen &quot;App_Phone&quot;</Col><Col id=\"TREE_LEVEL\">3</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">50</Col><Col id=\"TREE_NM\">Desktop_screen &quot;App_Desktop&quot;</Col><Col id=\"TREE_LEVEL\">3</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">60</Col><Col id=\"TREE_NM\">Variables</Col><Col id=\"TREE_LEVEL\">2</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">70</Col><Col id=\"TREE_NM\">Cookies</Col><Col id=\"TREE_LEVEL\">2</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">80</Col><Col id=\"TREE_NM\">HTTP Header</Col><Col id=\"TREE_LEVEL\">2</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">90</Col><Col id=\"TREE_NM\">Script</Col><Col id=\"TREE_LEVEL\">2</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">100</Col><Col id=\"TREE_NM\">TypeDefinition</Col><Col id=\"TREE_LEVEL\">1</Col><Col id=\"TREE_STATE\">0</Col></Row><Row><Col id=\"TREE_ID\">110</Col><Col id=\"TREE_NM\">Objects</Col><Col id=\"TREE_LEVEL\">2</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">120</Col><Col id=\"TREE_NM\">Services</Col><Col id=\"TREE_LEVEL\">2</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">130</Col><Col id=\"TREE_NM\">Protocols</Col><Col id=\"TREE_LEVEL\">2</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">140</Col><Col id=\"TREE_NM\">App Information</Col><Col id=\"TREE_LEVEL\">1</Col><Col id=\"TREE_STATE\">1</Col></Row><Row><Col id=\"TREE_ID\">150</Col><Col id=\"TREE_NM\">AppVariables</Col><Col id=\"TREE_LEVEL\">2</Col><Col id=\"TREE_STATE\">0</Col></Row><Row><Col id=\"TREE_ID\">160</Col><Col id=\"TREE_NM\">Datasets</Col><Col id=\"TREE_LEVEL\">3</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">170</Col><Col id=\"TREE_NM\">Variables</Col><Col id=\"TREE_LEVEL\">3</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">180</Col><Col id=\"TREE_NM\">Apps</Col><Col id=\"TREE_LEVEL\">2</Col><Col id=\"TREE_STATE\">1</Col></Row><Row><Col id=\"TREE_ID\">190</Col><Col id=\"TREE_NM\">App_Desktop</Col><Col id=\"TREE_LEVEL\">3</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">200</Col><Col id=\"TREE_NM\">mainframe</Col><Col id=\"TREE_LEVEL\">4</Col><Col id=\"TREE_STATE\">0</Col></Row><Row><Col id=\"TREE_ID\">210</Col><Col id=\"TREE_NM\">VFrameSet0</Col><Col id=\"TREE_LEVEL\">5</Col><Col id=\"TREE_STATE\">0</Col></Row><Row><Col id=\"TREE_ID\">220</Col><Col id=\"TREE_NM\">TopFrame</Col><Col id=\"TREE_LEVEL\">6</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">230</Col><Col id=\"TREE_NM\">HFrameSet0</Col><Col id=\"TREE_LEVEL\">6</Col><Col id=\"TREE_STATE\">0</Col></Row><Row><Col id=\"TREE_ID\">240</Col><Col id=\"TREE_NM\">LeftFrame</Col><Col id=\"TREE_LEVEL\">7</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">250</Col><Col id=\"TREE_NM\">WorkFrame</Col><Col id=\"TREE_LEVEL\">7</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">260</Col><Col id=\"TREE_NM\">Script</Col><Col id=\"TREE_LEVEL\">4</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">270</Col><Col id=\"TREE_NM\">App_Phone</Col><Col id=\"TREE_LEVEL\">3</Col><Col id=\"TREE_STATE\">0</Col></Row><Row><Col id=\"TREE_ID\">280</Col><Col id=\"TREE_NM\">mainframe</Col><Col id=\"TREE_LEVEL\">4</Col><Col id=\"TREE_STATE\">0</Col></Row><Row><Col id=\"TREE_ID\">290</Col><Col id=\"TREE_NM\">Script</Col><Col id=\"TREE_LEVEL\">4</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">300</Col><Col id=\"TREE_NM\">Base</Col><Col id=\"TREE_LEVEL\">2</Col><Col id=\"TREE_STATE\">0</Col></Row><Row><Col id=\"TREE_ID\">310</Col><Col id=\"TREE_NM\">Hello</Col><Col id=\"TREE_LEVEL\">3</Col><Col id=\"TREE_STATE\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","75","120","44%",null,null,"20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset5");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"102\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CORP\" suppress=\"0\"/><Cell col=\"1\" text=\"DEPT\"/><Cell col=\"2\" text=\"NAME\"/><Cell col=\"3\" text=\"ID\"/><Cell col=\"4\" text=\"SALARY\"/><Cell col=\"5\" text=\"BONUS\"/></Band><Band id=\"body\"><Cell text=\"bind:CORP\" suppress=\"1\" cssclass=\"expr:dataset.getRowLevel(currow) == 2 ? 'bg_summary' : ''\" autosizecol=\"limitmax\"/><Cell col=\"1\" text=\"bind:DEPT\" suppress=\"1\" cssclass=\"expr:(dataset.getRowLevel(currow) == 2 ? 'bg_summary' : (dataset.getRowLevel(currow) == 1 ? 'bg_summary' : ''))\" autosizecol=\"limitmax\"/><Cell col=\"2\" text=\"bind:NAME\" cssclass=\"expr:(dataset.getRowLevel(currow) == 2 ? 'bg_summary' : (dataset.getRowLevel(currow) == 1 ? 'bg_summary' : ''))\"/><Cell col=\"3\" text=\"bind:ID\" cssclass=\"expr:(dataset.getRowLevel(currow) == 2 ? 'bg_summary' : (dataset.getRowLevel(currow) == 1 ? 'bg_summary' : ''))\"/><Cell col=\"4\" text=\"bind:SALARY\" cssclass=\"expr:(dataset.getRowLevel(currow) == 2 ? 'bg_summary' : (dataset.getRowLevel(currow) == 1 ? 'bg_summary' : ''))\"/><Cell col=\"5\" text=\"bind:BONUS\" cssclass=\"expr:(dataset.getRowLevel(currow) == 2 ? 'bg_summary' : (dataset.getRowLevel(currow) == 1 ? 'bg_summary' : ''))\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","Grid00:1%","120",null,null,"75","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_explorer");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"206\"/><Column size=\"53\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Project Explorer\"/><Cell col=\"1\" text=\"State\"/></Band><Band id=\"body\"><Cell text=\"bind:TREE_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:TREE_LEVEL\" treestate=\"bind:TREE_STATE\"/><Cell col=\"1\" text=\"bind:TREE_STATE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","33","26","1214","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Grid - 다양한 표현");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","35","60","1214","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("supress와 데이터셋 그룹핑을 이용한 합계 소계 트리그리드");
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
        this.registerScript("Comp_Grid.xfdl", function() {
        this.application = null;

        this.Comp_Grid_onload = function(obj,e)
        {
        	this.application = nexacro.getApplication();

        	// suppress와 데이터셋 그룹핑을 이용한 소계
        	this.Dataset5.set_keystring("G:-CORP,+DEPT");
        	var sExpr = "expr:(dataset.getRowLevel(currow) == 2 ? CORP+' Sum' : CORP)";
        	this.Grid00.setCellProperty("body", 0, "text", sExpr);
        	sExpr = "expr:(dataset.getRowLevel(currow) == 0 ? DEPT : (dataset.getRowLevel(currow) == 1 ? DEPT + ' Sum' : ''))";
        	this.Grid00.setCellProperty("body", 1, "text", sExpr);

        	// summary 추가 후 합계 표현
        	this.Grid00.appendContentsRow("summary");
        	this.Grid00.setCellProperty("summary", 0, "text", "SUM");
        	this.Grid00.setCellProperty("summary", 4, "text", this.Dataset5.getSum("SALARY"));
        	this.Grid00.setCellProperty("summary", 5, "text", this.Dataset5.getSum("BONUS"));

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Comp_Grid_onload,this);
            this.Grid01.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
        };
        this.loadIncludeScript("Comp_Grid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
