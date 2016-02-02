SF.Game = Class.extend({

    init: function(o) {

        // document.getElementById('ad').style.display = 'block';
        // document.getElementById('adLarge').style.display = 'block';

        SF.preventDefault = false;

    },


    update: function() {

        var i = SF.entities.length;
        // cycle through all entities and update as necessary
        // for (i = 0; i < SF.entities.length; i += 1) {
        while(i--) {
            SF.entities[i].update();

            if ( SF.entities[i].checkCollision && 
                SF.entities[i].collides(SF.entities[0])) {

                SF.entities[i].hit();
                SF.entities[0].hit(SF.entities[i].strength,
                                    SF.entities[i].name);

            }

            // delete from array if remove property
            // flag is set to true
            if (SF.entities[i].remove) {
                SF.entities.splice(i, 1);
            }
        }

   
    },

    render: function() {

        // var i = SF.entities.length;

        // cycle through all entities and render to canvas
        for (i = 0; i < SF.entities.length; i += 1) {
        // while(i--) {
            SF.entities[i].render();
        }

   
    
    }


});




