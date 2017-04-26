/**
 * @PROJECT_NAME maven-parent
 * @Package
 * @Description:   TODO
 * @author Xiaogang.Zhang
 * @date 2017/4/26 18:01
 * @version V1.0
 */
Ext.define('xjs.field',{

    singleton: true,
    requires:['Ext.field'],

    createTextParam: function(name,fieldLabel,value,allowBlank){
        var settingObj = {
            name: name,
            fieldLabel: fieldLabel,
            value: value,
            allowBlank: allowBlank
        };
        return Ext.createText(settingObj);
    },
    createText: function (settingObj) {
        return Ext.create('Ext.form.TextField',settingObj);
    }
});