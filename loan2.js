var $ = function (id) 
{
    return document.getElementById(id);
};


/*
 *start
   declare floatMonthlyPayment, intLoanTerm, floatTotalCost
   get floatMonthlyPayment
   get intLoanTerm
   calculate floatTotalCost = floatMonthlyPayment * intLoanTerm
   output floatTotalCost
  end
*/
 var calculate = function()
 {

   var intBlackCats, intWhiteCats, intTotalWhiteAndBlackCats;
   intBlackCats = parseInt($("black_cats").value);
   intWhiteCats = parseInt($("white_cats").value);
   intTotalWhiteAndBlackCats = parseInt((intBlackCats + intWhiteCats));
   $("total_cats").value= intTotalWhiteAndBlackCats;

    
 };
 
 window.onload = function () 
{
    $("white_cats").value = "";
    $("total_cats").value = "";
    $("calc").onclick = calculate;
    $("black_cats").focus();
};