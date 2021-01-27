(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("chart");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1150);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Line","75","120","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("url(\'imagerc::rChart/line.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Column","250","120","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("url(\'imagerc::rChart/column.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Area","609","120","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("url(\'imagerc::rChart/area.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Pie","786","120","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("url(\'imagerc::rChart/pie.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Bubble","75","265","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("url(\'imagerc::rChart/bubble.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Plot","250","265","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("url(\'imagerc::rChart/plot.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("FromTo","609","265","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("url(\'imagerc::rChart/from_to.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Radar","786","265","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("url(\'imagerc::rChart/radar.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Target","75","410","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("url(\'imagerc::rChart/target.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("History","250","410","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("url(\'imagerc::rChart/history.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Scroll","609","410","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("url(\'imagerc::rChart/scroll.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Equalizer","786","410","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("url(\'imagerc::rChart/equalizer.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("BrokenAxis","75","555","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("url(\'imagerc::rChart/broken.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Image","250","555","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("url(\'imagerc::rChart/image.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Wing","609","555","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("url(\'imagerc::rChart/wing.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("WindRose","786","555","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("url(\'imagerc::rChart/wind_rose.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","75","225","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Line");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","250","225","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Column");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","609","225","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Area");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","786","225","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Pie");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","75","370","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Bubble");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","250","370","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Plot");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","609","370","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("From - To");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","786","370","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Radar");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","75","515","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Target vs Actual");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","250","515","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("History");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","786","515","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("Equalizer");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","609","515","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Scroll");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","75","660","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("BrokenAxis");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","250","660","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("Image");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","609","660","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("Wing");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","786","660","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("WindRose");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Bar","428","120","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_background("url(\'imagerc::rChart/bar.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Combination","428","265","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_background("url(\'imagerc::rChart/combination.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("RealTime","428","410","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_background("url(\'imagerc::rChart/realtime.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("ImageMatrix","428","555","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_background("url(\'imagerc::rChart/image_matrix.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","428","225","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("Bar");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","428","370","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("Combination");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","428","515","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("RealTime");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","428","660","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("ImageMatrix");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Candlestick","75","700","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_background("url(\'imagerc::rChart/candlestick.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("TreeMap","250","700","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_background("url(\'imagerc::rChart/treemap.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Matrix","609","700","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_background("url(\'imagerc::rChart/matrix.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("OverlayBubble","786","700","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_background("url(\'imagerc::rChart/overlaybubble.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Pyramid","75","845","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_background("url(\'imagerc::rChart/pyramid.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Histogram","250","845","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_background("url(\'imagerc::rChart/histogram.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("ErrorBar","609","845","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_background("url(\'imagerc::rChart/error_bar.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("BoxPlot","786","845","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_background("url(\'imagerc::rChart/box_plot.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Slide","75","990","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_background("url(\'imagerc::rChart/slide.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Motion","250","990","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_background("url(\'imagerc::rChart/motion.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("SimpleGauge","609","990","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_background("url(\'imagerc::rChart/simple_gauge.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Gauge","786","990","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_background("url(\'imagerc::rChart/gauge.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","75","805","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("Candlestick");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","250","805","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("TreeMap");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","609","805","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("Matrix");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","786","805","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("OverlayBubble");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","75","950","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("Pyramid");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","250","950","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("Histogram");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","609","950","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("ErrorBar");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","786","950","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("BoxPlot");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","75","1095","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("Slide");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","250","1095","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("Motion");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","609","1095","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("SimpleGauge");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","786","1095","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("Gauge");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("WordCloud","428","700","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_background("url(\'imagerc::rChart/word_cloud.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Vector","428","845","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_background("url(\'imagerc::rChart/vector.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("RealTimePremium","428","990","142","95",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_background("url(\'imagerc::rChart/realtime_premium.jpg\') no-repeat center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","428","805","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("WordCloud");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","428","950","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("Vector");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","428","1095","142","20",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("RealTime-Premium");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","33","26","1214","34",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("rChart");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","35","60","1214","30",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("다양한 형태의 팝업 호출. 넥사크로플랫폼에서는 모달/모달리스 형태로 호출할 수 있는 API가 제공되고 타이틀바, 리사이즈 등의 옵션을 선택할 수 있습니다.");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,1150,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("chart.xfdl", function() {
        this.application = null;

        /*
         *	event : 페이지 온로드
         */
         this.chart_onload = function(obj,e)
        {
        	this.application = nexacro.getApplication();
        };

        /************************************************************************
         * event : 차트 이미지 클릭
         ************************************************************************/
        this.Static_onclick = function(obj,e)
        {
        	this.fn_popupModel("rChartPop", "rChart::chartPop.xfdl", {chartType: obj.name});
        };


        // function : 모달창
        this.fn_popupModel = function(pID, pURL, pObjParam)
        {
        	var widthValue = 1024,
        		heightValue = 700,
        		nLeft = Math.round((this.application.mainframe.width - widthValue) / 2),
        		nTop  = Math.round((this.application.mainframe.height - heightValue) / 2);

        	var objChildFrame = new ChildFrame(pID
        									  , nLeft
        									  , nTop
        									  , 1024
        									  , 700
        									  , null
        									  , null
        									  , pURL);

        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_showstatusbar(false);
        	objChildFrame.set_resizable(false);
        	objChildFrame.set_autosize(false);
        	objChildFrame.set_dragmovetype("none");

        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , pObjParam
        						  , this
        						  , "fn_popupCallback");
        }

        // function : 모달창 콜백
        this.fn_popupCallback = function(strPopupID, strReturn)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.chart_onload,this);
            this.Line.addEventHandler("onclick",this.Static_onclick,this);
            this.Column.addEventHandler("onclick",this.Static_onclick,this);
            this.Area.addEventHandler("onclick",this.Static_onclick,this);
            this.Pie.addEventHandler("onclick",this.Static_onclick,this);
            this.Bubble.addEventHandler("onclick",this.Static_onclick,this);
            this.Plot.addEventHandler("onclick",this.Static_onclick,this);
            this.FromTo.addEventHandler("onclick",this.Static_onclick,this);
            this.Radar.addEventHandler("onclick",this.Static_onclick,this);
            this.Target.addEventHandler("onclick",this.Static_onclick,this);
            this.History.addEventHandler("onclick",this.Static_onclick,this);
            this.Scroll.addEventHandler("onclick",this.Static_onclick,this);
            this.Equalizer.addEventHandler("onclick",this.Static_onclick,this);
            this.BrokenAxis.addEventHandler("onclick",this.Static_onclick,this);
            this.Image.addEventHandler("onclick",this.Static_onclick,this);
            this.Wing.addEventHandler("onclick",this.Static_onclick,this);
            this.WindRose.addEventHandler("onclick",this.Static_onclick,this);
            this.Bar.addEventHandler("onclick",this.Static_onclick,this);
            this.Combination.addEventHandler("onclick",this.Static_onclick,this);
            this.RealTime.addEventHandler("onclick",this.Static_onclick,this);
            this.ImageMatrix.addEventHandler("onclick",this.Static_onclick,this);
            this.Candlestick.addEventHandler("onclick",this.Static_onclick,this);
            this.TreeMap.addEventHandler("onclick",this.Static_onclick,this);
            this.Matrix.addEventHandler("onclick",this.Static_onclick,this);
            this.OverlayBubble.addEventHandler("onclick",this.Static_onclick,this);
            this.Pyramid.addEventHandler("onclick",this.Static_onclick,this);
            this.Histogram.addEventHandler("onclick",this.Static_onclick,this);
            this.ErrorBar.addEventHandler("onclick",this.Static_onclick,this);
            this.BoxPlot.addEventHandler("onclick",this.Static_onclick,this);
            this.Slide.addEventHandler("onclick",this.Static_onclick,this);
            this.Motion.addEventHandler("onclick",this.Static_onclick,this);
            this.SimpleGauge.addEventHandler("onclick",this.Static_onclick,this);
            this.Gauge.addEventHandler("onclick",this.Static_onclick,this);
            this.WordCloud.addEventHandler("onclick",this.Static_onclick,this);
            this.Vector.addEventHandler("onclick",this.Static_onclick,this);
            this.RealTimePremium.addEventHandler("onclick",this.Static_onclick,this);
        };
        this.loadIncludeScript("chart.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
