define([
	'gridx/core/model/extensions/FormatSort',
	'gridx/modules/Focus',
	'gridx/modules/VScroller',
	'gridx/modules/ColumnResizer',
	'gridx/modules/VirtualVScroller',
	'gridx/modules/SingleSort',
	'gridx/modules/NestedSort',
	'idx/gridx/modules/Sort',
	'gridx/modules/ColumnLock',
	'gridx/modules/select/Row',
	'gridx/modules/select/Column',
	'gridx/modules/select/Cell',
	'gridx/modules/extendedSelect/Row',
	'gridx/modules/extendedSelect/Column',
	'gridx/modules/extendedSelect/Cell',
	'gridx/modules/move/Row',
	'gridx/modules/move/Column',
	'idx/gridx/modules/dnd/Row',
	'idx/gridx/modules/dnd/Column',
	'gridx/modules/AutoScroll',
	'gridx/modules/pagination/Pagination',
	'gridx/modules/pagination/PaginationBar',
	'gridx/modules/pagination/PaginationBarDD',
	'gridx/modules/filter/Filter',
	'gridx/modules/CellWidget',
	'gridx/modules/Edit',
	'gridx/modules/RowHeader',
	'gridx/modules/IndirectSelect',
	'gridx/modules/Persist',
	'gridx/modules/exporter/Exporter',
	'gridx/modules/exporter/CSV',
	'gridx/modules/exporter/Table',
	'gridx/modules/Printer',
	'gridx/modules/Menu',
	'gridx/modules/Dod',
	'gridx/modules/SummaryBar',
	'gridx/modules/ToolBar',
	'gridx/modules/TitleBar',
	'gridx/modules/Tree',
	'gridx/modules/RowLock',
	'idx/gridx/modules/filter/FilterBar',
	'idx/gridx/modules/filter/QuickFilter',
	'idx/gridx/modules/pagination/PaginationBar',
	'idx/gridx/modules/pagination/PaginationBarDD'
], function(FormatSort, 
	Focus, VScroller, ColumnResizer, VirtualVScroller,
	SingleSort, NestedSort, Sort, ColumnLock,
	SelectRow, SelectColumn, SelectCell,
	ExtendedSelectRow, ExtendedSelectColumn, ExtendedSelectCell,
	MoveRow, MoveColumn,
	DndRow, DndColumn, AutoScroll,
	Pagination, PaginationBar, 
	PaginationBarDD,
	Filter,
	CellWidget, Edit,
	RowHeader, IndirectSelect,
	Persist, Exporter, CSV, Table, Printer,
	Menu, Dod, 
	SummaryBar,
	ToolBar, TitleBar, Tree, RowLock, FilterBar, QuickFilter,
	OneUIPaginationBar,
	OneUIPaginationBarDD){
return {
	FormatSort: FormatSort,
	Focus: Focus,
	VScroller: VScroller,
	ColumnResizer: ColumnResizer, 
	VirtualVScroller: VirtualVScroller,
	SingleSort: SingleSort,
	NestedSort: NestedSort,
	ColumnLock: ColumnLock,
	SelectRow: SelectRow,
	SelectColumn: SelectColumn,
	SelectCell: SelectCell,
	ExtendedSelectRow: ExtendedSelectRow,
	ExtendedSelectColumn: ExtendedSelectColumn,
	ExtendedSelectCell: ExtendedSelectCell,
	MoveRow: MoveRow,
	MoveColumn: MoveColumn,
	AutoScroll: AutoScroll,
	Pagination: Pagination,
	PaginationBar: PaginationBar,
	PaginationBarDD: PaginationBarDD,
	Filter: Filter,
	CellWidget: CellWidget,
	Edit: Edit,
	RowHeader: RowHeader,
	IndirectSelect: IndirectSelect,
	Persist: Persist,
	Exporter: Exporter,
	ExportCSV: CSV,
	ExportTable: Table,
	Printer: Printer,
	Menu: Menu,
	Dod: Dod,
	SummaryBar: SummaryBar,
	ToolBar: ToolBar,
	TitleBar: TitleBar,
	Tree: Tree,
	RowLock: RowLock,

	//OneUI specific
	DndRow: DndRow,
	DndColumn: DndColumn,
	Sort: Sort,
	FilterBar: FilterBar,
	QuickFilter: QuickFilter,
	OneUIPaginationBar: OneUIPaginationBar,
	OneUIPaginationBarDD: OneUIPaginationBarDD
};
});