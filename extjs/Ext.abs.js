/**
 * @PROJECT_NAME maven-parent
 * @Package
 * @Description:   TODO
 * @author Xiaogang.Zhang
 * @date 2017/4/26 17:18
 * @version V1.0
 */
/// <reference path="../adapter/ext/ext-base.js" />
/// <reference path="../ext-all.js" />

//#region Ext.form.TextField
function TextField(fName,fLabel,defaultValue)
{
    var text = new Ext.form.TextField();

    if(fName!=null)
        text.name = fName;

    if(fLabel!=null)
        text.fieldLabel = fLabel;

    //设置默认值
    if(defaultValue != null)
        text.setValue(defaultValue);

    return text;
}
//#endregion

//#region Ext.form.TextField
function NumberField(fName,fLabel,defaultValue,allowDecimals,allowNegative,maxValue,minValue)
{
    /// <summary>
    /// Ext.form.NumberField封装
    /// </summary>
    /// <param name="fName">name</param>
    /// <param name="fLabel">fieldLabel</param>
    /// <param name="defaultValue">默认值</param>
    /// <param name="allowDecimals">是否允许小数点</param>
    /// <param name="allowNegative">是否允许负数</param>
    /// <param name="maxValue">最大值</param>
    /// <param name="minValue">最小值</param>
    /// <returns>Ext.form.NumberField</returns>
    var number = new Ext.form.NumberField();

    if(fName!=null)
        number.name = fName;

    if(fLabel!=null)
        number.fieldLabel = fLabel;

    //设置默认值
    if(defaultValue != null && typeof(defaultValue) == "number")
        number.setValue(defaultValue);

    //设置是否允许小数点，默认(不设置)为不允许
    if(allowDecimals != null && typeof(allowDecimals) == "boolean")
        number.allowDecimals = Boolean(allowDecimals);

    //设置是否允许负数，默认(不设置)为不允许
    if(allowNegative != null && typeof(allowNegative) == "boolean")
        number.allowNegative = Boolean(allowNegative);

    //设置最大值
    if(maxValue != null && typeof(maxValue) == "number")
        number.maxValue = Number(maxValue);

    //设置最小值
    if(minValue != null && typeof(minValue) == "number")
        number.minValue = Number(minValue);

    return number;
}
//#endregion

//#region Ext.form.DateField
function DateField(fName,fLabel,defaultValue,format,editable)
{
    /// <summary>
    /// Ext.form.DateField封装
    /// </summary>
    /// <param name="fName">name</param>
    /// <param name="fLabel">fieldLabel</param>
    /// <param name="defaultValue">Boolean:true为当前日期/String: 按'Y-m-d'格式，如2009-1-1</param>
    /// <param name="format">设置日期格式化字符串</param>
    /// <param name="editable">是否允许输入，还是只能选择日期</param>
    /// <returns>Ext.form.DateField</returns>
    var date = new Ext.form.DateField();

    if(fName!=null)
        date.name = fName;

    if(fLabel!=null)
        date.fieldLabel = fLabel;

    //设置日期格式化字符串
    if(format == null)
        format = 'Y-m-d';
    date.format = format;

    //设置默认日期
    if(defaultValue != null)
    {
        if(typeof(defaultValue) == "boolean" && Boolean(defaultValue) == true)
        {
            date.setValue(new Date().dateFormat(format));
        }
        else if(typeof(defaultValue) == "string")
        {
            var strDate =String(defaultValue).split("-");
            if(strDate.length==3)
                date.setValue(new Date(strDate[0],parseInt(strDate[1])-1,strDate[2]).dateFormat(format));
        }
    }

    //是否允许编辑
    if(editable==null)
        editable = false;
    else if(typeof(editable) == "boolean")
        editable = Boolean(editable);

    date.editable = editable;

    return date;
}
//#endregion

//#region Ext.form.TimeField

function TimeField(fName,fLabel,increment,format)
{
    /// <summary>
    /// Ext.form.TimeField封装
    /// </summary>
    /// <param name="fName">name</param>
    /// <param name="fLabel">fieldLabel</param>
    /// <param name="increment">设置时间间隔，单位为分钟</param>
    /// <param name="format">格式化输出，支持格式如下："g:ia|g:iA|g:i a|g:i A|h:i|g:i|H:i|ga|ha|gA|h a|g a|g A|gi|hi|gia|hia|g|H"</param>
    /// <returns>Ext.form.TimeField</returns>
    var time = new Ext.form.TimeField();

    if(fName!=null)
        time.name = fName;

    if(fLabel!=null)
        time.fieldLabel = fLabel;

    //设置时间间隔 默认为15分钟
    if(increment!=null && typeof(increment) == "number")
        time.increment = Number(increment);

    //设置格式化输出 默认为 "g:i A"
    if(format != null && typeof(format) == "string")
        time.format = String(format);

    return time;
}

