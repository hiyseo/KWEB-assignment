const ellipse={
    width: 10,
    height: 5,
    getArea(){
        console.log(Math.PI * this.width * this.height)
    },
    getPerimeter(){
        console.log(2*Math.PI*Math.sqrt((Math.pow(this.width,2)+Math.pow(this.height,2))/2))
    },
    getEccentricity(){
        console.log(Math.sqrt(1-Math.pow((this.height/this.width),2)))
    },
};

ellipse.getArea();
ellipse.getPerimeter();
ellipse.getEccentricity();