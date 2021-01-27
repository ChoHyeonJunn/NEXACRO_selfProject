//==============================================================================
//	Define the Component Class of the Compostie Component.
//==============================================================================
//==============================================================================
// Object : nexacro.TowMonthCalendar
// Group : Component
//==============================================================================
if (!nexacro.TowMonthCalendar)
{
	//==============================================================================
	// nexacro.TowMonthCalendar
	//==============================================================================
	nexacro.TowMonthCalendar = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
	{
		nexacro._CompositeComponent.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
		this.addEvent("onchanged");
	};
	
	var _pTowMonthCalendar = nexacro._createPrototype(nexacro._CompositeComponent, nexacro.TowMonthCalendar);
	nexacro.TowMonthCalendar.prototype = _pTowMonthCalendar;
	_pTowMonthCalendar._type_name = "TowMonthCalendar";
	
	// Property : fromValue
	_pTowMonthCalendar.fromValue = undefined;
	_pTowMonthCalendar.set_fromValue = function (v)
	{
		if(this.form.PopupDiv00.calFrom)
		{
			this.form.PopupDiv00.calFrom.set_value(v);
		}
		this.fromValue = v;
	};
	
	// Property : toValue
	_pTowMonthCalendar.toValue = undefined;
	_pTowMonthCalendar.set_toValue = function (v)
	{
		if(this.form.PopupDiv00.calTo)
		{
			this.form.PopupDiv00.calTo.set_value(v);
		}
		this.toValue = v;
	};
	
	// Method : getDayCount
	_pTowMonthCalendar.getDayCount = function ()
	{
		var fromDate = new Date();
		var toDate = new Date();
		var calDate;
		var day = 1000*60*60*24;
		var returnvalue = -1;
		
		if(this.form.PopupDiv00.form.calFrom.value && this.form.PopupDiv00.form.calTo.value)
		{
			fromDate.setFullYear(this.form.PopupDiv00.form.calFrom.getYear());
			fromDate.setMonth(this.form.PopupDiv00.form.calFrom.getMonth()-1);
			fromDate.setDate(this.form.PopupDiv00.form.calFrom.getDay());
			
			toDate.setFullYear(this.form.PopupDiv00.form.calTo.getYear());
			toDate.setMonth(this.form.PopupDiv00.form.calTo.getMonth()-1);
			toDate.setDate(this.form.PopupDiv00.form.calTo.getDay());
			
			calDate = fromDate.getTime() - toDate.getTime();
			trace("calDate: " + calDate);
			
			returnvalue = Math.abs(calDate/day);
		}
		
		// trace("returnvalue: "+returnvalue);
		return returnvalue;
	};	
	
	// event : onchanged
	_pTowMonthCalendar.on_fire_onchanged = function (obj, pretext, prevalue, posttext, postvalue)
	{
		if (this.onchanged && this.onchanged._has_handlers)
		{
			var evt = new nexacro.ChangeEventInfo(obj, "onchanged", pretext, prevalue, posttext, postvalue); //TODO
			return this.onchanged.fireEvent(this, evt);
		}
		return false;
		
	};	
	
	/************************************************************************
	FUNCTION : _get_form_module
	DESCRIPTION :
	RETURN :
	************************************************************************/
	_pTowMonthCalendar._get_form_module = function ()
	{
		return function()
		{
			if (!this._is_form)
			return;
			
			var obj = null;
			
			this.on_create = function()
			{
				this.set_name("TowMonthCalendar");
				this.set_titletext("TowMonthCalendar");
				this.set_scrolltype("none");
				if (nexacro.Form == this.constructor)
				{
					this._setFormPosition(385,20);
				}
				
				// Object(Dataset, ExcelExportObject) Initialize
				obj = new nexacro.NormalDataset("dsFromToDate", this);
				obj._setContents("<ColumnInfo><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"background\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
				this.addChild(obj.name, obj);
				
				// UI Components Initialize
				obj = new nexacro.PopupDiv("PopupDiv00","0","27","387","186",null,null,null,null,null,null,this);
				obj.set_text("PopupDiv00");
				obj.set_visible("false");
				this.addChild(obj.name, obj);
				
				obj = new nexacro.Calendar("calFrom","0","0","190","180",null,null,null,null,null,null,this.PopupDiv00.form);
				obj.set_taborder("0");
				obj.set_type("monthonly");
				obj.set_innerdataset("dsFromToDate");
				obj.set_backgroundcolumn("background");
				obj.set_datecolumn("date");
				this.PopupDiv00.addChild(obj.name, obj);
				
				obj = new nexacro.Calendar("calTo","195","0","190","180",null,null,null,null,null,null,this.PopupDiv00.form);
				obj.set_taborder("1");
				obj.set_type("monthonly");
				obj.set_innerdataset("dsFromToDate");
				obj.set_backgroundcolumn("background");
				obj.set_datecolumn("date");
				this.PopupDiv00.addChild(obj.name, obj);
				
				obj = new nexacro.Calendar("calFromN","0","0","190","20",null,null,null,null,null,null,this);
				obj.set_taborder("1");
				obj.set_type("normal");
				obj.set_popuptype("none");
				this.addChild(obj.name, obj);
				
				obj = new nexacro.Calendar("calToN","195","0","190","20",null,null,null,null,null,null,this);
				obj.set_taborder("2");
				obj.set_type("normal");
				obj.set_popuptype("none");
				this.addChild(obj.name, obj);
				// Layout Functions
				//-- Default Layout : this
				obj = new nexacro.Layout("default","",385,20,this,function(p){});
				this.addLayout(obj.name, obj);
				
				// BindItem Information
				
			};
			
			this.loadPreloadList = function()
			{
				
			};
			
			// User Script
			this.registerScript("TowMonthCalendar.xcdl", function() {
					
					/************************************************************************
					* event : 드롭다운
					************************************************************************/
					this.calFromN_ondropdown = function(obj,e)
					{
						var nX = 0;
						var nY = obj.getOffsetHeight();
						this.PopupDiv00.trackPopupByComponent(this.calFromN, nX, nY);
					};
					
					
					
					
					
					/************************************************************************
					* event : calFrom_ondayclick
					************************************************************************/
					this.PopupDiv00_calFrom_ondayclick = function(obj,e)
					{
						var pretext = this.arrFromToDate[0];
						var prevalue = this.arrFromToDate[0];
						
						if(this.parent.toValue != undefined && e.date > this.parent.toValue) {
							//this.alert("종료일 보다 큰 값을 설정할 수 없습니다");
							return;
						}
						this.parent.set_fromValue(e.date);
						this.calFromN.set_value(this.parent.fromValue);
						this.PopupDiv00.form.calFrom.set_value(this.parent.fromValue);
						
						this.arrFromToDate[0] = this.parent.fromValue;
						this.fnSetColor(this.parent.fromValue);
						
						//     this.parent.on_fire_onchanged(obj, pretext, prevalue, e.date, e.date);
						// 	trace(obj)
						// 	trace(pretext)
						// 	trace(prevalue)
						// 	trace(e.date)
						// 	trace(e.date)
					};
					
					/************************************************************************
					* event : calTo_ondayclick
					************************************************************************/
					this.PopupDiv00_calTo_ondayclick = function(obj,e)
					{
						var pretext = this.arrFromToDate[1];
						var prevalue = this.arrFromToDate[1];
						
						if(this.parent.fromValue != undefined && e.date < this.parent.fromValue) {
							//this.alert("시작일 보다 작은 값을 설정할 수 없습니다");
							return;
						}
						this.parent.set_toValue(e.date);
						this.calToN.set_value(this.parent.toValue);
						this.PopupDiv00.form.calTo.set_value(this.parent.toValue);
						
						this.arrFromToDate[1] = this.parent.toValue;
						this.fnSetColor(this.parent.toValue);
						
						//     this.parent.on_fire_onchanged(obj, pretext, prevalue, e.date, e.date);
						// 	trace(obj)
						// 	trace(pretext)
						// 	trace(prevalue)
						// 	trace(e.date)
						// 	trace(e.date)
					};
					
					//시작일/종료일 저장용 Array
					this.arrFromToDate = ['',''];
					
					this.PopupDiv00_calFrom_onchanged = function(obj,e)
					{
						this.parent.on_fire_onchanged(obj, e.pretext, e.prevalue, e.posttext, e.postvalue);
					};
					
					this.PopupDiv00_calTo_onchanged = function(obj,e)
					{
						this.parent.on_fire_onchanged(obj, e.pretext, e.prevalue, e.posttext, e.postvalue);
					};
					
					/************************************************************************
					* event : calFromN_onchanged
					************************************************************************/
					this.calFromN_onchanged = function(obj,e)
					{
						if(this.parent.toValue != undefined && e.postvalue > this.parent.toValue) {
							//this.alert("종료일 보다 큰 값을 설정할 수 없습니다");
							obj.set_value(e.prevalue);
							return;
						}
						this.parent.set_fromValue(e.postvalue);
						this.calFromN.set_value(this.parent.fromValue);
						this.PopupDiv00.form.calFrom.set_value(this.parent.fromValue);
						
						this.arrFromToDate[0] = this.parent.fromValue;
						this.fnSetColor(this.parent.fromValue);
						
						this.parent.on_fire_onchanged(obj, e.pretext, e.prevalue, e.posttext, e.postvalue);
					};
					
					/************************************************************************
					* event : calToN_onchanged
					************************************************************************/
					this.calToN_onchanged = function(obj,e)
					{
						if(this.parent.fromValue != undefined && e.postvalue < this.parent.fromValue) {
							//this.alert("시작일 보다 작은 값을 설정할 수 없습니다");
							obj.set_value(e.prevalue);
							return;
						}
						this.parent.set_toValue(e.postvalue);
						this.calToN.set_value(this.parent.toValue);
						this.PopupDiv00.form.calTo.set_value(this.parent.toValue);
						
						this.arrFromToDate[1] = this.parent.toValue;
						this.fnSetColor(this.parent.toValue);
						
						this.parent.on_fire_onchanged(obj, e.pretext, e.prevalue, e.posttext, e.postvalue);
					};
					
					/**
					* @description 	     : 날짜 변경 함수
					* @param date   	 : 설정할 날짜 값
					* @return            : 없음
					*/
					this.fnSetColor = function(date)
					{
						var i;
						var nRow;
						var sStartDate;
						var sEndDate;
						var sTargetDate;
						var nDiffDateCount;
						var sStartBgColor = "#00aa00"; //시작일 표시 BackgroundColor
						var sBetweenBgColor = "#00ff00"; //선택일자 사이에 표시할 BackgroundColor
						var sEndBgColor = "#00aa00"; //종료일 표시 BackgroundColor
						
						
						this.dsFromToDate.set_enableevent(false); //성능 개선을 위해 enableevent 처리 시작
						
						//날짜 표시 데이터셋 값 초기화
						this.dsFromToDate.clearData();
						
						if(this.arrFromToDate.length[0] != '')
						{
							nRow = this.dsFromToDate.addRow();
							this.dsFromToDate.setColumn(nRow, "date", date);
							this.dsFromToDate.setColumn(nRow, "background", sStartBgColor);
						}
						if(this.arrFromToDate.length[1] != '')
						{
							nRow = this.dsFromToDate.addRow();
							this.dsFromToDate.setColumn(nRow, "date", date);
							this.dsFromToDate.setColumn(nRow, "background", sEndBgColor);
						}
						
						//설정값이 시작일, 종료일 모두 있을 경우
						if(this.arrFromToDate.length[0] != '' && this.arrFromToDate.length[1] != '')
						{
							sStartDate = this.arrFromToDate[0];
							sEndDate = this.arrFromToDate[1];
							
							nDiffDateCount = this.fnGetDiffDay(sStartDate, sEndDate);
							
							for(i=0;i<=nDiffDateCount;i++)
							{
								sTargetDate = this.fnAddDate(sStartDate, i);
								nRow = this.dsFromToDate.addRow();
								this.dsFromToDate.setColumn(nRow, "date", sTargetDate);
								
								//시작일에 Background Color 설정
								if(i==0)this.dsFromToDate.setColumn(nRow, "background", sStartBgColor);
								
								//선택일자 사이일 Background Color 설정
								else if(i==nDiffDateCount)this.dsFromToDate.setColumn(nRow, "background", sEndBgColor);
								
								//종료일에 Background Color 설정
								else this.dsFromToDate.setColumn(nRow, "background", sBetweenBgColor);
							}
						}
						
						this.dsFromToDate.set_enableevent(true); //성능 개선을 위해 enableevent 처리 끝
					}
					
					// function : 두개의 날짜를 비교하여 차이를 알려준다.
					this.fnGetDiffDay = function(fromDate, toDate)
					{
						fromDate = new Date(parseInt(fromDate.substring(0,4),  10), parseInt(fromDate.substring(4,6)-1,  10), parseInt(fromDate.substring(6,8), 10));
						toDate   = new Date(parseInt(toDate.substring(0,4),  10), parseInt(toDate.substring(4,6)-1,  10), parseInt(toDate.substring(6,8), 10));
						
						var diff = Math.abs(toDate.getTime() - fromDate.getTime());
						diff = Math.ceil(diff / (1000 * 3600 * 24));
						
						return diff;
					}
					// function : 일자 더하기
					this.fnAddDate = function(fromDate, i)
					{
						var date = new Date(parseInt(fromDate.substring(0,4),  10), parseInt(fromDate.substring(4,6)-1,  10), parseInt(fromDate.substring(6,8), 10));
						date.setDate(date.getDate() + i);
						return this.getFormatDate(date);
					}
					// function : yyyyMMdd 포맷으로 반환
					this.getFormatDate = function(date){
						var year = date.getFullYear();              //yyyy
						var month = (1 + date.getMonth());          //M
						month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
						var day = date.getDate();                   //d
						day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
						return  year + '' + month + '' + day;       //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
					}
					
					
					
					
				});
			
			// Regist UI Components Event
			this.on_initEvent = function()
			{
				this.PopupDiv00.form.calFrom.addEventHandler("onchanged",this.PopupDiv00_calFrom_onchanged,this);
				this.PopupDiv00.form.calFrom.addEventHandler("ondayclick",this.PopupDiv00_calFrom_ondayclick,this);
				this.PopupDiv00.form.calTo.addEventHandler("onchanged",this.PopupDiv00_calTo_onchanged,this);
				this.PopupDiv00.form.calTo.addEventHandler("ondayclick",this.PopupDiv00_calTo_ondayclick,this);
				this.calFromN.addEventHandler("ondropdown",this.calFromN_ondropdown,this);
				this.calFromN.addEventHandler("onchanged",this.calFromN_onchanged,this);
				this.calToN.addEventHandler("ondropdown",this.calFromN_ondropdown,this);
				this.calToN.addEventHandler("onchanged",this.calToN_onchanged,this);
			};
			this.loadIncludeScript("TowMonthCalendar.xcdl");
			this.loadPreloadList();
			
			// Remove Reference
			obj = null;
		};
	};
	
	delete _pTowMonthCalendar;
}
