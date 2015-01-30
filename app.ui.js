$(document).ready(function() {
    function editorUI(El) {
        this.size = 16 * 16; // always a square!
        this.map = [];
        this.coordinates = function(pos) {
            var LineLength = Math.sqrt(this.size);
            var x = pos % LineLength;
            var y = Math.floor(pos / LineLength);

            return ({
                x: x,
                y: y
            });
        }
        this.addPx = function(pos) {
            $(El).append($('<div/>', {
                class: 'pixel pixel-x-' + this.coordinates(pos).x + '-y-' + this.coordinates(pos).y,
                data: this.coordinates(pos)
            }));
            if(typeof this.map[this.coordinates(pos).x] == 'undefined'){this.map[this.coordinates(pos).x] = [];}
            this.map[this.coordinates(pos).y][this.coordinates(pos).x] = 'ffffff';
        };
        this.new = function(El) {
            var PixelsTotal = 0;
            var PixelsTodo = 16 * 16;
            while (PixelsTotal < PixelsTodo) {
                this.addPx(PixelsTotal); // where pos = PixelsTotal
                PixelsTotal++;
            }


        };
        this.editPx = function(loc_x, loc_y, color) {
            // update a pixel
            this.map[loc_y][loc_x] = color;

        };
        this.getPx = function(loc_x, loc_y) {
            // get pixel color
        };
        this.element = this.new(El); // initialise
    };

    var thisEditor = new editorUI($('.editor'));
    $('.pixel').mousedown(function(){
      $(this).css('background-color', $('.i_color').val());
      thisEditor.editPx($(this).data().x,$(this).data().y, $('.i_color').val().substr(1,6));
    });
});
