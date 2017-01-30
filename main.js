class Picture{
  constructor(source="", target=document.body){
    this._source = source;
    this.target = target;
  }
  getInfo(){
    console.log(`
      source er: ${this._source}
      og target er: ${this.target}
    `);
  }
  set source(newValue){
    this._source = newValue;
  }
}
class ImgPicture extends Picture{
  constructor(source,target){
    super(source, target);  //Til að setja það að constructor eigi að gera það sama. Nota super til að komast inní hinn classann.
    this._mynd = document.createElement("img");
    this._mynd.src= this._source;
    this.target.append(this._mynd);
  }
  set source(newValue){
    super.source = newValue;
  }
}
//const mypic = new Picture();
const mypic2 = new Picture("mynd1.jpg");
mypic2.getInfo();

//búið til samskonar klasa og ImgPicture sem heitir DivPicture
//sem erfir frá Picture klasanum en setur myndina sem backgroundImage
//í DivPicture

//divElement.style.width = "400px"
//divElement.style.height = "400px"
//divElement.style.backgroundImage = "url(img/nafnamynd)"