//#endregion

//#region Ext.form.ComboBox
function ComboBox(fName,fLabel,dataStore,defaultValue,displayField,valueField,editable)
{
    /// <summary>
    /// Ext.form.ComboBox封装
    /// </summary>
    /// <param name="fName">name</param>
    /// <param name="fLabel">fieldLabel</param>
    /// <param name="dataStore">数据源。本地模式，如[[1,'男'],[0,'女']]；远程模式，传入Ext.data.Store</param>
    /// <param name="defaultValue">默认值</param>
    /// <param name="displayField">选项的文本对应的字段</param>
    /// <param name="valueField">选项的值对应的字段</param>
    /// <param name="editable">是否可以输入,还是只能选择下拉框中的选项</param>
    /// <returns>Ext.form.ComboBox</returns>
    var combo = new Ext.form.ComboBox({
        mode: 'local',
        editable : false,
        typeAhead: true,
        triggerAction: 'all',
        selectOnFocus:true
    });

    if(fName!=null)
        combo.name = fName;

    if(fLabel!=null)
        combo.fieldLabel = fLabel;

    if(displayField==null || typeof(displayField) != "string")
        displayField = "Name";
    combo.displayField = String(displayField);

    if(valueField==null || typeof(valueField) != "string")
        valueField = "Id";
    combo.valueField = String(valueField);

    //设置数据源
    if(Ext.isArray(dataStore))
    {
        combo.store = new Ext.data.SimpleStore({
            fields: [valueField, displayField],
            data:dataStore
        });
    }
    else
    {
        combo.store = dataStore;
        combo.mode = 'remote';
    }

    //设置默认值
    if(defaultValue!=null)
        combo.setValue(defaultValue);

    //是否允许编辑
    if(editable!=null && typeof(editable) == "boolean")
        combo.editable = Boolean(editable);

    return combo;
}
//#endregion

//#region Ext.form.TextArea

function TextArea(fName,fLabel,width,height,value)
{
    /// <summary>
    /// Ext.form.TextArea封装
    /// </summary>
    /// <param name="fName">name</param>
    /// <param name="fLabel">fieldLabel</param>
    /// <param name="width">width</param>
    /// <param name="height">height</param>
    /// <param name="value">value</param>
    /// <returns>Ext.form.TextArea</returns>
    var area = new Ext.form.TextArea();

    if(fName!=null)
        area.name = fName;

    if(fLabel!=null)
        area.fieldLabel = fLabel;

    if(width!=null && typeof(width) == "number")
        area.width = Number(width);

    if(height!=null && typeof(height) == "number")
        area.height = Number(height);

    if(value!=null)
        area.value = value;

    return area;
}

//#endregion

//#region Ext.form.RadioGroup

function RadioGroup(fName,fLabel,items,columns)
{
    /// <summary>
    /// Ext.form.RadioGroup封装
    ///     例子：new RadioGroup('Gender','性别',[['男','男',true],['女','女']])
    /// <param name="fName">name</param>
    /// <param name="fLabel">fieldLabel</param>
    /// <param name="items">数据，格式如下:[['男','男',true],['女','女']]</param>
    /// <param name="columns">设置几列自动排列，如果是1的话会按一行来显示</param>
    /// </summary>
    /// <returns>Ext.form.RadioGroup</returns>
    var rg = new Ext.form.RadioGroup();

    if(fName!=null)
        rg.name = fName;

    if(fLabel!=null)
        rg.fieldLabel = fLabel;

    if(columns!=null && typeof(columns) == "number")
        rg.columns = Number(columns);

    var rebuildiItems = new Array();

    if(items !=null){
        for(var i = 0 ;i<items.length; i++)
        {
            rebuildiItems[i] = {};
            rebuildiItems[i].name = fName;
            rebuildiItems[i].boxLabel = items[i][0];
            rebuildiItems[i].inputValue = items[i][1];
            if(items[i].length > 2 && typeof(items[i][2]) == "boolean")
                rebuildiItems[i].checked = Boolean(items[i][2]);
        }

        //Ext.form.RadioGroup扩展
        Ext.override(Ext.form.CheckboxGroup, {
            setItems:function(data){
                this.items = data;
            }
        });

        if(rg.setItems){
            rg.setItems(rebuildiItems);
        }
    }

    return rg;
}

