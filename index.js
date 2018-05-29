function f(){
    var a=document.getElementById('a');
    var div=document.getElementById('hidimg');
    var page=document.getElementsByClassName('page1')[0];
    var icon=document.getElementById('ic');
    var price=document.getElementById('price');
    var sel_price=document.getElementById('sel_price');
    var op_price=document.getElementsByClassName('pr');
    var num=document.getElementById('num');
    var but=document.getElementsByClassName('but')[0];
    var t;
    var n;

    a.onclick=function(){
      div.style.display='block';
      page.style.display="none";
    }
    ic.onclick=function(){
      div.style.display='none';
      page.style.display="block";
    }
    num.addEventListener('click',addprice);
    sel_price.addEventListener('click',addprice);
    function addprice(){
      n=+num.value;
      t=sel_price.value;
      var k=t*n
      if(sel_price.value!=='')
      {
        $('#price').html('$'+k);
        $("#price").show(300);
      }
      else
      {
        num.value=1;
        $("#price").hide(300);
        $('#price').html('');
      }
}
}
// $(document).ready(function(){
//   $('#a').click(function(){
//     $('#hidimg').css("display","block");
//     $('.page1').css('display','none');
//   });
//   $('#ic').click(function(){
//     $('#hidimg').css("display","none");
//     $('.page1').css("display","block");
//   });
//   $('#num').click(function(){
//     var n=$('#num').val();
//     var t=$("#sel_price").val();
//     var $k=n*t;
//     // console. log(n);
//     if(t!==""){
//       $("#price").html('$'+$k);
//       $('#price').show(500);
//     }else{
//       $('#price').hide(500);
//       $("#price").html('');
//     }
//   });
//   $('#sel_price').change(function(){
//     var n=$('#num').val();
//     var t=$("#sel_price").val();
//     var $k=n*t;
//     // console. log(k);
//     if(t!==""){
//       $('#price').html('$'+$k);
//       $('#price').show(500);
//     }
//     else
//     {
//       $('#price').hide(500);
//       $('#num').val(1);
//       $("#price").html('');
//     }
//   });
// });
