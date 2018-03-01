$(function() {
	
	var txt = "";
	
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		txt = "This browser support fileAPI!!!";
	} else {
		txt = "This is text from js-script...";
	}
	
	$("#main").text(txt);
	
 	function TableModel(rows, cols) {
		this._rowCount = rows;
		this._colCount = cols;
		this.cells = [];
	}
	
	TableModel.prototype.setRows = function(rows) {
		this._rows = rows;
	}
	
	TableModel.prototype.getRows = function() {
		return this._rows;
	}
	
	TableModel.prototype.setCols = function(cols) {
		this._cols = cols;
	}
	
	TableModel.prototype.getCols = function() {
		return this._cols;
	}
	
	TableModel.prototype.setSize = function(rows, cols) {
		this.setRows(rows);
		this.setCols(cols);
	}
	
	TableModel.prototype.getSize = function() {
		return 0
		//return [this._rows, this._cols];
	}
	
	TableModel.prototype.getCell = function(row, col) {
		return this.cells[row][col];
	}
	
	function Cell(value) {
		this._value = value;
	}
	
	Cell.prototype.setValue = function(value) {
		this._value = value;
	}
	
	Cell.prototype.getValue = function() {
		return this._value;
	}
})
