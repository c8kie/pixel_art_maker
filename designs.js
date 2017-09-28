// Select color input
const colorPicker = $('#color_picker');
// Select size input
const heightInput = $('#input_height');
const widthInput = $('#input_width');

let color = colorPicker.val();
let height = heightInput.val();
let width = widthInput.val();

let mousePressed = false;

colorPicker.change(function () {
	color = $(this).val();
	// console.log('Color was picked!' + color);
});

heightInput.change(function () {
	height = $(this).val();
	// console.log('Height was chosen!' + height);
});

widthInput.change(function () {
	width = $(this).val();
	// console.log('Widht was chosen!' + width);
});

// When size is submitted by the user, call makeGrid()
$('button').click(function(event) {
	event.preventDefault();
	// console.log('Button was clicked!');
	makeGrid();
});

$('table').on('mousedown', 'td', function () {
	$(this).css('background-color', color);
});

$('table').mousedown(function(){
	mousePressed = true;
});

$('html').mouseup(function(){
	mousePressed = false;
});

$('table').on('mouseover', 'td', function (event) {
	if(mousePressed) {
		$(this).css('background-color', color);
	}
});

function makeGrid() {
	let gridTable = $('table');
	gridTable.html('');
	let tableRowStr = '';
	let h = 0;
	while(h < height) {
		tableRowStr = '<tr>';
		for(let w = 0; w < width; w++) {
			tableRowStr += '<td></td>';
		}
		tableRowStr += '</tr>';
		gridTable.append(tableRowStr);
		h++;
	}
}
