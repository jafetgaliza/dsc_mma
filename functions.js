var category = {};
var categories = [];

function saveCategory() {

	category.name = document.formCategory.name.value;
    category.minimumWeight = document.formCategory.minimumWeight.value;
    category.maximumWeight = document.formCategory.maximumWeight.value;

    categories.push(category);

    listCategories();

}

function listCategories() {

	var data;

    for(var i = 0; i < categories.length; i++) {
    	data = '<table> <thead> <th> </th> <th> </th> <th> </th> </thead> <tbody> <tr> <td>' + categories[i].name +
    		   '</td> <td>' + categories[i].minimumWeight + '</td> <td>' + categories[i].maximumWeight + '</td> </tr> </tbody> </table>';	
    }

    document.getElementById("output").innerHTML += data;

}

