function areaOfTriangle(triangleSide1, triangleSide2, triangleSide3){
    var semiperimeter = (triangleSide1 + triangleSide2 + triangleSide3)/2;
    var area = Math.sqrt(semiperimeter * ((semiperimeter - triangleSide1) * (semiperimeter - triangleSide2) * (semiperimeter - triangleSide3)));
    return area;
};

console.log(areaOfTriangle(3, 4, 5));