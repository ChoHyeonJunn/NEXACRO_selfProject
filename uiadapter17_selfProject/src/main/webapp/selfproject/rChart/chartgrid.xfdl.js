(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("chartgrid");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Month\" type=\"STRING\" size=\"20\"/><Column id=\"Profit\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Cost\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Revenue\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Month\">Jan</Col><Col id=\"Profit\">900</Col><Col id=\"Cost\">1500</Col><Col id=\"Revenue\">2300</Col></Row><Row><Col id=\"Month\">Feb</Col><Col id=\"Profit\">1400</Col><Col id=\"Cost\">1400</Col><Col id=\"Revenue\">1200</Col></Row><Row><Col id=\"Month\">Mar</Col><Col id=\"Profit\">1500</Col><Col id=\"Cost\">1200</Col><Col id=\"Revenue\">1600</Col></Row><Row><Col id=\"Month\">Apr</Col><Col id=\"Profit\">1900</Col><Col id=\"Cost\">1300</Col><Col id=\"Revenue\">1300</Col></Row><Row><Col id=\"Month\">May</Col><Col id=\"Profit\">1400</Col><Col id=\"Cost\">900</Col><Col id=\"Revenue\">1000</Col></Row><Row><Col id=\"Month\">Jun</Col><Col id=\"Profit\">2000</Col><Col id=\"Cost\">1000</Col><Col id=\"Revenue\">1200</Col></Row><Row><Col id=\"Month\">Jul</Col><Col id=\"Profit\">1800</Col><Col id=\"Cost\">1500</Col><Col id=\"Revenue\">2300</Col></Row><Row><Col id=\"Month\">Aug</Col><Col id=\"Profit\">2500</Col><Col id=\"Cost\">1400</Col><Col id=\"Revenue\">1200</Col></Row><Row><Col id=\"Month\">Sep</Col><Col id=\"Profit\">3000</Col><Col id=\"Cost\">1200</Col><Col id=\"Revenue\">1600</Col></Row><Row><Col id=\"Month\">Oct</Col><Col id=\"Profit\">2000</Col><Col id=\"Cost\">1300</Col><Col id=\"Revenue\">1300</Col></Row><Row><Col id=\"Month\">Nov</Col><Col id=\"Profit\">2100</Col><Col id=\"Cost\">900</Col><Col id=\"Revenue\">1000</Col></Row><Row><Col id=\"Month\">Dec</Col><Col id=\"Profit\">1700</Col><Col id=\"Cost\">1000</Col><Col id=\"Revenue\">1200</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdList","75","410",null,null,"75","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"Month\"/><Cell col=\"1\" text=\"Profit\"/><Cell col=\"2\" text=\"Cost\"/><Cell col=\"3\" text=\"Revenue\"/></Band><Band id=\"body\"><Cell text=\"bind:Month\"/><Cell col=\"1\" text=\"bind:Profit\" edittype=\"normal\" editinputtype=\"number\"/><Cell col=\"2\" text=\"bind:Cost\" edittype=\"normal\" editinputtype=\"number\"/><Cell col=\"3\" text=\"bind:Revenue\" edittype=\"normal\" editinputtype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","33","26","1214","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("rChart");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","35","60","1214","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("다양한 형태의 팝업 호출. 넥사크로플랫폼에서는 모달/모달리스 형태로 호출할 수 있는 API가 제공되고 타이틀바, 리사이즈 등의 옵션을 선택할 수 있습니다.");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","75","160",null,null,"75","grdList:10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbType","169","96","220","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cmbType_innerdataset = new nexacro.NormalDataset("cmbType_innerdataset", obj);
            cmbType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Column</Col><Col id=\"datacolumn\">Column</Col></Row><Row><Col id=\"codecolumn\">Line</Col><Col id=\"datacolumn\">Line</Col></Row><Row><Col id=\"codecolumn\">Combination</Col><Col id=\"datacolumn\">Combination</Col></Row></Rows>");
            obj.set_innerdataset(cmbType_innerdataset);
            obj.set_text("tobesoft.pdf");
            obj.set_value("tobesoft.pdf");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","75","96","69","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Chart Type");
            obj.set_cssclass("sta_WF_labelTxt01");
            obj.set_fittocontents("width");
            obj.getSetter("messageid").set("external.chartngrid.charttype");
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
        this.addIncludeScript("chartgrid.xfdl","lib::rMateChartH5.xjs");
        this.addIncludeScript("chartgrid.xfdl","lib::rMateChartH5License.xjs");
        this.registerScript("chartgrid.xfdl", function() {
        this.executeIncludeScript("lib::rMateChartH5.xjs"); /*include "lib::rMateChartH5.xjs"*/;
        this.executeIncludeScript("lib::rMateChartH5License.xjs"); /*include "lib::rMateChartH5License.xjs"*/;

        this.application = null;

        /************************************************************************
         * event : 페이지 온로드
         ************************************************************************/
        this.chartgrid_onload = function(obj,e)
        {
        	this.application = nexacro.getApplication();


        	var svcurl = nexacro.getProjectPath(),
        		htmlUrl = svcurl + "../rChart/nexacroChartH5_v6.0_Sample.html", // 차트를 그릴 html의 url
        		scriptRootUrl = svcurl + "../rChart/rMateChartH5";

        	// Form이 완성된 후 차트를 생성합니다.
        	this.rMateChartCreate(this.WebBrowser00, scriptRootUrl, htmlUrl, this.makeChartVars());
        };

        // function :
        this.makeChartVars = function()
        {
        	var chartVars = "";
        	//rMateChartH5가 로딩 완료 되었을 때 호출 할 함수를 정의 하십시오.
        	var rMateOnLoadCallFunction = "rMateChartOnLoad";
        	chartVars += "rMateOnLoadCallFunction="+rMateOnLoadCallFunction;

        	return chartVars;
        };

        // function : chartVars에 rMateOnLoadCallFunction 으로 아래 함수를 설정하여 rMateChartH5가 로딩된후 불려지게 할 수 있습니다.
        this.rMateChartOnLoad = function()
        {
        	this.rMateChartSetLayout(this.WebBrowser00, this.layoutColumnStr);
        	this.rMateChartSetData(this.WebBrowser00, this.rMateChartDataSetToXml(this.dsList));
        };

        /*  ------------------------- 데이터팁 사용자 정의 함수 -----------------------------------------------------
        	챠트에서 showDataTips="true" 설정 후 마우스 오버 시 보이는 데이터팁 정의
        	layout XML 에서 Chart 속성을 넣을때 dataTipJsFunction를 주고, 만든 javascript 함수명을 넣어줍니다
        	예) <Column3DChart showDataTips="true" dataTipJsFunction="dataTipFunc">

            파라메터 설명
        	seriesId : layout XML에서 부여한 series의 id가 있을 경우, 해당 id를 보내줍니다.
        	seriesName : 시리즈의 displayName 으로 정의한 시리즈 이름을 보내줍니다.
        	index : 해당 아이템의 인덱스.
        	xName : X 축에 displayName 을 정의하였다면 X축의 displayName을 보내줍니다.
        	yName : Y 축에 displayName 을 정의하였다면 Y축의 displayName을 보내줍니다.
        	data : 해당 item의 값을 표현하기 위해 입력된 data(입력된 데이타중 해당 row(레코드) 자료입니다)
        	values : 해당 item의 값 (배열로 전달되며, 챠트 종류에 따라 아래와 같이 들어옵니다.)
        		Bar2D, Bar3DSeries              0:x축값 1:y축값
        		Column2D, Columnd3DSeries       0:x축값 1:y축값
        		Area2DSeries                    0:x축값 1:y축값
        		Bubble3DSeries                  0:x축값 1:y축값 2:radius값
        		Line2DSeries                    0:x축값 1:y축값
        		Candlestick2DSeries             0:x축값 1:open값 2:close값 3:high값 4:low값
        		Pie2D, Pie3DSeries              0:값 1:퍼센트값 2:nameFiled명
        		Bar2D, Column2DWingSeries       0:x축값 1:y축값
        		Histogram2D, Histogram3DSeries  0:x축값 1:y축값
        		TreeMapSeries                   0:weight값 1:name값
        		BoxPlotSeries                   0:upper값 1:median값 2:lower값 3:min값 4:hidden값
        		Vector2DSeries                  0:degree값 1:velocity값 2:meter값
        		WordCloudSeries                 0:weight값 1:text값
        */
        this.dataTipFunc = function(seriesId, seriesName, index, xName, yName, data, values)
        {
        	return "<table cellpadding='0' cellspacing='1'>"
        		+"<tr>"
        		+"<td align='center' colspan='2' style='border-bottom:solid 1px #8b8b8b;'><img src='../rChart/rMateChartH5/Assets/Images/monitor.png'></td>"
        		+"</tr><tr>"
        		+"<td >series ID</td><td align='center'>" + seriesId + "</td>"
        		+"</tr><tr>"
        		+"<td>displayName</td><td align='center'>" + seriesName + "</td>"
        		+"</tr><tr>"
        		+"<td>item Index</td><td align='center'>" + index + "</td>"
        		+"</tr><tr>"
        		+"<td>X축 이름 </td><td align='center'>" + xName + "</td>"
        		+"</tr><tr>"
        		+"<td>Y축 이름</td><td align='center'>" + yName + "</td>"
        		+"</tr><tr>"
        		+"<td>X축 값</td><td align='center'>" + values[0] + "</td>"
        		+"</tr><tr>"
        		+"<td>Y축 값</td><td align='center'>" + values[1] + "</td>"
        		+"</tr><tr>"
        		+"<td style='background-color:#e5e5e5;'>합 계</td><td align='center' style='background-color:#e5e5e5;'>" + this.getSum(data) + "</td>"
        		+"</tr></table>";
        };

        this.getSum = function(values) {
        	var sum = 0;
        	for(var v in values) {
        		sum += Number(values[v]) || 0;
        	}
        	return sum;
        };

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	this.rMateChartSetData(this.WebBrowser00, this.rMateChartDataSetToXml(this.dsList));
        };

        this.cmbType_onitemchanged = function(obj,e)
        {
        	var chartLayout;

        	switch(e.postvalue) {
        	case "Column":
        		chartLayout = this.layoutColumnStr;
        		break;
        	case "Line":
        		chartLayout = this.layoutLineStr;
        		break;
        	case "Combination":
        		chartLayout = this.layoutCombStr;
        		break;
        	default:
        	}

        	this.rMateChartSetLayout(this.WebBrowser00, chartLayout);
        };








        this.layoutColumnStr = '\
<rMateChart backgroundColor="0xFFFFFF" borderStyle="none" cornerRadius="5">\
	<Options>\
		<Caption text="Annual Report"/>\
		<DataEditor showOnInit="true"  useCloseButton="false" reverseRow="true" textAlign="right"/>\
	</Options>\
	<Column3DChart showDataTips="true" dataTipJsFunction="dataTipFunc">\
		/* \
			dataTipJsFunction : Column3DChart 시리즈에 마우스 오버될 때 실행되는 Javascript함수로 \
			html파일과 Form 내에 정의한 Javascript함수로 데이터를 보낸 후 Javascript 에서 반환되는 값을 Tooltip에 보여줍니다. \
			** HTML5모드만을 사용할 경우 dataTipFunc를 window.NEXACROWEBBROWSER.parent.dataTipFunc 로 주시면 이 Form의 dataTipFunc가 실행됩니다. \
		*/ \
		<horizontalAxis>\
			<CategoryAxis categoryField="Month" displayName="날짜"/>\
		</horizontalAxis>\
		<verticalAxis>\
			<LinearAxis displayName="금액"/>\
		</verticalAxis>\
		<series>\
			<Column3DSeries id="series1" yField="Profit" displayName="Profit">\
				<showDataEffect>\
					<SeriesInterpolate/>\
				</showDataEffect>\
			</Column3DSeries>\
			<Column3DSeries id="series2" yField="Cost" displayName="Cost">\
				<showDataEffect>\
					<SeriesInterpolate/>\
				</showDataEffect>\
			</Column3DSeries>\
			<Column3DSeries id="series3" yField="Revenue" displayName="Revenue">\
				<showDataEffect>\
					<SeriesInterpolate/>\
				</showDataEffect>\
			</Column3DSeries>\
		</series>\
	</Column3DChart>\
</rMateChart>\
';

        // Line Chart Layout
        this.layoutLineStr = '\
<rMateChart backgroundColor="#FFFFFF"  borderThickness="1" borderStyle="none">\
	<Options>\
		<Caption text="Annual Report" />\
		<SubCaption text="( mm )" textAlign="right" />\
		<Legend />\
	</Options>\
	<NumberFormatter id="numFmt" precision="0"/>\
	<Line2DChart showDataTips="true" dataTipDisplayMode="axis" paddingTop="0">\
		<horizontalAxis>\
			<CategoryAxis categoryField="Month"/>\
		</horizontalAxis>\
		<verticalAxis>\
			<LinearAxis interval="500"/>\
		</verticalAxis>\
		<series>\
			<Line2DSeries yField="Profit" displayName="Profit" radius="6" fill="#ffffff" itemRenderer="DiamondItemRenderer">\
				<showDataEffect>\
					<SeriesInterpolate duration="1000"/>\
				</showDataEffect>\
			</Line2DSeries>\
			<Line2DSeries yField="Cost" displayName="Cost" radius="6" fill="#ffffff" itemRenderer="CircleItemRenderer">\
				<showDataEffect>\
					<SeriesInterpolate duration="1000"/>\
				</showDataEffect>\
			</Line2DSeries>\
			<Line2DSeries yField="Revenue" displayName="Revenue" radius="6" fill="#ffffff" itemRenderer="TriangleItemRenderer">\
				<showDataEffect>\
					<SeriesInterpolate duration="1000"/>\
				</showDataEffect>\
			</Line2DSeries>\
		</series>\
		<annotationElements>\
			<CrossRangeZoomer enableZooming="false" horizontalLabelFormatter="{numFmt}" horizontalStrokeEnable="false"/>\
		</annotationElements>\
	</Line2DChart>\
</rMateChart>\
';

        // Combination Chart Layout
        this.layoutCombStr = '\
<rMateChart backgroundColor="#FFFFFF"  borderStyle="none">\
    <Options>\
        <Caption text="Annual Report"/>\
    </Options>\
    <NumberFormatter id="numFmt" useThousandsSeparator="true"/>\
    <Combination2DChart showDataTips="true">\
        <horizontalAxis>\
            <CategoryAxis categoryField="Month" padding="0.7"/>\
        </horizontalAxis>\
        <verticalAxis>\
            <LinearAxis id="vAxis1" formatter="{numFmt}" interval="500"/>\
        </verticalAxis>\
        <series>\
            <Column2DSet type="clustered">\
                <series>\
                    <Column2DSeries yField="Profit" displayName="Profit" labelPosition="outside" showValueLabels="[0]">\
                        <fill>\
                            <SolidColor color="#40b2e6"/>\
                        </fill>\
                        <showDataEffect>\
                            <SeriesInterpolate/>\
                        </showDataEffect>\
                    </Column2DSeries>\
                    <Column2DSeries yField="Cost" displayName="Cost" labelPosition="outside" showValueLabels="[0]">\
                        <fill>\
                            <SolidColor color="#4453a8"/>\
                        </fill>\
                        <showDataEffect>\
                            <SeriesInterpolate/>\
                        </showDataEffect>\
                    </Column2DSeries>\
                </series>\
            </Column2DSet>\
            <Line2DSeries selectable="true" yField="Revenue" radius="4.5" form="curve" displayName="Revenue" itemRenderer="CircleItemRenderer">\
                <stroke>\
                    <Stroke color="#f9bd03" weight="3"/>\
                </stroke>\
                <lineStroke>\
                    <Stroke color="#f9bd03" weight="3"/>\
                </lineStroke>\
                <showDataEffect>\
                    <SeriesInterpolate/>\
                </showDataEffect>\
            </Line2DSeries>\
        </series>\
        <verticalAxisRenderers>\
            <Axis2DRenderer axis="{vAxis1}" showLine="false"/>\
        </verticalAxisRenderers>\
    </Combination2DChart>\
</rMateChart>\
';
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.chartgrid_onload,this);
            this.cmbType.addEventHandler("onitemchanged",this.cmbType_onitemchanged,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("chartgrid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
