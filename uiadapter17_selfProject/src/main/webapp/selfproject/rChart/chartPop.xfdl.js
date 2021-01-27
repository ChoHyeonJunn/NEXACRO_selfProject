(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("chartPop");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Line", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">Line Segment</Col><Col id=\"Code\">Line_2D_Segment</Col></Row><Row><Col id=\"Value\">Line Curve</Col><Col id=\"Code\">Line_2D_Curve</Col></Row><Row><Col id=\"Value\">Line Step</Col><Col id=\"Code\">Line_2D_Step</Col></Row><Row><Col id=\"Value\">Line ItemRenderer</Col><Col id=\"Code\">Line_2D_Item</Col></Row><Row><Col id=\"Value\">Line BaseLine</Col><Col id=\"Code\">Line_2D_BaseLine</Col></Row><Row><Col id=\"Value\">Line for Null Data</Col><Col id=\"Code\">Line_2D_Interpolate</Col></Row><Row><Col id=\"Value\">Dashed Line Segment</Col><Col id=\"Code\">Dash_Lines</Col></Row><Row><Col id=\"Value\">Dashed Line Curve</Col><Col id=\"Code\">Dash_Line_Curve</Col></Row><Row><Col id=\"Value\">Dashed Line Step</Col><Col id=\"Code\">Dash_Line_Step</Col></Row><Row><Col id=\"Value\">Line + Dashed Line</Col><Col id=\"Code\">Dash_DashedLine_Line</Col></Row><Row><Col id=\"Value\">Line + Dashed Line Multi</Col><Col id=\"Code\">Dash_Line_DashedLine</Col></Row><Row><Col id=\"Value\">Line Series DisplayName</Col><Col id=\"Code\">Line_Series_DisplayName</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Column", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">Column</Col><Col id=\"Code\">Column_2D</Col></Row><Row><Col id=\"Value\">Column 3D</Col><Col id=\"Code\">Column_3D</Col></Row><Row><Col id=\"Value\">Multi Series</Col><Col id=\"Code\">Column_2D_MS</Col></Row><Row><Col id=\"Value\">Multi Series 3D</Col><Col id=\"Code\">Column_3D_MS</Col></Row><Row><Col id=\"Value\">Stacked</Col><Col id=\"Code\">Column_2D_Stacked</Col></Row><Row><Col id=\"Value\">Stacked(연결선)</Col><Col id=\"Code\">Column_2D_Stacked_Link</Col></Row><Row><Col id=\"Value\">2D 100%</Col><Col id=\"Code\">Column_2D_100Per</Col></Row><Row><Col id=\"Value\">Stacked 3D</Col><Col id=\"Code\">Column_3D_Stacked</Col></Row><Row><Col id=\"Value\">Stacked 3D(연결선)</Col><Col id=\"Code\">Column_3D_Stacked_Link</Col></Row><Row><Col id=\"Value\">3D 100%</Col><Col id=\"Code\">Column_3D_100Per</Col></Row><Row><Col id=\"Value\">Multi Series Stacked</Col><Col id=\"Code\">Column_2D_MS_Stacked</Col></Row><Row><Col id=\"Value\">Column 폭 제어</Col><Col id=\"Code\">Column_2D_Width_Control</Col></Row><Row><Col id=\"Value\">Column Multi 폭 제어</Col><Col id=\"Code\">Column_2D_MS_Width_Control</Col></Row><Row><Col id=\"Value\">Cylinder 3D</Col><Col id=\"Code\">Cylinder_3D</Col></Row><Row><Col id=\"Value\">Cylinder Multi Series 3D</Col><Col id=\"Code\">Cylinder_3D_MS</Col></Row><Row><Col id=\"Value\">Cylinder Stacked 3D</Col><Col id=\"Code\">Cylinder_3D_Stacked</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Bar", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">Bar</Col><Col id=\"Code\">Bar_2D</Col></Row><Row><Col id=\"Value\">Bar Negative</Col><Col id=\"Code\">Bar_2D_Negative</Col></Row><Row><Col id=\"Value\">Bar 3D</Col><Col id=\"Code\">Bar_3D</Col></Row><Row><Col id=\"Value\">Multi Series</Col><Col id=\"Code\">Bar_2D_MS</Col></Row><Row><Col id=\"Value\">Multi Series 3D</Col><Col id=\"Code\">Bar_3D_MS</Col></Row><Row><Col id=\"Value\">Stacked</Col><Col id=\"Code\">Bar_2D_Stacked</Col></Row><Row><Col id=\"Value\">Stacked(연결선)</Col><Col id=\"Code\">Bar_2D_Stacked_Link</Col></Row><Row><Col id=\"Value\">2D 100%</Col><Col id=\"Code\">Bar_2D_100Per</Col></Row><Row><Col id=\"Value\">Stacked 3D</Col><Col id=\"Code\">Bar_3D_Stacked</Col></Row><Row><Col id=\"Value\">3D 100%</Col><Col id=\"Code\">Bar_3D_100Per</Col></Row><Row><Col id=\"Value\">Multi Series Stacked</Col><Col id=\"Code\">Bar_2D_MS_Stacked</Col></Row><Row><Col id=\"Value\">Bar 폭 제어</Col><Col id=\"Code\">Bar_2D_Width_Control</Col></Row><Row><Col id=\"Value\">Bar Multi 폭 제어</Col><Col id=\"Code\">Bar_2D_MS_Width_Control</Col></Row><Row><Col id=\"Value\">Cylinder 3D</Col><Col id=\"Code\">Cylinder_Bar_3D</Col></Row><Row><Col id=\"Value\">Cylinder Stacked 3D</Col><Col id=\"Code\">Cylinder_Bar_3D_Stacked</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Area", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">Area</Col><Col id=\"Code\">Area_2D</Col></Row><Row><Col id=\"Value\">Stacked</Col><Col id=\"Code\">Area_2D_Stacked</Col></Row><Row><Col id=\"Value\">Multi Series</Col><Col id=\"Code\">Area_2D_MS</Col></Row><Row><Col id=\"Value\">Area BaseLine</Col><Col id=\"Code\">Area_2D_BaseLine</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Pie", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">Pie</Col><Col id=\"Code\">Pie_2D</Col></Row><Row><Col id=\"Value\">Pie 3D</Col><Col id=\"Code\">Pie_3D</Col></Row><Row><Col id=\"Value\">Stacked 3D</Col><Col id=\"Code\">Pie_3D_Stacked</Col></Row><Row><Col id=\"Value\">Pie with Wedge</Col><Col id=\"Code\">Pie_2D_Wedge</Col></Row><Row><Col id=\"Value\">Doughnut</Col><Col id=\"Code\">Doughnut_2D</Col></Row><Row><Col id=\"Value\">Doughnut 3D</Col><Col id=\"Code\">Doughnut_3D</Col></Row><Row><Col id=\"Value\">Half Doughnut 2D</Col><Col id=\"Code\">Half_Pie_2D</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Bubble", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">Bubble</Col><Col id=\"Code\">Bubble_3D</Col></Row><Row><Col id=\"Value\">Multi Series</Col><Col id=\"Code\">Bubble_3D_MS</Col></Row><Row><Col id=\"Value\">Bubble Transparency</Col><Col id=\"Code\">Bubble_3D_Transparency</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Plot", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">Plot</Col><Col id=\"Code\">Plot_2D</Col></Row><Row><Col id=\"Value\">Plot - 중심선</Col><Col id=\"Code\">Plot_2D_Ex</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Combination", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">Combination Area + Line</Col><Col id=\"Code\">Combi_2D_Single</Col></Row><Row><Col id=\"Value\">Combination 2D + Line</Col><Col id=\"Code\">Combination_2D_Line</Col></Row><Row><Col id=\"Value\">Combination 3D + Line</Col><Col id=\"Code\">Combination_3D_Line</Col></Row><Row><Col id=\"Value\">Combination 2D Multi Stacked + Line</Col><Col id=\"Code\">Combination_2D_Complex_Line</Col></Row><Row><Col id=\"Value\">Combination 2D Multi + Area + Line</Col><Col id=\"Code\">Combi_2D_Multi</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_FromTo", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">Steps</Col><Col id=\"Code\">From_To_Bar_2D</Col></Row><Row><Col id=\"Value\">From - To(Bar)</Col><Col id=\"Code\">From_To_Bar_3D</Col></Row><Row><Col id=\"Value\">From - To(Column)</Col><Col id=\"Code\">From_To_Column_3D</Col></Row><Row><Col id=\"Value\">From - To(Area)</Col><Col id=\"Code\">From_To_Area_2D</Col></Row><Row><Col id=\"Value\">From - To(Area Multi)</Col><Col id=\"Code\">From_To_Area_2D_MS</Col></Row><Row><Col id=\"Value\">WaterFall</Col><Col id=\"Code\">From_To_Column_2D</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Radar", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">Polygon - Fill</Col><Col id=\"Code\">Radar_Polygon</Col></Row><Row><Col id=\"Value\">Polygon - No Fill</Col><Col id=\"Code\">Radar_Polygon_NoFill</Col></Row><Row><Col id=\"Value\">Polygon - Fill 2</Col><Col id=\"Code\">Radar_Polygon_NoFill2</Col></Row><Row><Col id=\"Value\">Circle - Fill</Col><Col id=\"Code\">Radar_Circle</Col></Row><Row><Col id=\"Value\">Circle - No Fill</Col><Col id=\"Code\">Radar_Circle_NoFill</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Target", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">Cylinder 3D</Col><Col id=\"Code\">Target_3D</Col></Row><Row><Col id=\"Value\">Bar Cylinder 3D</Col><Col id=\"Code\">Target_Bar_3D</Col></Row><Row><Col id=\"Value\">Linear 2D</Col><Col id=\"Code\">Target_2D</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_History", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">Column</Col><Col id=\"Code\">History_2D</Col></Row><Row><Col id=\"Value\">Line</Col><Col id=\"Code\">History_2D_Line</Col></Row><Row><Col id=\"Value\">Column + Line</Col><Col id=\"Code\">History_2D_WL</Col></Row><Row><Col id=\"Value\"> Combination</Col><Col id=\"Code\">History_3D</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_RealTime", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">데이터 갯수 기준</Col><Col id=\"Code\">RealTime_Size_TimeAxis</Col></Row><Row><Col id=\"Value\">시간 기준</Col><Col id=\"Code\">RealTime_Time_TimeAxis</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Scroll", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">Column</Col><Col id=\"Code\">Scroll_Column_2D</Col></Row><Row><Col id=\"Value\">Column 3D</Col><Col id=\"Code\">Scroll_Column_3D</Col></Row><Row><Col id=\"Value\">Column Multi</Col><Col id=\"Code\">Scroll_Column_2D_MS</Col></Row><Row><Col id=\"Value\">Column Stacked</Col><Col id=\"Code\">Scroll_Column_2D_Stacked</Col></Row><Row><Col id=\"Value\">Bar Multi</Col><Col id=\"Code\">Scroll_Bar_2D_MS</Col></Row><Row><Col id=\"Value\">Bar Multi Inverted</Col><Col id=\"Code\">Scroll_Bar_2D_Inverted_MS</Col></Row><Row><Col id=\"Value\">Line Multi</Col><Col id=\"Code\">Scroll_Line_2D_MS</Col></Row><Row><Col id=\"Value\">Area</Col><Col id=\"Code\">Scroll_Area_2D</Col></Row><Row><Col id=\"Value\">Area Multi</Col><Col id=\"Code\">Scroll_Area_2D_MS</Col></Row><Row><Col id=\"Value\">Combination</Col><Col id=\"Code\">Scroll_Combination_2D</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Equalizer", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">Static Equalizer</Col><Col id=\"Code\">Equalizer</Col></Row><Row><Col id=\"Value\">Dynamic Equalizer</Col><Col id=\"Code\">Equalizer2</Col></Row><Row><Col id=\"Value\">Equalizer 폭 제어</Col><Col id=\"Code\">Equalizer_Width_Control</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_BrokenAxis", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">2D Column Broken Axis</Col><Col id=\"Code\">BrokenAxis_Column_2D</Col></Row><Row><Col id=\"Value\">2D Bar Broken Axis</Col><Col id=\"Code\">BrokenAxis_Bar_2D</Col></Row><Row><Col id=\"Value\">3D Column Broken Axis</Col><Col id=\"Code\">BrokenAxis_Column_3D</Col></Row><Row><Col id=\"Value\">3D Bar Broken Axis</Col><Col id=\"Code\">BrokenAxis_Bar_3D</Col></Row><Row><Col id=\"Value\">2D Line Broken Axis</Col><Col id=\"Code\">BrokenAxis_Line_2D</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Image", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">정배율 - 단일이미지(1)</Col><Col id=\"Code\">Image_Single_Ratio</Col></Row><Row><Col id=\"Value\">정배율 - 단일이미지(2)</Col><Col id=\"Code\">Image_Single_MS_Ratio</Col></Row><Row><Col id=\"Value\">차등배율 - 단일이미지(1)</Col><Col id=\"Code\">Image_Single_FRatio</Col></Row><Row><Col id=\"Value\">차등배율 - 단일이미지(2)</Col><Col id=\"Code\">Image_Single_FRatio2</Col></Row><Row><Col id=\"Value\">정배율 - 반복이미지(1)</Col><Col id=\"Code\">Image_SingleRepeat</Col></Row><Row><Col id=\"Value\">정배율 - 반복이미지(2)</Col><Col id=\"Code\">Image_SingleRepeat2</Col></Row><Row><Col id=\"Value\">차등배율 - 복수이미지(1)</Col><Col id=\"Code\">Image_Multiple</Col></Row><Row><Col id=\"Value\">차등배율 - 복수이미지(2)</Col><Col id=\"Code\">Image_Multiple2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ImageMatrix", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">ImageMatrix</Col><Col id=\"Code\">ImageMatrix</Col></Row><Row><Col id=\"Value\">ImageMatrix Multi</Col><Col id=\"Code\">ImageMatrix_Multi</Col></Row><Row><Col id=\"Value\">ImageMatrix Dual</Col><Col id=\"Code\">ImageMatrix_Dual</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Wing", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">Bar 2D Wing</Col><Col id=\"Code\">Bar_2D_Wing</Col></Row><Row><Col id=\"Value\">Bar 2D Wing Multi</Col><Col id=\"Code\">Bar_2D_Wing_Multi</Col></Row><Row><Col id=\"Value\">Bar 2D Wing Stacked</Col><Col id=\"Code\">Bar_2D_Wing_Stacked</Col></Row><Row><Col id=\"Value\">Bar 2D Wing 연결선 잇기</Col><Col id=\"Code\">Bar_2D_Wing_Stacked_Link</Col></Row><Row><Col id=\"Value\">Bar 2D Wing 100%</Col><Col id=\"Code\">Bar_2D_Wing_100Per</Col></Row><Row><Col id=\"Value\">Column 2D Wing</Col><Col id=\"Code\">Column_2D_Wing</Col></Row><Row><Col id=\"Value\">Column 2D Wing Multi</Col><Col id=\"Code\">Column_2D_Wing_Multi</Col></Row><Row><Col id=\"Value\">Column 2D Wing Stacked</Col><Col id=\"Code\">Column_2D_Wing_Stacked</Col></Row><Row><Col id=\"Value\">Column 2D Wing 연결선 잇기</Col><Col id=\"Code\">Column_2D_Wing_Stacked_Link</Col></Row><Row><Col id=\"Value\">Column 2D Wing 100%</Col><Col id=\"Code\">Column_2D_Wing_100Per</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_WindRose", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">WindRose</Col><Col id=\"Code\">WindRose</Col></Row><Row><Col id=\"Value\">WindRose Stacked</Col><Col id=\"Code\">WindRose_Stacked</Col></Row><Row><Col id=\"Value\">WindRose Transparency</Col><Col id=\"Code\">WindRose_Transparency</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Candlestick", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">Candlestick Chart</Col><Col id=\"Code\">Candlestick_Normal</Col></Row><Row><Col id=\"Value\">Candlestick Chart Reverse</Col><Col id=\"Code\">Candlestick_Reverse</Col></Row><Row><Col id=\"Value\">Candlestick Symbol</Col><Col id=\"Code\">Candlestick_Symbol</Col></Row><Row><Col id=\"Value\">Candlestick Symbol Another</Col><Col id=\"Code\">Candlestick_Symol_Another</Col></Row><Row><Col id=\"Value\">CandleLine Symbol</Col><Col id=\"Code\">CandleLine_Symbol</Col></Row><Row><Col id=\"Value\">CandleLine Baseline</Col><Col id=\"Code\">CandleLine_Baseline</Col></Row><Row><Col id=\"Value\">CandleArea Symbol</Col><Col id=\"Code\">CandleArea_Symbol</Col></Row><Row><Col id=\"Value\">CandleArea Baseline</Col><Col id=\"Code\">CandleArea_Baseline</Col></Row><Row><Col id=\"Value\">Candle Lazy Data</Col><Col id=\"Code\">Candle_Lazy_Data</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_TreeMap", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">TreeMap</Col><Col id=\"Code\">TreeMap</Col></Row><Row><Col id=\"Value\">TreeMap Range</Col><Col id=\"Code\">TreeMap_Range</Col></Row><Row><Col id=\"Value\">TreeMap Drilldown</Col><Col id=\"Code\">TreeMap_Drilldown</Col></Row><Row><Col id=\"Value\">TreeMap Industry</Col><Col id=\"Code\">TreeMap_Industry</Col></Row><Row><Col id=\"Value\">TreeMap Dynamic</Col><Col id=\"Code\">TreeMap_Dynamic</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_WordCloud", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">Word Cloud Eng</Col><Col id=\"Code\">WordCloud_Eng</Col></Row><Row><Col id=\"Value\">Word Cloud Kor</Col><Col id=\"Code\">WordCloud_Kor</Col></Row><Row><Col id=\"Value\">Word Cloud Data Change</Col><Col id=\"Code\">WordCloud_DataChange</Col></Row><Row><Col id=\"Value\">Greetings around the World</Col><Col id=\"Code\">WordCloud_Greetings_World</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Matrix", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">Matrix 기본형</Col><Col id=\"Code\">Matrix2D_Renderer</Col></Row><Row><Col id=\"Value\">Matrix Fill</Col><Col id=\"Code\">Matrix2D_Fill_2</Col></Row><Row><Col id=\"Value\">Matrix Plot</Col><Col id=\"Code\">Matrix2D_Plot</Col></Row><Row><Col id=\"Value\">Matrix Image</Col><Col id=\"Code\">Matrix2D_Image</Col></Row><Row><Col id=\"Value\">Matrix 렌더러 종류</Col><Col id=\"Code\">Matrix2D_Renderer_s</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Pyramid", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">Pyramid</Col><Col id=\"Code\">Pyramid</Col></Row><Row><Col id=\"Value\">Funnel 1</Col><Col id=\"Code\">Pyramid_Funnel</Col></Row><Row><Col id=\"Value\">Funnel 2</Col><Col id=\"Code\">Pyramid_Funnel2</Col></Row><Row><Col id=\"Value\">Pyramid &amp; Funnel</Col><Col id=\"Code\">Pyramid_Funnel3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_OverlayBubble", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">OverlayBubble</Col><Col id=\"Code\">OverlayBubble</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Histogram", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">성적 Histogram 2D</Col><Col id=\"Code\">Histogram_2D_Grade</Col></Row><Row><Col id=\"Value\">도수분포다각형 출력</Col><Col id=\"Code\">Histogram_2D_Grade_Polygon</Col></Row><Row><Col id=\"Value\">상대도수 출력</Col><Col id=\"Code\">Histogram_2D_Grade_Relative</Col></Row><Row><Col id=\"Value\">개인 키 Histogram 3D</Col><Col id=\"Code\">Histogram_3D_Height</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Vector", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">Vector Wind</Col><Col id=\"Code\">Vector_2D_Wind</Col></Row><Row><Col id=\"Value\">Vector Sea</Col><Col id=\"Code\">Vector_2D_Sea</Col></Row><Row><Col id=\"Value\">Vector Level</Col><Col id=\"Code\">Vector_2D_Level</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ErrorBar", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">Column ErrorBar</Col><Col id=\"Code\">Error_Column</Col></Row><Row><Col id=\"Value\">Line ErrorBar</Col><Col id=\"Code\">Error_Line</Col></Row><Row><Col id=\"Value\">Area ErrorBar</Col><Col id=\"Code\">Error_Area</Col></Row><Row><Col id=\"Value\">Bar ErrorBar</Col><Col id=\"Code\">Error_Bar</Col></Row><Row><Col id=\"Value\">Plot ErrorBar</Col><Col id=\"Code\">Error_Plot</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_BoxPlot", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">BoxPlot</Col><Col id=\"Code\">BoxPlot</Col></Row><Row><Col id=\"Value\">BoxPlot Multi</Col><Col id=\"Code\">BoxPlot_Multi</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Slide", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">기본 슬라이드</Col><Col id=\"Code\">Slide_Sample</Col></Row><Row><Col id=\"Value\">효과를 추가한 슬라이드</Col><Col id=\"Code\">Slide_Sample2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Motion", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">Bubble Motion</Col><Col id=\"Code\">Motion_Bubble</Col></Row><Row><Col id=\"Value\">Bubble Motion Trails</Col><Col id=\"Code\">Motion_Bubble_Trails</Col></Row><Row><Col id=\"Value\">Bubble Motion Multi</Col><Col id=\"Code\">Motion_Bubble_Multi</Col></Row><Row><Col id=\"Value\">Column Motion</Col><Col id=\"Code\">Motion_Column</Col></Row><Row><Col id=\"Value\">Column Motion Trails</Col><Col id=\"Code\">Motion_Column_Trails</Col></Row><Row><Col id=\"Value\">Column Motion Multi</Col><Col id=\"Code\">Motion_Column_Multi</Col></Row><Row><Col id=\"Value\">Line Motion</Col><Col id=\"Code\">Motion_Line</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_RealTimePremium", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">다른 주기의 실시간 데이터 표현</Col><Col id=\"Code\">RealTime_Premium_Line_Column</Col></Row><Row><Col id=\"Value\">전일과 금일의 실시간 비교</Col><Col id=\"Code\">RealTime_Premium_10Int</Col></Row><Row><Col id=\"Value\">서로 다른 주기의 실시간 통합 비교</Col><Col id=\"Code\">RealTime_Premium_25Base</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SimpleGauge", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">SimpleGauge</Col><Col id=\"Code\">Gauge_Simple</Col></Row><Row><Col id=\"Value\">Half SimpleGuage</Col><Col id=\"Code\">Gauge_Half</Col></Row><Row><Col id=\"Value\">Multi SimpleGauge</Col><Col id=\"Code\">Gauge_Multi</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Gauge", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">Circular Orange</Col><Col id=\"Code\">Gauge_Circular_Orange</Col></Row><Row><Col id=\"Value\">Circular Rainbow</Col><Col id=\"Code\">Gauge_Circular_Rainbow</Col></Row><Row><Col id=\"Value\">Circular Gradient</Col><Col id=\"Code\">Gauge_Circular_Gradient</Col></Row><Row><Col id=\"Value\">Circular Dual</Col><Col id=\"Code\">Gauge_Circular_Dual</Col></Row><Row><Col id=\"Value\">Half-Circular Rainbow1</Col><Col id=\"Code\">Gauge_Half_Rainbow1</Col></Row><Row><Col id=\"Value\">Half-Circular Rainbow2</Col><Col id=\"Code\">Gauge_Half_Rainbow2</Col></Row><Row><Col id=\"Value\">Half-Circular Notice</Col><Col id=\"Code\">Gauge_Half_Notice</Col></Row><Row><Col id=\"Value\">Half-Circular Gradient</Col><Col id=\"Code\">Gauge_Half_Gradient</Col></Row><Row><Col id=\"Value\">Horizontal Gauge</Col><Col id=\"Code\">Gauge_Horizontal</Col></Row><Row><Col id=\"Value\">Vertical Gauge</Col><Col id=\"Code\">Gauge_Vertical</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00","10","150",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","29","82","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Chart Type");
            obj.set_textAlign("center");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbType","178","82","50.00%","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("Code");
            obj.set_datacolumn("Value");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","914","22","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("url(\'imagerc::close.png\') no-repeat center center");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle","29","22","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_font("normal bold 18pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgPageLoading","10","150","1004","560",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_image("url(\'imagerc::page_loading.gif\')");
            obj.set_background("transparent");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("chartPop.xfdl", function() {
        /************************************************************************
         * event : 페이지 로드
         ************************************************************************/
        this.chartPop_onload = function(obj,e)
        {
        	var sType = this.parent.chartType;

        	this.stcTitle.set_text(sType + " Chart");
        	this.cmbType.set_innerdataset("ds_" +  sType);
        	this.cmbType.set_index(0);

        	var url = this.objects["ds_" + sType].getColumn(0, "Code");
        	this.fn_changeUrl(url);
        };

        /************************************************************************
         * event : 웹브라우저 로드 후
         ************************************************************************/
        this.WebBrowser00_onloadcompleted = function(obj,e)
        {
        	this.imgPageLoading.set_visible(false);
        };

        // function : rChart 페이지 url 변경시
        this.fn_changeUrl = function(sUrl)
        {
        	this.imgPageLoading.set_visible(true);
        	this.WebBrowser00.set_url(nexacro.getProjectPath() + "../rChart/Samples/" + sUrl + ".html");
        };

        /************************************************************************
         * event : 콤보 아이템 변경
         ************************************************************************/
        this.cmbType_onitemchanged = function(obj,e)
        {
        	this.fn_changeUrl(e.postvalue);
        };

        /************************************************************************
         * event : 종료 버튼 클릭
         ************************************************************************/
        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.chartPop_onload,this);
            this.WebBrowser00.addEventHandler("onloadcompleted",this.WebBrowser00_onloadcompleted,this);
            this.cmbType.addEventHandler("onitemchanged",this.cmbType_onitemchanged,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("chartPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
