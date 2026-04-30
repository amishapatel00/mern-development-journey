class Human{
          //properties
          //by default public
          age=25;
          #wt=90; //private
           ht=180;


          //behaviour
         walking(){
                    console.log("walk");
          }
          running(){
                    console.log("running");
          }
          get getData(){
                    return this.#wt;
          }
          set setData(val){
                    this.#wt=val;
          }


}
let obj=new Human();
console.log(obj.age);
console.log(obj.getData);
obj.setData=70;
console.log(obj.getData);