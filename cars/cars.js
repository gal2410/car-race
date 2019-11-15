function Car(location,color,image){
    this.location = location;
    this.color = color;
    this.image = "images/" + image;
    this.move = function(new_x,new_y){
        this.location = {x:new_x,y:new_y};
    }

    this.printToScreen = function() {
        var img = $("<img class='car'  src='" + this.image + "'/>");
        $(img).css("position","fixed");
        $(img).css("top", this.location.y);
        $(img).css("left", this.location.x);
        return img;
    }

}