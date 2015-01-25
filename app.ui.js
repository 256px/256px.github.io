$(document).ready(function() {
    function editorUI(El) {
        this.size = 16 * 16; // always a square!
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
            console.log(El);
            $(El).append($('<div/>', {
                class: 'pixel',
                data: this.coordinates(pos)
            }));
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
        };
        this.getPx = function(loc_x, loc_y) {
            // get pixel color
        };
        this.element = this.new(El); // initialise
    };


    var thisEditor = new editorUI($('.editor'));
});
