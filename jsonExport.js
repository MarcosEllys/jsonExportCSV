/*
 * ExportJson JavaScript Library v1.0
 * http://jquery.com/
 *
 * Copyright 2016 Marcos Ellys, Esequias Neto e Wandecilenio
 * Released under the MIT license
 *
 * Date: 2016-03-21
 */

(function() {
  this.ExportJson = function() {

    // Options default
    var defaults = {
    	data: [],
    	title: "",
    	header: true,
    	asc: false,
    	headerPersonalized: {}
    };

    // Create options by extending defaults with the passed in arugments
		if ( arguments[0] && typeof arguments[0] === "object" ) {
    	this.options = extendDefaults(defaults, arguments[0]);
    }
  };


  /**
 	* Function responsible for export CSV
 	*
 	* @return {CSV}
 	*/
  ExportJson.prototype.export = function() {
    buildOut.call(this);
  };

  function buildOut() {
  	//If this.options.data is not an object then JSON.parse will parse the JSON string in an Object
		var arrData = typeof this.options.data != 'object' ? JSON.parse(this.options.data) : this.options.data;

		var CSV = '';
		var header = [];

		//This condition will generate the Label/Header
		var row = "";

		// Method check header personalized
		function isEmpty(object) {
		  for(var key in object) {
		      return false;
		  }
		  return true;
		}

		// Data for header
		var tempDataHeader = constructHeader(isEmpty(this.options.headerPersonalized) ? arrData[0] : this.options.headerPersonalized, this.options.asc === true ?  true : false);

		header = tempDataHeader;

		// This loop will extract the label from 1st index of on array
		for (var i = 0, length = tempDataHeader.length; i < length; i++) {
		  this.options.header === true ? row += processKeyObj(tempDataHeader[i]) + ';' : null;
		}


		this.options.header === true ? row = row.slice(0, -1) : null;

		this.options.header === true ? CSV += row + '\r\n' : null;

		//1st loop is to extract each row
		for (var i = 0, length = arrData.length; i <  length; i++) {
		  var row = "";

		  //2nd loop will extract each column and convert it in string comma-seprated
		  if (isEmpty(this.options.headerPersonalized)) {
			  for (var key in header) {
			    if (key != 'contains') {
			       row += '"' + arrData[i][header[key]] + '";';
			    }
			  }
		  }
		  else {
		  	for (var key in header) {
			    if (key != 'contains') {
			       row += '"' + arrData[i][this.options.headerPersonalized[header[key]]] + '";';
			    }
			  }
		  }

		  row.slice(0, row.length - 1);
		  //add a line break after each row
		  CSV += row + '\r\n';
		}

		if (CSV === '') {
		  alert("Invalid data");
		  return;
		}

	  //Generate a file name
	  var fileName = this.options.fileName.replace(/ /g,"_");

	  //Initialize file format you want csv or xls
	  var uri = 'data:text/csv;charset=utf-8,\uFEFF' + encodeURI(CSV);

	  //this trick will generate a temp <a /> tag
	  var link = document.createElement("a");
	  link.href = uri;

	  //set the visibility hidden so it will not effect on your web-layout
	  link.style = "visibility:hidden";
	  link.download = fileName + ".csv";

	  //this part will append the anchor tag and remove it after automatic click
	  document.body.appendChild(link);
	  link.click();
	  document.body.removeChild(link);
  }

	/**
 	* Function to extract header
 	*
 	* @param {object} header - Objeto for reurn
 	* @param {Boolean} asc - Order ( True || False)
 	* @return {tempDataHeader}
 	*/
  function constructHeader ( header, asc ) {
  	var tempDataHeader = Object.keys(header);

  	// Check id
		var idKey = tempDataHeader.indexOf('id');

		// If you have id
		if ( idKey > 0 ) { tempDataHeader.splice(idKey, 1); }

		if (asc) { tempDataHeader.sort(); }

		// If you have id
		if ( idKey > 0 ) { tempDataHeader.unshift('id'); }

		return tempDataHeader;
  }

  /**
 	* Function to format string
 	*
 	* @param {string} str - String serialized
 	* @return {str}
 	*/
  function processKeyObj (str) {
	  if ( str !== undefined && str !== null ) {
	  	if ( str.match(/(\_id|id\_|^id|$id)/) !== null ) {
        str = str.replace(/(\_id|id\_|^id|$id)/, " Codigo");
      }

	    if ( str.match(/(\_|\-)/) !== null ) {
	      str = str.replace(/(\_|\-)/g, " ");
	    }

	    var title = str.split("");
	    title[0] = title[0].toUpperCase();
	    title = title.join("");
	    return title;
	  }
	  return str;
	}

	/**
 	* Function to extends plugin options
 	*
 	* @param {Array} source - Options
 	* @param {Object} properties - Properties
 	* @return {source}
 	*/
  function extendDefaults(source, properties) {
    var property;
    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }
    return source;
  }
}());
