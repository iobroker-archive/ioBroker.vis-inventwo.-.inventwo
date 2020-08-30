<!--
	ioBroker.vis vis-inventwo Widget-Set
	version: "2.0.0"
	Copyright 2020 jkvarel jkvarel@inventwo.com
-->

<link rel="stylesheet" href="widgets/vis-inventwo/css/style.css" />
	<script type="text/javascript" src="widgets/vis-inventwo/js/vis-inventwo.js"></script>

	<script id="i-vis-universal"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/0_Universal.png">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;
iUniversalWidgetTypeInfo/custom,vis-inventwo.infoText,universalTypeInfo;
iUniversalWidgetType[Switch]/nselect,Switch,State,Navigation,Background/updateUniversalDataFields();
iRefreshDataFieldsInfo/custom,vis-inventwo.infoText,refreshDataFieldsText;
iRefreshDataFields/custom,vis-inventwo.refreshDataFieldBtn,this.data.iUniversalWidgetType;
nav_view;
oid/id;
iValueType[boolean]/select,boolean,value;
iValueTypeInfo/custom,vis-inventwo.infoText,valueType;
iValueFalse/text;
iValueTrue/text;
value/text;
iTextFalse/html;
iTextTrue/html;
iImageFalse/image;
iImageTrue/image;
iStateResponseTime[0]/slider,0,2000,100;
iNavWait[100]/number;"
data-vis-attrs0="group.i-css;
iText-BackgroundSettings/custom,vis-inventwo.infoText,emptyText;
iButtonCol[#333333]/color;
iButtonActive[#455618]/color;
iOpacityBack[1]/slider,0,1,0.1;

iText-CornerSettings/custom,vis-inventwo.infoText,emptyText;
iCornerRadiusUL[12]/slider,0,50,1;
iCornerRadiusUR[0]/slider,0,50,1;
iCornerRadiusLR[12]/slider,0,50,1;
iCornerRadiusLL[0]/slider,0,50,1;

iText-ContentSettings/custom,vis-inventwo.infoText,emptyText;
iContentFlexDirection[vertical]/select,horizontal,vertical;
iContentVertAlign[iSpace-between]/select,iStart,iCenter,iEnd,iSpace-between;
iContentOrder[orderImgText]/select,orderTextImg,orderImgText;
iOpacityCtn[1]/slider,0,1,0.1;

iText-TextSettings/custom,vis-inventwo.infoText,emptyText;
iTextColor[#ffffff]/color;
iTextSize[12]/slider,0,50,1;
iTextAlign[iStart]/select,iStart,iCenter,iEnd;
iTextSpaceTop[0]/slider,0,50,1;
iTextSpaceBottom[0]/slider,0,50,1;
iTextSpaceLeft[0]/slider,0,50,1;
iTextSpaceRight[0]/slider,0,50,1;

iText-ImageSettings/custom,vis-inventwo.infoText,emptyText;
iIconSize[35]/slider,0,200,1;
iImgAlign[iCenter]/select,iStart,iCenter,iEnd;
iImgRotation[0]/slider,0,180,1;
iImgSpaceTop[5]/slider,0,50,1;
iImgSpaceBottom[0]/slider,0,50,1;
iImgSpaceLeft[0]/slider,0,50,1;
iImgSpaceRight[0]/slider,0,50,1;
iInvertImageCol/checkbox;
iFlipImage/checkbox;
iImgBlinkFalse[0]/slider,0,2000,100;
iImgBlinkTrue[0]/slider,0,2000,100;

iText-ShadowSettings/custom,vis-inventwo.infoText,emptyText;
iShadowXOffset[2]/slider,0,20,1;
iShadowYOffset[2]/slider,0,20,1;
iShadowBlur[2]/slider,0,20,1;
iShadowSpread[1]/slider,0,20,1;
iShadowColor[#111111]/color;
iShadowColorActive[#111111]/color;

iText-ShadowInnerSettings/custom,vis-inventwo.infoText,emptyText;
iShadowInnerXOffset[0]/slider,0,20,1;
iShadowInnerYOffset[0]/slider,0,20,1;
iShadowInnerBlur[0]/slider,0,20,1;
iShadowInnerSpread[0]/slider,0,20,1;
iShadowInnerColor[#111111]/color;
iShadowInnerColorActive[#111111]/color;

iText-BorderSettings/custom,vis-inventwo.infoText,emptyText;
iBorderSize[0]/slider,0,20,1;
iBorderStyle[none]/nselect,dotted,dashed,solid,double,groove,ridge,inset,outset,none;
iBorderColor[#ffffff]/color;
iBorderColorActive[#ffffff]/color;"
data-vis-set="vis-inventwo"
data-vis-type="ctrl"
data-vis-name="Universal">

	<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" style="width:110px; height:110px; overflow:visible; cursor:pointer;z-index:1" id="<%= this.data.attr('wid') %>">
<%= (el) -> vis.binds['vis-inventwo'].universalButton(el, this.data,'universal') %>
	</div>

	</script>

	<script id="i-vis-multi"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/0_Multi.png">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;
iUniversalWidgetTypeInfo/custom,vis-inventwo.infoText,universalTypeInfo;
iUniversalWidgetType[Switch]/nselect,Switch,State,Navigation,Background/updateUniversalDataFields();
iRefreshDataFieldsInfo/custom,vis-inventwo.infoText,refreshDataFieldsText;
iRefreshDataFields/custom,vis-inventwo.refreshDataFieldBtn,this.data.iUniversalWidgetType;
nav_view;
iOidToggle/id;
iValueType[boolean]/select,boolean,value;
iValueTypeInfo/custom,vis-inventwo.infoText,valueType;
iValueFalse/text;
iValueTrue/text;
value/text;
iTextFalse/html;
iImageFalse/image;
iImgBlinkFalse[0]/slider,0,2000,100;
iStateResponseTime[0]/slider,0,2000,100;
iNavWait[100]/number;"
data-vis-attrs0="iUniversalValueCount[1]/number,1,20,1;group.iUniversalValues/byindex/updateUniversalDataFields();
iView(1-iUniversalValueCount)/views;
iOidState(1-iUniversalValueCount)/id;
iValue(1-iUniversalValueCount)/text;
iTextTrue(1-iUniversalValueCount)/html;
iImageTrue(1-iUniversalValueCount)/image;
iImgBlinkTrue(1-iUniversalValueCount)[0]/slider,0,2000,100;
iButtonActiveM(1-iUniversalValueCount)[#455618]/color;
iShadowColorActiveM(1-iUniversalValueCount)[#111111]/color;
iShadowInnerColorActiveM(1-iUniversalValueCount)[#111111]/color;
iBorderColorActiveM(1-iUniversalValueCount)[#ffffff]/color;"
data-vis-attrs1="group.i-css;
iText-BackgroundSettings/custom,vis-inventwo.infoText,emptyText;
iButtonCol[#333333]/color;
iOpacityBack[1]/slider,0,1,0.1;

iText-CornerSettings/custom,vis-inventwo.infoText,emptyText;
iCornerRadiusUL[12]/slider,0,50,1;
iCornerRadiusUR[0]/slider,0,50,1;
iCornerRadiusLR[12]/slider,0,50,1;
iCornerRadiusLL[0]/slider,0,50,1;

iText-ContentSettings/custom,vis-inventwo.infoText,emptyText;
iContentFlexDirection[vertical]/select,horizontal,vertical;
iContentVertAlign[iSpace-between]/select,iStart,iCenter,iEnd,iSpace-between;
iContentOrder[orderImgText]/select,orderTextImg,orderImgText;
iOpacityCtn[1]/slider,0,1,0.1;

iText-TextSettings/custom,vis-inventwo.infoText,emptyText;
iTextColor[#ffffff]/color;
iTextSize[12]/slider,0,50,1;
iTextAlign[iStart]/select,iStart,iCenter,iEnd;
iTextSpaceTop[0]/slider,0,50,1;
iTextSpaceBottom[0]/slider,0,50,1;
iTextSpaceLeft[0]/slider,0,50,1;
iTextSpaceRight[0]/slider,0,50,1;

iText-ImageSettings/custom,vis-inventwo.infoText,emptyText;
iIconSize[35]/slider,0,200,1;
iImgAlign[iCenter]/select,iStart,iCenter,iEnd;
iImgRotation[0]/slider,0,180,1;
iImgSpaceTop[5]/slider,0,50,1;
iImgSpaceBottom[0]/slider,0,50,1;
iImgSpaceLeft[0]/slider,0,50,1;
iImgSpaceRight[0]/slider,0,50,1;
iInvertImageCol/checkbox;
iFlipImage/checkbox;
iImgBlinkFalse[0]/slider,0,2000,100;

iText-ShadowSettings/custom,vis-inventwo.infoText,emptyText;
iShadowXOffset[2]/slider,0,20,1;
iShadowYOffset[2]/slider,0,20,1;
iShadowBlur[2]/slider,0,20,1;
iShadowSpread[1]/slider,0,20,1;
iShadowColor[#111111]/color;

iText-ShadowInnerSettings/custom,vis-inventwo.infoText,emptyText;
iShadowInnerXOffset[0]/slider,0,20,1;
iShadowInnerYOffset[0]/slider,0,20,1;
iShadowInnerBlur[0]/slider,0,20,1;
iShadowInnerSpread[0]/slider,0,20,1;
iShadowInnerColor[#111111]/color;

iText-BorderSettings/custom,vis-inventwo.infoText,emptyText;
iBorderSize[0]/slider,0,20,1;
iBorderStyle[none]/nselect,dotted,dashed,solid,double,groove,ridge,inset,outset,none;
iBorderColor[#ffffff]/color;"
data-vis-set="vis-inventwo"
data-vis-type="ctrl"
data-vis-name="Multi">

	<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" style="width:110px; height:110px; overflow:visible; cursor:pointer;z-index:1" id="<%= this.data.attr('wid') %>">
<%= (el) -> vis.binds['vis-inventwo'].universalButton(el, this.data,'multi') %>
	</div>

	</script>

	<script id="i-vis-slider-simple"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/0_Slider1b.png">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;oid/id;iMinVal[1]/number;iMaxVal[100]/number;iStepVal[1]/slider,0,100,0.1;iSliderRotation[0]/slider,-45,45,1;iSliderLabel/text;iShowMinMax/checkbox;iShowValue/checkbox;iValuePreText/text;"
data-vis-attrs0="group.i-css;iSliderHeight[10]/slider,1,200,1;iSliderKnobSize[20]/slider,1,200,1;iSliderColor[#ffffff]/color;iSliderKnobColor[#455618]/color;iSliderTextColor[#ffffff]/color;iValueTextColor[#455618]/color;iTextSize[12]/slider,0,50,1;iSliderCorners[100]/slider,0,100,1;iSliderKnobCorners[100]/slider,0,100,1;"
data-vis-set="vis-inventwo"
data-vis-type="ctrl"
data-vis-name="Simple Slider horizontal">

	<%

	let elHeight;
let topSpace = 0;
if((this.data.iSliderKnobSize < this.data.iTextSize) && this.data.iShowMinMax){
	elHeight = elHeight = parseInt(this.data.iTextSize) * 2 + 15;
	topSpace = parseInt(this.data.iTextSize) / 2;
}
else{
	elHeight = parseInt(this.data.iSliderKnobSize) + parseInt(this.data.iTextSize) + 15;
	topSpace = parseInt(this.data.iSliderKnobSize) / 2;
}

%>

<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" id="<%= this.data.attr('wid') %>"
style="width:200px; height:<%= elHeight%>px; overflow:visible; cursor:pointer;font-size:<%= this.data.iTextSize %>px;color:<%= this.data.iSliderTextColor %>;z-index:1" >
	<div class="vis-inventwo-class vis-widget-body <%== this.data.attr('class') %> " style="position:relative; height: auto; display:flex;align-items:center;flex-wrap:wrap; top:<%= topSpace%>px;">

	<% if(this.data.iShowMinMax){ %>
<div style="margin-right: <%= (parseInt(this.data.iSliderKnobSize) / 2) + 5 %>px"><%= this.data.iMinVal %></div>

		<div style="top:50%;flex-grow:1; border: 0px; border-radius: <%= this.data.iSliderCorners %>px;background: <%= this.data.iSliderColor %>; height: <%= this.data.iSliderHeight %>px;"
	<%= (el) -> vis.binds['vis-inventwo'].handleSlider(el, this.data,{orientation:"horizontal"}) %> ></div>

		<div style="margin-left: <%= (parseInt(this.data.iSliderKnobSize) / 2) + 5 %>px"><%= this.data.iMaxVal %></div>

		<% } else { %>
<div style="top:50%;flex-grow:1; border: 0px; border-radius: <%= this.data.iSliderCorners %>px;background: <%= this.data.iSliderColor %>; height: <%= this.data.iSliderHeight %>px; margin: 0 <%= this.data.iShowMinMax %>px;"
	<%= (el) -> vis.binds['vis-inventwo'].handleSlider(el, this.data,{orientation:"horizontal"}) %> ></div>

		<% } %>

</div>

<div style="position:absolute; left:0px; bottom:0px;"><%= this.data.iSliderLabel %></div>
	<% if(this.data.iShowValue){ %>
<div style="position:absolute; right:0px; bottom:0px;color:<%= this.data.iValueTextColor%>"><%== this.data.iValuePreText%><%= vis.states.attr(this.data.oid + '.val') %></div>
		<% } %>

</div>
</script>
<script id="i-vis-slider-simple-2"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/0_Slider2b.png">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;oid/id;iMinVal[1]/number;iMaxVal[100]/number;iStepVal[1]/slider,0,100,0.1;iSliderRotation[0]/slider,-45,45,1;iSliderLabel/text;iShowMinMax/checkbox;iShowValue/checkbox;iValuePreText/text;"
data-vis-attrs0="group.i-css;iSliderHeight[10]/slider,1,200,1;iSliderKnobSize[20]/slider,1,200,1;iSliderColor[#ffffff]/color;iSliderKnobColor[#455618]/color;iSliderTextColor[#ffffff]/color;iValueTextColor[#455618]/color;iTextSize[12]/slider,0,50,1;iSliderCorners[100]/slider,0,100,1;iSliderKnobCorners[100]/slider,0,100,1;"
data-vis-set="vis-inventwo"
data-vis-type="ctrl"
data-vis-name="Simple Slider vertical">


	<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" id="<%= this.data.attr('wid') %>"
style="height:200px; width:<%= this.data.iSliderHeight%>px; overflow:visible; cursor:pointer;font-size:<%= this.data.iTextSize %>px;color:<%= this.data.iSliderTextColor %>;z-index:1" >

	<div class="vis-inventwo-class vis-widget-body <%== this.data.attr('class') %> " style="position:relative; height: 100%;display: flex;flex-direction: column;align-items: center;">

	<% if(this.data.iShowMinMax){ %>
<% if(this.data.iShowValue){ %>
	<div><span style="color:<%= this.data.iValueTextColor%>"><%== this.data.iValuePreText%></span></div>
		<div style="margin-bottom: <%= (parseInt(this.data.iSliderKnobSize) / 2) + 5 %>px">
			<span style="color:<%= this.data.iValueTextColor%>"><%= vis.states.attr(this.data.oid + '.val') %> / </span><%= this.data.iMaxVal %>
			</div>
			<% } else { %>
	<div style="margin-bottom: <%= (parseInt(this.data.iSliderKnobSize) / 2) + 5 %>px"><%= this.data.iMaxVal %></div>
			<% } %>

<div style="border: 0px; border-radius: <%= this.data.iSliderCorners %>px;background: <%= this.data.iSliderColor %>; width: <%= this.data.iSliderHeight %>px;flex-grow:1"
	<%= (el) -> vis.binds['vis-inventwo'].handleSlider(el, this.data,{orientation:"vertical"}) %> ></div>

		<div style="margin-top: <%= (parseInt(this.data.iSliderKnobSize) / 2) + 5 %>px"><%= this.data.iMinVal %></div>
	<div><%= this.data.iSliderLabel %></div>

		<% } else { %>
<div style="border: 0px; border-radius: <%= this.data.iSliderCorners %>px;background: <%= this.data.iSliderColor %>; width: <%= this.data.iSliderHeight %>px;flex-grow:1"
	<%= (el) -> vis.binds['vis-inventwo'].handleSlider(el, this.data,{orientation:"vertical"}) %> ></div>

		<div style="margin-top: <%= (parseInt(this.data.iSliderKnobSize) / 2) + 5 %>px"><%= this.data.iSliderLabel %></div>

		<% } %>



</div>


</div>
</script>

<script id="i-vis-image-new"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/0_Image.png">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;
oid/id;
iValue/text;
iImageFalse/image;
iImageTrue/image;
iPointerEvents/checkbox;"
data-vis-attrs0="group.i-css;
iText-CornerSettings/custom,vis-inventwo.infoText,emptyText;
iCornerRadiusUL[0]/slider,0,50,1;
iCornerRadiusUR[0]/slider,0,50,1;
iCornerRadiusLR[0]/slider,0,50,1;
iCornerRadiusLL[0]/slider,0,50,1;

iOpacityCtn[1]/slider,0,1,0.1;

iText-ImageSettings/custom,vis-inventwo.infoText,emptyText;
iImgRotation[0]/slider,0,180,1;
iInvertImageCol/checkbox;
iFlipImage/checkbox;

iText-ShadowSettings/custom,vis-inventwo.infoText,emptyText;
iShadowSpread[0]/slider,0,50,1;
iShadowSpreadInner[0]/slider,0,50,1;
iShadowBlur[0]/slider,0,50,1;
iShadowColor[#111111]/color;
iShadowColorActive[#111111]/color;"
data-vis-set="vis-inventwo"
data-vis-type="static"
data-vis-name="Image">

	<%
	let pointer_event = "auto";
if(this.data.iPointerEvents == true){
	pointer_event = "none";
}

%>

<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light"
style="width:110px; height:110px; overflow:visible; cursor:default; z-index:1; pointer-events:<%== pointer_event %>;"
id="<%= this.data.attr('wid') %>" >
	<div class="vis-inventwo-class vis-widget-body <%== this.data.attr('class') %>">

	<%
	let cssData = {};

let hexTrans = Math.floor(this.data.iOpacityBack * 255).toString(16);

cssData.flip = 1;
if(this.data.attr('iFlipImage')){
	cssData.flip = -1;
}

%>

<div class="vis-inventwo-button-new" style="width:100%; height:100%;">

	<div style="opacity: <%= this.data.attr('iOpacityCtn') %>;width:100%; height:100%;">

	<div class="vis-inventwo-button-imageContainer"
style="align-self: center;
display: flex;
justify-content: center;
align-items: center;
width:100%; height:100%;">

<div style="width: <%= this.data.iShadowSpreadInner %>px; height: <%= this.data.iShadowSpreadInner%>px; position: absolute; background:<%= this.data.attr('iShadowColor')%>; border-radius: 100%;
	<% if(this.data.oid != undefined && vis.states.attr(this.data.oid + '.val') == this.data.iValue) { %>
	box-shadow: 0px 0px <%= this.data.iShadowBlur %>px <%= this.data.iShadowSpread %>px <%= this.data.attr('iShadowColorActive')%>;
<% } else { %>
	box-shadow: 0px 0px <%= this.data.iShadowBlur %>px <%= this.data.iShadowSpread %>px <%= this.data.attr('iShadowColor')%>;
<% } %>
"></div>
<img
<% if(this.data.oid != undefined && vis.states.attr(this.data.oid + '.val') == this.data.iValue) { %>
	src='<%= this.data.attr('iImageTrue') %>'
	<% } else { %>
	src='<%= this.data.attr('iImageFalse') %>'
	<% } %>
width="100%;height:100%;"
style="filter: invert(<%= Number(this.data.attr('iInvertImageCol')) %>);
transform: scaleX(<%= cssData.flip %>) rotateZ(<%= this.data.iImgRotation %>deg);
border-radius: <%= this.data.iCornerRadiusUL %>px <%= data.iCornerRadiusUR%>px <%= data.iCornerRadiusLR%>px <%= data.iCornerRadiusLL%>px">

</div>
</div>
</div>
</div>
</div>
</script>

<script id="i-vis-jsontable"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/0_Table.png">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;oid/id;iTblShowHead/checkbox;iTblRowLimit/number;iVertScroll/checkbox;iHorScroll/checkbox;iTableRefreshRate[50]/number,0,10000,1;"
data-vis-attrs0="iColCount/number,0,100,1;group.iTableCol/byindex;iColShow(1-iColCount)[true]/checkbox;iColName(1-iColCount)/text;iColAttr(1-iColCount)/text;iColWidth(1-iColCount)/text;"
data-vis-attrs1="group.i-css;iOpacityAll[1]/slider,0,1,0.1;iTblRowEvenColor[#333333]/color;iTblRowUnevenColor[#455618]/color;iTblHeaderColor[#333333]/color;
iTblRowEvenTextColor[#ffffff]/color;iTblRowUnevenTextColor[#ffffff]/color;iTblHeaderTextColor[#ffffff]/color;iRowSpacing[10]/slider,0,50,0.1;"
data-vis-set="vis-inventwo"
data-vis-type="table"
data-vis-name="JSON Table">

	<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" style="width:auto; height:auto; overflow:hidden;z-index:1" id="<%= this.data.attr('wid') %>" >
<%= (el) -> vis.binds['vis-inventwo'].jsontable(el, this.data) %>
	</div>

	</script>

	<script id="i-vis-radiobutton-list"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/0_Radio.png">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;
oid/id;
iRadiobtnWidth[100]/slider,50,200,1;
iRadiobtnHeight[50]/slider,10,200,1;
iRadiobtnSpace[10]/slider,0,100,1;
iRadiobtnAlign[horizontal]/select,vertical,horizontal;"
data-vis-attrs0="iRadiobtnsCount[1]/number,0,100,1;group.iRadioBtns/byindex;
iTextFalse(1-iRadiobtnsCount)/html;
iTextTrue(1-iRadiobtnsCount)/html;
iValue(1-iRadiobtnsCount)/text;
iText-BackgroundSettings(1-iRadiobtnsCount)/custom,vis-inventwo.infoText,emptyText;
iText-BackColorRadioInfo/custom,vis-inventwo.infoText,radioBtnBackColInfoText;
iButtonBackM(1-iRadiobtnsCount)/color;
iButtonBackActiveM(1-iRadiobtnsCount)/color;
iText-ImgSettings(1-iRadiobtnsCount)/custom,vis-inventwo.infoText,emptyText;
iImageFalse(1-iRadiobtnsCount)/image;
iImageTrue(1-iRadiobtnsCount)/image;"
data-vis-attrs1="group.i-css;
iText-BackgroundSettings/custom,vis-inventwo.infoText,emptyText;
iButtonCol[#333333]/color;
iButtonActive[#455618]/color;
iOpacityBack[1]/slider,0,1,0.1;

iText-CornerSettings/custom,vis-inventwo.infoText,emptyText;
iCornerRadiusUL[12]/slider,0,50,1;
iCornerRadiusUR[0]/slider,0,50,1;
iCornerRadiusLR[12]/slider,0,50,1;
iCornerRadiusLL[0]/slider,0,50,1;

iText-ContentSettings/custom,vis-inventwo.infoText,emptyText;
iContentFlexDirection[vertical]/select,horizontal,vertical;
iContentVertAlign[iSpace-between]/select,iStart,iCenter,iEnd,iSpace-between;
iContentOrder[orderImgText]/select,orderTextImg,orderImgText;
iOpacityCtn[1]/slider,0,1,0.1;

iText-TextSettings/custom,vis-inventwo.infoText,emptyText;
iTextColor[#ffffff]/color;
iTextSize[12]/slider,0,50,1;
iTextAlign[iStart]/select,iStart,iCenter,iEnd;
iTextSpaceTop[0]/slider,0,50,1;
iTextSpaceBottom[0]/slider,0,50,1;
iTextSpaceLeft[0]/slider,0,50,1;
iTextSpaceRight[0]/slider,0,50,1;

iText-ImageSettings/custom,vis-inventwo.infoText,emptyText;
iIconSize[35]/slider,0,200,1;
iImgAlign[iCenter]/select,iStart,iCenter,iEnd;
iImgRotation[0]/slider,0,180,1;
iImgSpaceTop[0]/slider,0,50,1;
iImgSpaceBottom[0]/slider,0,50,1;
iImgSpaceLeft[0]/slider,0,50,1;
iImgSpaceRight[0]/slider,0,50,1;
iInvertImageCol/checkbox;
iFlipImage/checkbox;

iText-ShadowSettings/custom,vis-inventwo.infoText,emptyText;
iShadowXOffset[2]/slider,0,20,1;
iShadowYOffset[2]/slider,0,20,1;
iShadowBlur[2]/slider,0,20,1;
iShadowSpread[1]/slider,0,20,1;
iShadowColor[#111111]/color;
iShadowColor[#111111]/color;
iShadowColorActive[#111111]/color;

iText-ShadowInnerSettings/custom,vis-inventwo.infoText,emptyText;
iShadowInnerXOffset[0]/slider,0,20,1;
iShadowInnerYOffset[0]/slider,0,20,1;
iShadowInnerBlur[0]/slider,0,20,1;
iShadowInnerSpread[0]/slider,0,20,1;
iShadowInnerColor[#111111]/color;
iShadowInnerColorActive[#111111]/color;

iText-BorderSettings/custom,vis-inventwo.infoText,emptyText;
iBorderSize[0]/slider,0,20,1;
iBorderStyle[none]/nselect,dotted,dashed,solid,double,groove,ridge,inset,outset,none;
iBorderColor[#ffffff]/color;
iBorderColorActive[#ffffff]/color;"
data-vis-set="vis-inventwo"
data-vis-type="ctrl"
data-vis-name="Radiobutton List">

	<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" style="width:auto; height:auto; overflow:visible; cursor:pointer;z-index:1" id="<%= this.data.attr('wid') %>">

	<%
	let cssData = {};

if(this.data.iRadiobtnAlign == 'vertical'){
	cssData.align = "column";
	cssData.marginDir = "bottom";
}
else if(this.data.iRadiobtnAlign == 'horizontal'){
	cssData.align = "row";
	cssData.marginDir = "right";
}

%>

<div class="vis-inventwo-class vis-widget-body vis-inventwo-radiobtnlist-body <%== this.data.attr('class') %>" style="flex-direction: <%= cssData.align %>">

	<%

	let hexTrans = Math.floor(this.data.iOpacityBack * 255).toString(16);

let flip = 1;
if(this.data.attr('iFlipImage')){
	cssData.flip = -1;
}

//Vertikale Inhaltsausrichtung
let vertTextAlign = "";
if(this.data.iContentVertAlign == 'iStart')
	cssData.vertTextAlign = "flex-start";
else if(this.data.iContentVertAlign == 'iCenter')
	cssData.vertTextAlign = "center";
else if(this.data.iContentVertAlign == 'iEnd')
	cssData.vertTextAlign = "flex-end";
else if(this.data.iContentVertAlign == 'iSpace-between')
	cssData.vertTextAlign = "space-between";

//Inhaltsausrichtung (Reihe oder Spalte)
let contFlexDir = "";
if(this.data.iContentFlexDirection == "vertical")
	cssData.contFlexDir = "column";
else if(this.data.iContentFlexDirection == "horizontal")
	cssData.contFlexDir = "row";

//Inhaltsreihenfolge (Erst Bild dann Text oder erst Text dann Bild)
let orderContent = "";
if(this.data.iContentOrder == 'orderTextImg')
	cssData.orderContent = 2;
else
	cssData.orderContent = 0;

//
let imgAlign = "";
if(this.data.iImgAlign == 'iStart')
	cssData.imgAlign = "flex-start";
else if(this.data.iImgAlign == 'iCenter')
	cssData.imgAlign = "center";
else if(this.data.iImgAlign == 'iEnd')
	cssData.imgAlign = "flex-end";

//
let textAlign = "";
if(this.data.iTextAlign == 'iStart')
	cssData.textAlign = "flex-start";
else if(this.data.iTextAlign == 'iCenter')
	cssData.textAlign = "center";
else if(this.data.iTextAlign == 'iEnd')
	cssData.textAlign = "flex-end";
%>

<% for(let val = 1; val <= this.data.iRadiobtnsCount; val++){ %>

<div style="width: <%= this.data.attr('iRadiobtnWidth') %>px;
	height: <%= this.data.attr('iRadiobtnHeight') %>px;
	position: relative;
	margin-<%= cssData.marginDir %>: <%= this.data.iRadiobtnSpace %>px;">

	<div>

	<%

	let backCol = "";
	if(vis.states.attr(this.data.oid + '.val') == this.data.attr('iValue' + val)){

		if(this.data.attr('iButtonBackActiveM' + val) != undefined){
			backCol = this.data.attr('iButtonBackActiveM' + val);
		}
		else{
			backCol = this.data.iButtonActive;
		}
	}
	else{
		if(this.data.attr('iButtonBackM' + val) != undefined){
			backCol = this.data.attr('iButtonBackM' + val);
		}
		else{
			backCol = this.data.iButtonCol;
		}
	}

%>


<div class="vis-inventwo-button-new"
		<% if(vis.states.attr(this.data.oid + '.val') == this.data.attr('iValue' + val)) { %>
		style="background: <%= backCol%>;
		opacity: <%= this.data.iOpacityBack %>;
		border-radius: <%= this.data.attr('iCornerRadiusUL') %>px <%= this.data.attr('iCornerRadiusUR') %>px <%= this.data.attr('iCornerRadiusLR') %>px <%= this.data.attr('iCornerRadiusLL') %>px;
		box-shadow: <%= this.data.attr('iShadowXOffset') + 'px ' + this.data.attr('iShadowYOffset') + 'px ' + this.data.attr('iShadowBlur') + 'px ' + this.data.attr('iShadowSpread') + 'px ' + this.data.attr('iShadowColorActive')%>,
			inset <%= this.data.attr('iShadowInnerXOffset') + 'px ' + this.data.attr('iShadowInnerYOffset') + 'px ' + this.data.attr('iShadowInnerBlur') + 'px ' + this.data.attr('iShadowInnerSpread') + 'px ' + this.data.attr('iShadowInnerColorActive') %>;
		border: <%= this.data.attr('iBorderSize') + 'px ' + this.data.attr('iBorderStyle') + ' ' + this.data.attr('iBorderColorActive')%>;"
		<% } else { %>
		style="background: <%= backCol%>;
		opacity: <%= this.data.iOpacityBack %>;
		border-radius: <%= this.data.attr('iCornerRadiusUL') %>px <%= this.data.attr('iCornerRadiusUR') %>px <%= this.data.attr('iCornerRadiusLR') %>px <%= this.data.attr('iCornerRadiusLL') %>px;
		box-shadow: <%= this.data.attr('iShadowXOffset') + 'px ' + this.data.attr('iShadowYOffset') + 'px ' + this.data.attr('iShadowBlur') + 'px ' + this.data.attr('iShadowSpread') + 'px ' + this.data.attr('iShadowColor')%>,
			inset <%= this.data.attr('iShadowInnerXOffset') + 'px ' + this.data.attr('iShadowInnerYOffset') + 'px ' + this.data.attr('iShadowInnerBlur') + 'px ' + this.data.attr('iShadowInnerSpread') + 'px ' + this.data.attr('iShadowInnerColor')%>;
		border: <%= this.data.attr('iBorderSize') + 'px ' + this.data.attr('iBorderStyle') + ' ' + this.data.attr('iBorderColor') %>;"
		<% } %> ></div>

	<div class="vis-inventwo-button-content"
	style="opacity: <%= this.data.attr('iOpacityCtn') %>;
	justify-content: <%= cssData.vertTextAlign %>;
	flex-direction: <%= cssData.contFlexDir %>;
	">

	<div style="order: <%= cssData.orderContent %>;
	align-self: <%= cssData.imgAlign %>;
	margin: <%= this.data.iImgSpaceTop + 'px ' + this.data.iImgSpaceRight + 'px ' + this.data.iImgSpaceBottom + 'px ' + this.data.iImgSpaceLeft + 'px' %>;">
	<% if(vis.states.attr(this.data.oid + '.val') == this.data.attr('iValue' + val)) { %>
	<img src='<%= this.data.attr('iImageTrue' + val) %>' width="<%= this.data.iIconSize %>"
		style="filter: invert(<%= Number(this.data.attr('iInvertImageCol')) %>);
		transform: scaleX(<%= flip %>) rotateZ(<%= this.data.iImgRotation %>deg);" >
		<% } else if(this.data.attr('iImageFalse') != ""){ %>
	<img src='<%= this.data.attr('iImageFalse' + val) %>' width="<%= this.data.iIconSize %>"
		style="filter: invert(<%= Number(this.data.attr('iInvertImageCol')) %>);
		transform: scaleX(<%= flip %>) rotateZ(<%= this.data.iImgRotation %>deg);" >
		<% } %>
</div>
	<div style="font-size: <%= this.data.iTextSize %>px;
	color:<%= this.data.iTextColor %>;
	margin: <%= this.data.iTextSpaceTop + 'px ' + this.data.iTextSpaceRight + 'px ' + this.data.iTextSpaceBottom + 'px ' + this.data.iTextSpaceLeft + 'px' %>;
	align-self: <%= cssData.textAlign %>;">

	<% if(vis.states.attr(this.data.oid + '.val') == this.data.attr('iValue' + val)) { %>
	<%== this.data.attr('iTextTrue' + val) %>
			<% } else { %>
	<%== this.data.attr('iTextFalse' + val) %>
			<% } %>
</div>

	</div>

	</div>

	<%= (el) -> vis.binds['vis-inventwo'].radiobutton(el, this.data.attr('oid'),this.data.attr('iValue' + val)) %>

		</div>

		<% } %>

</div>

</div>
</script>



<!-- WERDEN ENTFERNT -->
<script id="i-vis-switch"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/0_Switch.png">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;oid/id;iTextFalse/html;iTextTrue/html;iTextSize[12]/slider,0,50,1;iImageFalse/image;iImageTrue/image;iIconSize[60]/slider,0,200,1;iInvertImageCol/checkbox;iFlipImage/checkbox;iValueType[boolean]/select,boolean,value;iValueTypeInfo/custom,vis-inventwo.infoText,valueType;iValueFalse/text;iValueTrue/text;"
data-vis-attrs0="group.i-css;iButtonCol[#333333]/color;iButtonActive[#455618]/color;
iCornerRadiusUL[12]/slider,0,50,1;iCornerRadiusUR[0]/slider,0,50,1;iCornerRadiusLR[12]/slider,0,50,1;iCornerRadiusLL[0]/slider,0,50,1;
iOpacity[1]/slider,0,1,0.1;iOpacityCtn[1]/slider,0,1,0.1;iTextColor[#ffffff]/color;"
data-vis-set="vis-inventwo"
data-vis-type="ctrl"
data-vis-name="Switch<br><span style='color:red;'>WARNING! No longer supported. Will be removed in future update!</span>">

	<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" style="width:110px; height:110px; overflow:visible; cursor:pointer;z-index:1" id="<%= this.data.attr('wid') %>" >
	<div class="vis-inventwo-class vis-widget-body <%== this.data.attr('class') %>">

	<div class="vis-inventwo-button"
	<% if((vis.states.attr(this.data.oid + '.val') && this.data.iValueType == 'boolean') || (vis.states.attr(this.data.oid + '.val') == this.data.iValueTrue && this.data.iValueType == 'value')) { %>
	style="background: <%= this.data.attr('iButtonActive') %>;
	border-radius: <%= this.data.attr('iCornerRadiusUL') %>px <%= this.data.attr('iCornerRadiusUR') %>px <%= this.data.attr('iCornerRadiusLR') %>px <%= this.data.attr('iCornerRadiusLL') %>px;
	opacity:<%= this.data.attr('iOpacity')%>;"
	<% } else { %>
	style="background: <%= this.data.attr('iButtonCol') %>;
	border-radius: <%= this.data.attr('iCornerRadiusUL') %>px <%= this.data.attr('iCornerRadiusUR') %>px <%= this.data.attr('iCornerRadiusLR') %>px <%= this.data.attr('iCornerRadiusLL') %>px;
	opacity:<%= this.data.attr('iOpacity')%>;"
	<% } %>
>
</div>

<div class="vis-inventwo-button-content" style="opacity: <%= this.data.attr('iOpacityCtn') %>;">

	<%

	let flip = 1;
if(this.data.attr('iFlipImage')){
	flip = -1;
}

%>


<% if((vis.states.attr(this.data.oid + '.val') && this.data.iValueType == 'boolean') || (vis.states.attr(this.data.oid + '.val') == this.data.iValueTrue && this.data.iValueType == 'value')) { %>
<div class="vis-inventwo-button-imageContainer">
		<img src='<%= this.data.iImageTrue %>' width="<%= this.data.iIconSize %>" style="filter: invert(<%= Number(this.data.attr('iInvertImageCol')) %>);transform: scaleX(<%= flip %>);" >
		</div>
		<div class="vis-inventwo-button-text" style="font-size: <%= this.data.iTextSize %>px;color:<%= this.data.iTextColor %>;">
	<%== this.data.iTextTrue %>
		</div>
		<% } else { %>
<div class="vis-inventwo-button-imageContainer">
		<img src='<%= this.data.iImageFalse %>' width="<%= this.data.iIconSize %>" style="filter: invert(<%= Number(this.data.attr('iInvertImageCol')) %>);transform: scaleX(<%= flip %>);" >
		</div>
		<div class="vis-inventwo-button-text" style="font-size: <%= this.data.iTextSize %>px;color:<%= this.data.iTextColor %>;">
	<%== this.data.iTextFalse %>
		</div>
		<% } %>

</div>
<%= (el) -> vis.binds['vis-inventwo'].handleToggle(el, this.data) %>
	</div>

	</div>
	</script>
	<script id="i-vis-switch-small"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/0_Switch1.png">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;oid/id;iTextFalse/text;iTextTrue/text;iTextSize[12]/slider,0,50,1;iImageFalse/image;iImageTrue/image;iIconSize[35]/slider,0,200,1;iInvertImageCol/checkbox;iFlipImage/checkbox;iValueType[boolean]/select,boolean,value;iValueTypeInfo/custom,vis-inventwo.infoText,valueType;iValueFalse/text;iValueTrue/text;"
data-vis-attrs0="group.i-css;iButtonCol[#333333]/color;iButtonActive[#455618]/color;
iCornerRadiusUL[12]/slider,0,50,1;iCornerRadiusUR[0]/slider,0,50,1;iCornerRadiusLR[12]/slider,0,50,1;iCornerRadiusLL[0]/slider,0,50,1;
iOpacity[1]/slider,0,1,0.1;iOpacityCtn[1]/slider,0,1,0.1;iTextColor[#ffffff]/color;"
data-vis-set="vis-inventwo"
data-vis-type="ctrl"
data-vis-name="Switch Small<br><span style='color:red;'>WARNING! No longer supported. Will be removed in future update!</span>">

	<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" style="width:110px; height:50px; overflow:visible; cursor:pointer;z-index:1" id="<%= this.data.attr('wid') %>" >
	<div class="vis-inventwo-class vis-widget-body <%== this.data.attr('class') %>">

	<div class="vis-inventwo-button"
	<% if((vis.states.attr(this.data.oid + '.val') && this.data.iValueType == 'boolean') || (vis.states.attr(this.data.oid + '.val') == this.data.iValueTrue && this.data.iValueType == 'value')) { %>
	style="background: <%= this.data.attr('iButtonActive') %>;
	border-radius: <%= this.data.attr('iCornerRadiusUL') %>px <%= this.data.attr('iCornerRadiusUR') %>px <%= this.data.attr('iCornerRadiusLR') %>px <%= this.data.attr('iCornerRadiusLL') %>px;
	opacity:<%= this.data.attr('iOpacity')%>;"
	<% } else { %>
	style="background: <%= this.data.attr('iButtonCol') %>;
	border-radius: <%= this.data.attr('iCornerRadiusUL') %>px <%= this.data.attr('iCornerRadiusUR') %>px <%= this.data.attr('iCornerRadiusLR') %>px <%= this.data.attr('iCornerRadiusLL') %>px;
	opacity:<%= this.data.attr('iOpacity')%>;"
	<% } %>
>
</div>

<div class="vis-inventwo-button-content-small" style="opacity: <%= this.data.attr('iOpacityCtn') %>">

	<%

	let flip = 1;
if(this.data.attr('iFlipImage')){
	flip = -1;
}

%>

<% if((vis.states.attr(this.data.oid + '.val') && this.data.iValueType == 'boolean') || (vis.states.attr(this.data.oid + '.val') == this.data.iValueTrue && this.data.iValueType == 'value')) { %>
<div style="order:2; position:relative;">
		<img src='<%= this.data.iImageTrue %>' width="<%= this.data.iIconSize %>" style="filter: invert(<%= Number(this.data.attr('iInvertImageCol')) %>);transform: scaleX(<%= flip %>);">
		</div>
		<div class="vis-inventwo-button-text" style="font-size: <%= this.data.iTextSize %>px;display:table-cell;color:<%= this.data.iTextColor %>">
	<%== this.data.iTextTrue %>
		</div>
		<% } else { %>
<div style="order:2; position:relative;">
		<img src='<%= this.data.iImageFalse %>' width="<%= this.data.iIconSize %>" style="filter: invert(<%= Number(this.data.attr('iInvertImageCol')) %>);transform: scaleX(<%= flip %>);">
		</div>
		<div class="vis-inventwo-button-text" style="font-size: <%= this.data.iTextSize %>px;display:table-cell;color:<%= this.data.iTextColor %>">
	<%== this.data.iTextFalse %>
		</div>
		<% } %>

</div>
<%= (el) -> vis.binds['vis-inventwo'].handleToggle(el, this.data) %>
	</div>

	</div>
	</script>

	<script id="i-vis-button"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/0_Button.png">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;oid/id;value;iText/text;iTextSize[12]/slider,0,50,1;iImage/image;iIconSize[60]/slider,0,200,1;iInvertImageCol/checkbox;iFlipImage/checkbox;"
data-vis-attrs0="group.i-css;iButtonCol[#333333]/color;
iCornerRadiusUL[12]/slider,0,50,1;iCornerRadiusUR[0]/slider,0,50,1;iCornerRadiusLR[12]/slider,0,50,1;iCornerRadiusLL[0]/slider,0,50,1;
iOpacity[1]/slider,0,1,0.1;iOpacityCtn[1]/slider,0,1,0.1;iTextColor[#ffffff]/color;"
data-vis-set="vis-inventwo"
data-vis-type="ctrl"
data-vis-name="Button<br><span style='color:red;'>WARNING! No longer supported. Will be removed in future update!</span>">

	<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" style="width:110px; height:110px; overflow:visible; cursor:pointer;z-index:1" id="<%= this.data.attr('wid') %>" >
	<div class="vis-inventwo-class vis-widget-body <%== this.data.attr('class') %> ">

	<div class="vis-inventwo-button"
style="background: <%= this.data.attr('iButtonCol') %>;
border-radius: <%= this.data.attr('iCornerRadiusUL') %>px <%= this.data.attr('iCornerRadiusUR') %>px <%= this.data.attr('iCornerRadiusLR') %>px <%= this.data.attr('iCornerRadiusLL') %>px;
opacity:<%= this.data.attr('iOpacity')%>;"
>
</div>
<%

let flip = 1;
if(this.data.attr('iFlipImage')){
	flip = -1;
}

%>
<div class="vis-inventwo-button-content" style="opacity: <%= this.data.attr('iOpacityCtn') %>;">
	<div class="vis-inventwo-button-imageContainer">
	<img src='<%= this.data.iImage %>' width="<%= this.data.iIconSize %>" style="filter: invert(<%= Number(this.data.attr('iInvertImageCol')) %>);transform: scaleX(<%= flip %>);">
	</div>
	<div class="vis-inventwo-button-text" style="font-size: <%= this.data.iTextSize %>px;color:<%= this.data.iTextColor %>">
<%== this.data.iText %>
</div>
</div>
</div>
<%= (el) -> vis.binds['vis-inventwo'].state(el, this.data) %>
	</div>
	</script>
	<script id="i-vis-button-small"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/0_Button1.png">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;oid/id;value;iText/text;iTextSize[12]/slider,0,50,1;iImage/image;iIconSize[35]/slider,0,200,1;iInvertImageCol/checkbox;iFlipImage/checkbox;"
data-vis-attrs0="group.i-css;iButtonCol[#333333]/color;
iCornerRadiusUL[12]/slider,0,50,1;iCornerRadiusUR[0]/slider,0,50,1;iCornerRadiusLR[12]/slider,0,50,1;iCornerRadiusLL[0]/slider,0,50,1;
iOpacity[1]/slider,0,1,0.1;iOpacityCtn[1]/slider,0,1,0.1;iTextColor[#ffffff]/color;"
data-vis-set="vis-inventwo"
data-vis-type="ctrl"
data-vis-name="Button Small<br><span style='color:red;'>WARNING! No longer supported. Will be removed in future update!</span>">

	<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" style="width:110px; height:50px; overflow:visible; cursor:pointer;z-index:1" id="<%= this.data.attr('wid') %>" >
	<div class="vis-inventwo-class vis-widget-body <%== this.data.attr('class') %> ">

	<div class="vis-inventwo-button"
style="background: <%= this.data.attr('iButtonCol') %>;
border-radius: <%= this.data.attr('iCornerRadiusUL') %>px <%= this.data.attr('iCornerRadiusUR') %>px <%= this.data.attr('iCornerRadiusLR') %>px <%= this.data.attr('iCornerRadiusLL') %>px;
opacity:<%= this.data.attr('iOpacity')%>;"
>
</div>
<%

let flip = 1;
if(this.data.attr('iFlipImage')){
	flip = -1;
}

%>
<div class="vis-inventwo-button-content-small" style="opacity: <%= this.data.attr('iOpacityCtn') %>">

	<div style="order:2; position:relative;">
	<img src='<%= this.data.iImage %>' width="<%= this.data.iIconSize %>" style="filter: invert(<%= Number(this.data.attr('iInvertImageCol')) %>);transform: scaleX(<%= flip %>);">
	</div>
	<div class="vis-inventwo-button-text" style="font-size: <%= this.data.iTextSize %>px;display:table-cell;color:<%= this.data.iTextColor %>">
<%== this.data.iText %>
</div>

</div>
<%= (el) -> vis.binds['vis-inventwo'].state(el, this.data) %>
	</div>

	</div>
	</script>

	<script id="i-vis-navigation"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/0_Nav.png">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;nav_view;iText/text;iTextSize[12]/slider,0,50,1;iImage/image;iIconSize[60]/slider,0,200,1;iInvertImageCol/checkbox;iFlipImage/checkbox;iNavWait[100]/number;oid/id;iNavValue/text;"
data-vis-attrs0="group.i-css;iButtonCol[#333333]/color;iButtonActive[#455618]/color;
iCornerRadiusUL[12]/slider,0,50,1;iCornerRadiusUR[0]/slider,0,50,1;iCornerRadiusLR[12]/slider,0,50,1;iCornerRadiusLL[0]/slider,0,50,1;
iOpacity[1]/slider,0,1,0.1;iOpacityCtn[1]/slider,0,1,0.1;iTextColor[#ffffff]/color;"
data-vis-set="vis-inventwo"
data-vis-type="ctrl"
data-vis-name="Navigation<br><span style='color:red;'>WARNING! No longer supported. Will be removed in future update!</span>">

	<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" style="width:110px; height:110px; overflow:visible; cursor:pointer;z-index:1" id="<%= this.data.attr('wid') %>">
	<div class="vis-inventwo-class vis-widget-body <%== this.data.attr('class') %> ">

	<%
	let backgroundcol = this.data.iButtonCol;
if(this.data.nav_view === vis.activeView){
	backgroundcol = this.data.iButtonActive;
}
%>

<div class="vis-inventwo-button vis-inventwo-nav" data-inventwo-nav="<%= this.data.nav_view%>" data-activeCol="<%= this.data.iButtonActive%>" data-col="<%= this.data.iButtonCol%>"
style="background: <%= backgroundcol %>;
border-radius: <%= this.data.attr('iCornerRadiusUL') %>px <%= this.data.attr('iCornerRadiusUR') %>px <%= this.data.attr('iCornerRadiusLR') %>px <%= this.data.attr('iCornerRadiusLL') %>px;
opacity:<%= this.data.attr('iOpacity')%>;"
>
</div>
<%

let flip = 1;
if(this.data.attr('iFlipImage')){
	flip = -1;
}

%>
<div class="vis-inventwo-button-content" style="opacity: <%= this.data.attr('iOpacityCtn') %>;">
	<div class="vis-inventwo-button-imageContainer">

	<img src='<%= this.data.iImage %>' width="<%= this.data.iIconSize %>" style="filter: invert(<%= Number(this.data.attr('iInvertImageCol')) %>);transform: scaleX(<%= flip %>);">

	</div>
	<div class="vis-inventwo-button-text" style="font-size: <%= this.data.iTextSize %>px;color:<%= this.data.iTextColor %>">
<%== this.data.iText %>
</div>
</div>
<%= (el) -> vis.binds['vis-inventwo'].handleNavigation(el, this.data) %>
	</div>

	</div>
	</script>
	<script id="i-vis-navigation-small"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/0_Nav1.png">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;nav_view;iText/text;iTextSize[12]/slider,0,50,1;iImage/image;iIconSize[35]/slider,0,200,1;iInvertImageCol/checkbox;iFlipImage/checkbox;iNavWait[100]/number;oid/id;iNavValue/text;"
data-vis-attrs0="group.i-css;iButtonCol[#333333]/color;iButtonActive[#455618]/color;
iCornerRadiusUL[12]/slider,0,50,1;iCornerRadiusUR[0]/slider,0,50,1;iCornerRadiusLR[12]/slider,0,50,1;iCornerRadiusLL[0]/slider,0,50,1;
iOpacity[1]/slider,0,1,0.1;iOpacityCtn[1]/slider,0,1,0.1;iTextColor[#ffffff]/color;"
data-vis-set="vis-inventwo"
data-vis-type="ctrl"
data-vis-name="Navigation Small<br><span style='color:red;'>WARNING! No longer supported. Will be removed in future update!</span>">

	<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" style="width:110px; height:50px; overflow:visible; cursor:pointer;z-index:1" id="<%= this.data.attr('wid') %>">
	<div class="vis-inventwo-class vis-widget-body <%== this.data.attr('class') %> ">

	<%
	let backgroundcol = this.data.iButtonCol;
if(this.data.nav_view === vis.activeView){
	backgroundcol = this.data.iButtonActive;
}
%>

<div class="vis-inventwo-button vis-inventwo-nav" data-inventwo-nav="<%= this.data.nav_view%>" data-activeCol="<%= this.data.iButtonActive%>" data-col="<%= this.data.iButtonCol%>"
style="background:  <%= backgroundcol %>;
border-radius: <%= this.data.attr('iCornerRadiusUL') %>px <%= this.data.attr('iCornerRadiusUR') %>px <%= this.data.attr('iCornerRadiusLR') %>px <%= this.data.attr('iCornerRadiusLL') %>px;
opacity:<%= this.data.attr('iOpacity')%>;"
>
</div>
<%

let flip = 1;
if(this.data.attr('iFlipImage')){
	flip = -1;
}

%>
<div class="vis-inventwo-button-content-small" style="opacity: <%= this.data.attr('iOpacityCtn') %>">

	<div style="order:2; position:relative;">
	<img src='<%= this.data.iImage %>' width="<%= this.data.iIconSize %>" style="filter: invert(<%= Number(this.data.attr('iInvertImageCol')) %>);transform: scaleX(<%= flip %>);">
	</div>
	<div class="vis-inventwo-button-text" style="font-size: <%= this.data.iTextSize %>px;display:table-cell;color:<%= this.data.iTextColor %>">
<%== this.data.iText %>
</div>

</div>
<%= (el) -> vis.binds['vis-inventwo'].handleNavigation(el, this.data) %>
	</div>

	</div>
	</script>

	<script id="i-vis-background"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/0_Background.png">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;oid/id;iTextFalse/html;iTextTrue/html;iTextSize[12]/slider,0,50,1;iImageFalse/image;iImageTrue/image;iIconSize[60]/slider,0,200,1;iInvertImageCol/checkbox;iFlipImage/checkbox;iValueType[boolean]/select,boolean,value;iValueTypeInfo/custom,vis-inventwo.infoText,valueType;iValueFalse/text;iValueTrue/text;"
data-vis-attrs0="group.i-css;iButtonCol[#333333]/color;iButtonActive[#455618]/color;
iCornerRadiusUL[12]/slider,0,50,1;iCornerRadiusUR[0]/slider,0,50,1;iCornerRadiusLR[12]/slider,0,50,1;iCornerRadiusLL[0]/slider,0,50,1;
iOpacity[1]/slider,0,1,0.1;iOpacityCtn[1]/slider,0,1,0.1;iTextColor[#ffffff]/color;"
data-vis-set="vis-inventwo"
data-vis-type="val"
data-vis-name="Background<br><span style='color:red;'>WARNING! No longer supported. Will be removed in future update!</span>">

	<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" style="width:110px; height:110px; overflow:visible; cursor:pointer;z-index:1" id="<%= this.data.attr('wid') %>" >
	<div class="vis-inventwo-class vis-widget-body <%== this.data.attr('class') %>">

	<div class="vis-inventwo-button"
	<% if((vis.states.attr(this.data.oid + '.val') && this.data.iValueType == 'boolean') || (vis.states.attr(this.data.oid + '.val') == this.data.iValueTrue && this.data.iValueType == 'value')) { %>
	style="background: <%= this.data.attr('iButtonActive') %>;
	border-radius: <%= this.data.attr('iCornerRadiusUL') %>px <%= this.data.attr('iCornerRadiusUR') %>px <%= this.data.attr('iCornerRadiusLR') %>px <%= this.data.attr('iCornerRadiusLL') %>px;
	opacity:<%= this.data.attr('iOpacity')%>;"
	<% } else { %>
	style="background: <%= this.data.attr('iButtonCol') %>;
	border-radius: <%= this.data.attr('iCornerRadiusUL') %>px <%= this.data.attr('iCornerRadiusUR') %>px <%= this.data.attr('iCornerRadiusLR') %>px <%= this.data.attr('iCornerRadiusLL') %>px;
	opacity:<%= this.data.attr('iOpacity')%>;"
	<% } %>
>
</div>

<div class="vis-inventwo-button-content" style="opacity: <%= this.data.attr('iOpacityCtn') %>;">

	<%

	let flip = 1;
if(this.data.attr('iFlipImage')){
	flip = -1;
}

%>


<% if((vis.states.attr(this.data.oid + '.val') && this.data.iValueType == 'boolean') || (vis.states.attr(this.data.oid + '.val') == this.data.iValueTrue && this.data.iValueType == 'value')) { %>
<div class="vis-inventwo-button-imageContainer">
		<img src='<%= this.data.iImageTrue %>' width="<%= this.data.iIconSize %>" style="filter: invert(<%= Number(this.data.attr('iInvertImageCol')) %>);transform: scaleX(<%= flip %>);" >
		</div>
		<div class="vis-inventwo-button-text" style="font-size: <%= this.data.iTextSize %>px;color:<%= this.data.iTextColor %>;">
	<%== this.data.iTextTrue %>
		</div>
		<% } else { %>
<div class="vis-inventwo-button-imageContainer">
		<img src='<%= this.data.iImageFalse %>' width="<%= this.data.iIconSize %>" style="filter: invert(<%= Number(this.data.attr('iInvertImageCol')) %>);transform: scaleX(<%= flip %>);" >
		</div>
		<div class="vis-inventwo-button-text" style="font-size: <%= this.data.iTextSize %>px;color:<%= this.data.iTextColor %>;">
	<%== this.data.iTextFalse %>
		</div>
		<% } %>

</div>
</div>

</div>
</script>
<script id="i-vis-background-small"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/0_Background1.png">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;oid/id;iTextFalse/text;iTextTrue/text;iTextSize[12]/slider,0,50,1;iImageFalse/image;iImageTrue/image;iIconSize[35]/slider,0,200,1;iInvertImageCol/checkbox;iFlipImage/checkbox;iValueType[boolean]/select,boolean,value;iValueTypeInfo/custom,vis-inventwo.infoText,valueType;iValueFalse/text;iValueTrue/text;"
data-vis-attrs0="group.i-css;iButtonCol[#333333]/color;iButtonActive[#455618]/color;
iCornerRadiusUL[12]/slider,0,50,1;iCornerRadiusUR[0]/slider,0,50,1;iCornerRadiusLR[12]/slider,0,50,1;iCornerRadiusLL[0]/slider,0,50,1;
iOpacity[1]/slider,0,1,0.1;iOpacityCtn[1]/slider,0,1,0.1;iTextColor[#ffffff]/color;"
data-vis-set="vis-inventwo"
data-vis-type="val"
data-vis-name="Background Small<br><span style='color:red;'>WARNING! No longer supported. Will be removed in future update!</span>">

	<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" style="width:110px; height:50px; overflow:visible; cursor:pointer;z-index:1" id="<%= this.data.attr('wid') %>" >
	<div class="vis-inventwo-class vis-widget-body <%== this.data.attr('class') %>">

	<div class="vis-inventwo-button"
	<% if((vis.states.attr(this.data.oid + '.val') && this.data.iValueType == 'boolean') || (vis.states.attr(this.data.oid + '.val') == this.data.iValueTrue && this.data.iValueType == 'value')) { %>
	style="background: <%= this.data.attr('iButtonActive') %>;
	border-radius: <%= this.data.attr('iCornerRadiusUL') %>px <%= this.data.attr('iCornerRadiusUR') %>px <%= this.data.attr('iCornerRadiusLR') %>px <%= this.data.attr('iCornerRadiusLL') %>px;
	opacity:<%= this.data.attr('iOpacity')%>;"
	<% } else { %>
	style="background: <%= this.data.attr('iButtonCol') %>;
	border-radius: <%= this.data.attr('iCornerRadiusUL') %>px <%= this.data.attr('iCornerRadiusUR') %>px <%= this.data.attr('iCornerRadiusLR') %>px <%= this.data.attr('iCornerRadiusLL') %>px;
	opacity:<%= this.data.attr('iOpacity')%>;"
	<% } %>
>
</div>

<div class="vis-inventwo-button-content-small" style="opacity: <%= this.data.attr('iOpacityCtn') %>">

	<%

	let flip = 1;
if(this.data.attr('iFlipImage')){
	flip = -1;
}

%>

<% if((vis.states.attr(this.data.oid + '.val') && this.data.iValueType == 'boolean') || (vis.states.attr(this.data.oid + '.val') == this.data.iValueTrue && this.data.iValueType == 'value')) { %>
<div style="order:2; position:relative;">
		<img src='<%= this.data.iImageTrue %>' width="<%= this.data.iIconSize %>" style="filter: invert(<%= Number(this.data.attr('iInvertImageCol')) %>);transform: scaleX(<%= flip %>);">
		</div>
		<div class="vis-inventwo-button-text" style="font-size: <%= this.data.iTextSize %>px;display:table-cell;color:<%= this.data.iTextColor %>">
	<%== this.data.iTextTrue %>
		</div>
		<% } else { %>
<div style="order:2; position:relative;">
		<img src='<%= this.data.iImageFalse %>' width="<%= this.data.iIconSize %>" style="filter: invert(<%= Number(this.data.attr('iInvertImageCol')) %>);transform: scaleX(<%= flip %>);">
		</div>
		<div class="vis-inventwo-button-text" style="font-size: <%= this.data.iTextSize %>px;display:table-cell;color:<%= this.data.iTextColor %>">
	<%== this.data.iTextFalse %>
		</div>
		<% } %>

</div>
</div>

</div>
</script>

<script id="i-vis-image"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/0_Image.png">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;iImage/image;iInvertImageCol/checkbox;iFlipImage/checkbox;"
data-vis-attrs0="group.i-css;iOpacityImg[1]/slider,0,1,0.1;"
data-vis-set="vis-inventwo"
data-vis-type="static"
data-vis-name="Image<br><span style='color:red;'>WARNING! No longer supported. Will be removed in future update!</span>">

	<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" style="width:110px; height:110px; overflow:visible; cursor:pointer;z-index:1" id="<%= this.data.attr('wid') %>" >
	<div class="vis-inventwo-class vis-widget-body <%== this.data.attr('class') %> ">

	<%

	let flip = 1;
if(this.data.attr('iFlipImage')){
	flip = -1;
}

%>
<div class="vis-inventwo-button-content" style="opacity: <%= this.data.attr('iOpacityImg') %>;">
	<div class="vis-inventwo-button-imageContainer">
	<img src='<%= this.data.iImage %>' style="width:100%; filter: invert(<%= Number(this.data.attr('iInvertImageCol')) %>);transform: scaleX(<%= flip %>);">
	</div>
	</div>
	</div>
	</div>
	</script>