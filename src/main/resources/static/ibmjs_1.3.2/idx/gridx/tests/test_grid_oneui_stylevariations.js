require([
	'dojo/ready',
	'dojo/_base/array',
	'idx/gridx/tests/support/data/ComputerData',
	'idx/gridx/tests/support/stores/Memory',
	'dijit/form/Button',
	'gridx/Grid',
	'gridx/core/model/cache/Sync',
	'idx/gridx/tests/support/modules'
], function(ready, array, dataSource, storeFactory, Button){

	store = storeFactory({
		dataSource: dataSource,
		size: 100
	});

	layout = dataSource.layouts[0];

	function addToolbarButtons(grid){
		grid.toolBar.widget.addChild(new Button({
			showLabel: false,
			label: 'Cut',
			iconClass: 'testToolbarButtonCut'
		}));
		grid.toolBar.widget.addChild(new Button({
			showLabel: false,
			label: 'Copy',
			iconClass: 'testToolbarButtonCopy'
		}));
		grid.toolBar.widget.addChild(new Button({
			showLabel: false,
			label: 'Paste',
			iconClass: 'testToolbarButtonPaste'
		}));
	}

	ready(function(){
		array.forEach([gridA, gridB, gridC, gridD, gridE, gridF, gridG, gridH, gridI, gridJ], addToolbarButtons);
	});
});
