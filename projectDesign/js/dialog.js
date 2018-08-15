function dlgClose(){
     var s=$('#dlgbox');
     s.css('display','none');
     var w=$('#white');
     w.css('display','none')
}
function showDialog(){
    var s=$('#dlgbox');
    s.css('display','block');
    var w=$('#white');
    w.css('display','block');

    var winw=window.innerWidth;
    var winh=window.innerHeight;
    var formula=(winw/2 )- 480/2+'px';
    s.css('left', '20px');
    s.css('top', '20px');
}
function dlClose(){
    var s=$('#dlbox');
    s.css('display','none');
    var w=$('#dl');
    w.css('display','none')
}
function shDialog(){
   var s=$('#dlbox');
   s.css('display','block');
   var w=$('#dl');
   w.css('display','block');

   var winw=window.innerWidth;
   var winh=window.innerHeight;
   var formula=(winw/2 )- 480/2+'px';
   s.css('right', '0px');
   s.css('top', '20px');
}