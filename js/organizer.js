$(function() {
	function TableModel(rows, cols) {
		this._rowCount = rows;
		this._colCount = cols;
		this.cells = []
	}
	
	TableModel.prototype.setRows = function(rows) {
		this._rows = rows;
	}
	
	TableModel.prototype.getRows = function() {
		return this._rows;
	}
	
	$("#main").text("This is text from js-script...");
})
