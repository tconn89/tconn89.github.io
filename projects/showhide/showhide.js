
ShowHideSwitch = function (id, self_id){
    var _i = this;
    _i.isHidden = false;
    var correctedId = '#' + id;
    var corr_self_Id = '#' + self_id;
    $(correctedId)
        .append("<button id=" + self_id + ">Hide</button>");
    $(corr_self_Id)
        .attr({ type: 'button' })
        .addClass("text");
    _i.query = function(){
        
        var promise = new Promise(function(state1, state2){
                   if(isHidden)
                        state1("hiding");
                   else
                        state2("shown"); 
        });

        promise.then(function(result){
            console.log(result);
            }, function(alt) {
            console.log(alt);
        });
        return promise;
    }

        $(corr_self_Id).click(function ()
        {
            
                
                $('#toggled').toggle();

                if($(this).text() == 'Show'){
                    $(this).text('Hide');
                    _i.isHidden = false;
                }
                else{
                    $(this).text('Show');
                    _i.isHidden = true;
                }
        });

}
            
$(document).ready(function(){
    var switch1 = new ShowHideSwitch('button', "innerButton");
    console.log(switch1.query());

});