//#endregion

//#region Ext.form.CheckboxGroup

function CheckboxGroup(fName,fLabel,items,columns)
{
    /// <summary>
    /// Ext.form.CheckboxGroup封装
    ///     例子：new CheckboxGroup('Gender','性别',[['男','男',true],['女','女']])
    /// <param name="fName">name</param>
    /// <param name="fLabel">fieldLabel</param>
    /// <param name="items">数据，格式如下:[['男','男',true],['女','女']]</param>
    /// <param name="columns">设置几列自动排列，如果是1的话会按一行来显示</param>
    /// </summary>
    /// <returns>Ext.form.CheckboxGroup</returns>
    var cg = new Ext.form.CheckboxGroup();

    if(fName!=null)
        cg.name = fName;

    if(fLabel!=null)
        cg.fieldLabel = fLabel;

    if(columns!=null && typeof(columns) == "number")
        cg.columns = Number(columns);

    var rebuildiItems = new Array();

    if(items !=null){
        for(var i = 0 ;i<items.length; i++)
        {
            rebuildiItems[i] = {};
            rebuildiItems[i].name = fName;
            rebuildiItems[i].boxLabel = items[i][0];
            rebuildiItems[i].inputValue = items[i][1];
            if(items[i].length > 2 && typeof(items[i][2]) == "boolean")
                rebuildiItems[i].checked = Boolean(items[i][2]);
        }

        //Ext.form.RadioGroup扩展
        Ext.override(Ext.form.CheckboxGroup, {
            setItems:function(data){
                this.items = data;
            }
        });

        if(cg.setItems){
            cg.setItems(rebuildiItems);
        }
    }

    return cg;
}

//#endregion

//#region Ext.form.HtmlEditor

function HtmlEditor(fName,fLabel,width,height,value)
{
    /// <summary>
    /// Ext.form.HtmlEditor封装
    /// </summary>
    /// <param name="fName">name</param>
    /// <param name="fLabel">fieldLabel</param>
    /// <param name="width">width</param>
    /// <param name="height">height</param>
    /// <param name="value">value</param>
    /// <returns>Ext.form.HtmlEditor</returns>
    var editor = new Ext.form.HtmlEditor();

    if(fName!=null)
        editor.name = fName;

    if(fLabel!=null)
        editor.fieldLabel = fLabel;

    if(width!=null && typeof(width) == "number")
        editor.width = Number(width);

    if(height!=null && typeof(height) == "number")
        editor.height = Number(height);

    if(value!=null)
        editor.value = value;

    return editor;
}

//#endregion

//#region Ext.form.Hidden

function Hidden(fName,value)
{
    /// <summary>
    /// Ext.form.Hidden封装
    /// </summary>
    /// <param name="fName">name</param>
    /// <param name="value">value</param>
    /// <returns>Ext.form.Hidden</returns>
    var hidden = new Ext.form.Hidden();

    if(fName!=null)
        hidden.name = fName;

    if(value!=null)
        hidden.value = value;

    return hidden;
}

//#endregion

//#region Ext.form.Checkbox

function Checkbox(fName,fLabel,value,boxLabel,inputValue,checked)
{
    /// <summary>
    /// Ext.form.Checkbox封装
    /// </summary>
    /// <param name="fName">name</param>
    /// <param name="fLabel">fieldLabel</param>
    /// <param name="value">value</param>
    /// <param name="boxLabel"></param>
    /// <param name="inputValue"></param>
    /// <param name="checked"></param>
    /// <returns>Ext.form.Checkbox</returns>
    var checkbox = new Ext.form.Checkbox();

    if(fName!=null)
        checkbox.name = fName;

    if(fLabel!=null)
        checkbox.fieldLabel = fLabel;

    if(value!=null)
        checkbox.value = value;

    if(boxLabel!=null && typeof(boxLabel) == "string")
        checkbox.boxLabel = String(boxLabel);

    if(inputValue!=null)
        checkbox.inputValue = inputValue;

    if(checked!=null && typeof(checked) == "boolean")
        checkbox.checked = Boolean(checked);

    return checkbox;
}

//#endregion

