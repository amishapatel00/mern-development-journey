class Human{
          //properties
          //by default public
          age=25;
          #wt=90; //private
           ht=180;

           //object ko this keyword se access karte hai ;

           constructor(newAge,newWt,newht){

                    this.age=newAge;
                    this.#wt=newWt;
                    this.ht=newht;
           }


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
let obj=new Human(10,20,30);
console.log(obj.age);
console.log(obj.ht);
console.log(obj.getData);
