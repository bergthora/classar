// class Picture { //venjan að classar byrja á stórum staf
// 	constructor(texti = "ekkert sett inn") {
// 		this.mynd = "texti";
// 	}
// 	logMyndVar() {
// 		console.log(this.mynd);
// 	}
// }

// const myPic = new Picture();
// console.log(myPic.mynd);
// myPic.logMyndVar();
// const pic = new Picture("kk");
// pic.logMyndVar();


// class Picture{
//   constructor(source="", target=document.body){
//     console.log(source);
//     this._source = source;
//     this._mynd = document.createElement("img");
//     this._mynd.src= this.source;
//     this.target = target;
//     this.target.append(this._mynd);
//   }
//   getInfo(){
//     console.log(`
//       source er: ${this._source}
//       og target er: ${this.target}
//     `);
//   }
//   set source(newValue){
//     this._source = newValue;
//     this._mynd.src = newValue;

//   }

//   set mynd(newValue) {
//     this._mynd = newValue;
//     this.target.append(this._mynd);
//   }

// }

// //const myPic = new Picture();
// const myPic2 = new Picture("mynd1.jpg");
// const myndElement = document.createElement("img");
// myndElement.src = "mynd1.jpg";
// myPic2.mynd = myndElement;
// myPic2.getInfo();
// myPic2.source = "mynd2.jpeg";

//gera Picture klassann þannig að hann taki inn tvo parametra sem eru source og target. 
//Parameterinn source er strengur og hefur default value "".
//Parameterinn target er DOM element með default value document.body

// bæta við breytu sem tekursem gildi eintak af Picture clasanum 
// setja inn tvo argument. 
// fyrra argumentið er "mynd.jpg".
// seinna argumentið er "document.createElement("div")


//búa til samskonar set method fyrir mynd þannig að þegar mypic2.mynd
//fær nýtt gildi bætist nýja myndin líka við mypic2.target




class Picture{
  constructor(source="", target=document.body){
    console.log(source);
    this._source = source;
    this._mynd = document.createElement("img");
    this._mynd.src= this._source;
    this.target = target;
    this.target.append(this._mynd);
  }
  getInfo(){
    console.log(`
      source er: ${this._source}
      og target er: ${this.target}
    `);
  }
  set source(newValue){
    this._source = newValue;
    this._mynd.src = newValue;
  }
 set mynd(newValue){
  this._mynd = newValue;
  this.target.append(this._mynd);
 }
}

//const mypic = new Picture();
const mypic2 = new Picture("mynd1.jpg");
const myndElement = document.createElement("img")
myndElement.src = "mynd2.jpeg"
mypic2.getInfo();
mypic2.mynd = myndElement;






