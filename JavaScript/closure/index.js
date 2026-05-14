function outerFun() {
          let name="Amisha";
          function inneFun() {
                    console.log(name);     
          }
         return inneFun;
          
}
 let fun=outerFun();
 fun();