function editorUI(){
  this.new = function(){
    // create new artboard
  };
  this.editPx = function(loc_x, loc_y, color){
    // update a pixel
  };
  this.getPx = function(loc_x, loc_y){
    // get pixel color
  };
  this.new(arguments); // initialise
};

var thisEditor = new editorUI();
