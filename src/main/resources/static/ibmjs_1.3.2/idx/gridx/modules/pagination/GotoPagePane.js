define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/keys",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dojo/text!../../templates/GotoPagePane.html"
], function(declare, lang, keys, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, goToTemplate){

	return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
		templateString: goToTemplate,
	
		pager: null,

		postMixInProperties: function(){
			var t = this,
				mod = t.pager.module;
			lang.mixin(t, t.pager._nls);
			t.numberTextBoxClass = mod.arg('numberTextBoxClass').prototype.declaredClass;
			t.buttonClass = mod.arg('buttonClass').prototype.declaredClass;
			t.connect(t.domNode, 'onkeydown', '_onKeyDown');
		},
	
		postCreate: function(){
			var t = this;
			setTimeout(function(){
				t.pager._gotoDialog.state = 1;
				t._updateStatus();
			}, 10);
		},
	
		_updateStatus: function(){
			this.pageInputBox.validate();
			this.pager._gotoDialog.buttons[0].set('disabled', !this.pageInputBox.isValid() || this.pageInputBox.get('displayedValue') === "");
		},
	
		_onOK: function(){
			this.pager.pagination.gotoPage(this.pageInputBox.get('value') - 1);
			this.pager._gotoDialog.hide();
		},

		_onKeyDown: function(evt){
			var btn = this.pager._gotoDialog.buttons[0];
			if(!btn.get('disabled') && keys.ENTER == evt.keyCode){
				this._onOK();
			}
		}
	});
});
