require([
	'dojo/parser',
	'dojo/_base/Deferred',
	'gridx/tests/support/data/TreeColumnarTestData',
	'gridx/tests/support/data/TreeNestedTestData',
	'gridx/tests/support/stores/ItemFileWriteStore',
	'gridx/allModules',
	'gridx/Grid',
	'gridx/core/model/cache/Sync',
	'gridx/core/model/cache/Async',
	'dijit/ProgressBar',
	'dijit/form/NumberTextBox',
	'idx/gridx/modules/filter/FilterBar',
	'idx/gridx/modules/filter/QuickFilter',
	'idx/gridx/support/DateTimeRange',
	'dojo/domReady!'
], function(parser, Deferred, dataSource, nestedDataSource, storeFactory, modules){

	store = storeFactory({
		dataSource: dataSource, 
		maxLevel: 4,
		maxChildrenCount: 10
	});
	store.hasChildren = function(id, item){
		return item && store.getValues(item, 'children').length;
	};
	store.getChildren = function(item){
		return store.getValues(item, 'children');
	};

	storeAsync = storeFactory({
		isAsync: true,
		dataSource: dataSource, 
		maxLevel: 4,
		maxChildrenCount: 10
	});
	storeAsync.hasChildren = function(id, item){
		return item && storeAsync.getValues(item, 'children').length;
	};
	storeAsync.getChildren = function(item){
		var d = new Deferred();
		console.log('getChildren: ', storeAsync.getIdentity(item));
		setTimeout(function(){
			var children = storeAsync.getValues(item, 'children');
			d.callback(children);
		}, 1000);
		return d;
	};

	storeNested = storeFactory({
		dataSource: nestedDataSource, 
		maxLevel: 4,
		maxChildrenCount: 10
	});
	storeNested.hasChildren = function(id, item){
		return item && storeNested.getValues(item, 'children').length;
	};
	storeNested.getChildren = function(item){
		var d = new Deferred();
		setTimeout(function(){
			var children = storeNested.getValues(item, 'children');
			d.callback(children);
		}, 1000);
		return d;
	};

	var progressDecorator = function(){
		return [
			"<div data-dojo-type='dijit.ProgressBar' data-dojo-props='maximum: 10000' ",
			"class='gridxHasGridCellValue' style='width: 100%;'></div>"
		].join('');
	};

	layout1 = [
		//Anything except natual number (1, 2, 3...) means all levels are expanded in this column.
		{id: 'number', name: 'number', field: 'number',
			expandLevel: 'all',
			width: '200px',
			widgetsInCell: true,
			decorator: progressDecorator,
			editable: true,
			editor: 'dijit/form/NumberTextBox'
		},
		{id: 'id', name: 'id', field: 'id'},
		{id: 'string', name: 'string', field: 'string'},
		{id: 'date', name: 'date', field: 'date'},
		{id: 'time', name: 'time', field: 'time'},
		{id: 'bool', name: 'bool', field: 'bool'}
	];
	layout2 = [
		//Expandable column defaults to the first one, if no expandLevel provided.
		{id: 'id', name: 'id', field: 'id'},
		{id: 'number', name: 'number', field: 'number',
			widgetsInCell: true,
			decorator: progressDecorator
		},
		{id: 'string', name: 'string', field: 'string'},
		{id: 'date', name: 'date', field: 'date'},
		{id: 'time', name: 'time', field: 'time'},
		{id: 'bool', name: 'bool', field: 'bool'}
	];
	layout3 = [
		{id: 'number', name: 'number', field: 'number'},
		{id: 'string', name: 'string', field: 'string'},
		{id: 'date', name: 'date', field: 'date'},
		{id: 'time', name: 'time', field: 'time'},
		{id: 'bool', name: 'bool', field: 'bool'},
		{id: 'id', name: 'id', field: 'id'}
	];
	layout4 = [
		{id: 'id', name: 'id', field: 'id'},
		{id: 'number', name: 'number *', field: 'number', expandLevel: 1},
		{id: 'string', name: 'string *', field: 'string', expandLevel: 2},
		{id: 'date', name: 'date', field: 'date'},
		{id: 'time', name: 'time *', field: 'time', expandLevel: 3},
		{id: 'bool', name: 'bool', field: 'bool'}
	];


	mods = [
		modules.Tree,
		modules.Filter,
		// modules.FilterBar,
		'idx/gridx/modules/filter/FilterBar',
		// modules.QuickFilter,
		'idx/gridx/modules/filter/QuickFilter',
		modules.Pagination,
		modules.PaginationBar,
		modules.ColumnResizer,
		// modules.SelectRow,
		modules.ExtendedSelectRow,
		modules.CellWidget,
		modules.Edit,
		modules.IndirectSelectColumn,
		modules.SingleSort,
		modules.VirtualVScroller
	];
	mods1 = [
		modules.Tree,
		modules.Pagination,
		modules.PaginationBar,
		modules.ColumnResizer,
		// modules.SelectRow,
		modules.ExtendedSelectRow,
		modules.CellWidget,
		modules.Edit,
		modules.IndirectSelectColumn,
		modules.SingleSort,
		modules.VirtualVScroller
	];

	parser.parse();
});
