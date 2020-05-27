var Links ={
    setColor:function (color){
    var alist=document.querySelectorAll('a');
    var i=0;
    while(i<alist.length){
    console.log(alist[i]);
    alist[i].style.color = color;
    i = i+1;
    }
}


var Body = {
    setColor : function (color){
    document.querySelector('body').style.color = color;
    },
    BodysetBackgroundColor : function (color){
    document.querySelector('body').style.backgroundColor = color;
    }
}



function nightDayHandler(self){
    var target = document.querySelector('body')
            if ( self.value === 'night') {
                Body.BodysetBackgroundColor('black');
                Body.setColor('white');
                self.value = 'day';
            Links.setColor('white');
            
            } else  { 
                Body.BodysetBackgroundColor('rgb(193, 224, 222)');
                Body.setColor('black');
              
                self.value = 'night';
              
            Links.setColor('black');
              
            }
            

}