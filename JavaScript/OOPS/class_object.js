class Human{
          //properties
          //by default public
           age=25;
          #wt=90; //private
           ht=180;


          //behaviour
         walking(){
                    console.log("walk",this.#wt);
          }
          running(){
                    console.log("running");
          }


}
let obj=new Human();
console.log(obj.age);
obj.walking();