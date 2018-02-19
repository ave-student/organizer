$(function() {
	function TableModel(rows, cols) {
		this._rows = rows;
		this._cols = cols;
	}
	
	TableModel.prototype.setRows = function(rows) {
		this._rows = rows;
	}
	
	TableModel.prototype.getRows = function() {
		return this._rows;
	}
	
	$("#main").text("This is text from js-script...");
})