//#region Ext.form.FieldSet

function FieldSet(fName,title,items)
{
    /// <summary>
    /// Ext.form.FieldSet封装
    /// </summary>
    /// <param name="fName">fieldLabel</param>
    /// <param name="title">title</param>
    /// <param name="items">数据源</param>
    /// <returns>Ext.form.FieldSet</returns>
    var fieldset = new Ext.form.FieldSet();

    if(fName!=null)
        fieldset.fieldLabel = fName;

    if(title!=null  && typeof(title) == "string")
        fieldset.title = String(title);

    if(items!=null)
        fieldset.add(items);

    return fieldset;
}

//#endregion

//#region Ext.Panel

function Panel(title,width,height,frame)
{
    /// <summary>
    /// Ext.Panel封装
    /// </summary>
    /// <param name="title">name</param>
    /// <param name="width">value</param>
    /// <param name="height">height</param>
    /// <param name="frame">frame</param>
    /// <returns>Ext.Panel</returns>
    if(title ==null)
        title = '';  //默认值 如果为此值则不显示标题栏

    var panel = new Ext.Panel({
        title:title
    });

    if(width!=null && typeof(width) == "number")
        panel.width = Number(width);

    if(height!=null && typeof(height) == "number")
        panel.height = Number(height);

    if(frame!=null && typeof(frame) == "boolean")
        panel.frame = Boolean(frame);

    return panel;
}

//#endregion

//#region MessageBox

function MsgConfirm(msg,title,fn,width)
{
    /// <summary>
    /// Ext.Msg.show 问题确认框
    /// </summary>
    /// <param name="msg">设置要输出的信息</param>
    /// <param name="title">设置确认框标题</param>
    /// <param name="fn">设置回调fn函数</param>
    /// <param name="width">设置确认框宽</param>
    /// <returns>Ext.Msg.show</returns>
    if(msg ==null)
        msg = "";

    if(title == null || typeof(title) != "string")
        title = "问题";

    if(width == null || typeof(width) != "number")
        width = 400;

    if(fn == null || typeof(fn) != "function")
        fn = new function(){};

    return Ext.Msg.show({
        title: title,
        msg: msg,
        width: width,
        icon:Ext.MessageBox.QUESTION,
        buttons: Ext.MessageBox.YESNO,
        fn:fn
    });
}

function MsgInfo(msg,title,width)
{
    /// <summary>
    /// Ext.Msg.show 信息提示框
    /// </summary>
    /// <param name="msg">设置要输出的信息</param>
    /// <param name="title">设置标题</param>
    /// <param name="width">设置提示框宽</param>
    /// <returns>Ext.Msg.show</returns>
    if(msg ==null)
        msg = "";

    if(title == null || typeof(title) != "string")
        title = "提示";

    if(width == null || typeof(width) != "number")
        width = 400;

    return Ext.MessageBox.show({
        title: title,
        msg: msg,
        width: width,
        icon:Ext.MessageBox.INFO,
        buttons: Ext.MessageBox.OK
    });
}

function MsgError(msg,title,width)
{
    /// <summary>
    /// Ext.Msg.show 错误提示框
    /// </summary>
    /// <param name="msg">设置要输出的信息</param>
    /// <param name="title">设置标题</param>
    /// <param name="width">设置提示框宽</param>
    /// <returns>Ext.Msg.show</returns>
    if(msg ==null)
        msg = "";

    if(title == null || typeof(title) != "string")
        title = "错误";

    if(width == null || typeof(width) != "number")
        width = 400;

    return Ext.MessageBox.show({
        title: title,
        msg: msg,
        width: width,
        icon:Ext.MessageBox.ERROR,
        buttons: Ext.MessageBox.OK
    });
}

function MsgWarning(msg,title,width)
{
    /// <summary>
    /// Ext.Msg.show 警告提示框
    /// </summary>
    /// <param name="msg">设置要输出的信息</param>
    /// <param name="title">设置标题</param>
    /// <param name="width">设置提示框宽</param>
    /// <returns>Ext.Msg.show</returns>
    if(msg ==null)
        msg = "";

    if(title == null || typeof(title) != "string")
        title = "警告";

    if(width == null || typeof(width) != "number")
        width = 400;

    return Ext.MessageBox.show({
        title: title,
        msg: msg,
        width: width,
        icon:Ext.MessageBox.WARNING,
        buttons: Ext.MessageBox.OK
    });
}

//#endregion