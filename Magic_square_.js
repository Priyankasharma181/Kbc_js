var magic_square = [[  2 ,  7  , 6]
    [9  , 5   ,1],
    [4 ,  3  , 8],
  ]
var sum = 0
for( var i= 0; i<magic_square.length;i++){
    for (var j = 0;j<magic_square[i].length;j++){
        if (i==j){
            sum=sum+magic_square[i][j]  
        }
    }  
}console.log(sum)

sum_1 = 0
for (k in magic_square.length){
    for (l in magic_square[k].length){
        if (k+l===(magic_square[k]-1).length){
            sum_1=sum_1+magic_square[k][l] 
        }  
    } 
}console.log(sum_1) 
c1sum = 0
c2sum = 0
c3sum = 0
for (var m =0 ;m<magic_square.length;m++){
    for (var n = 0;n<magic_square[m].length;n++){
        if (n==0){
            c1sum = c1sum + magic_square[m][n]
        }else if  (n==1){
            c2sum = c2sum + magic_square[m][n]
        }else if (n==2){
            c3sum = c3sum + magic_square[m][n]
        }
    }
}console.log(c1sum , c2sum , c3sum) 
var r1sum = 0
var r2sum = 0
var r3sum = 0
for (p=0;p<magic_square.length;p++){
    for (q =0; q<magic_square[p].length;q++){
        if (p == 0){
            r1sum = r1sum + magic_square[p][q]
        }else if  (p == 1){
            r2sum = r2sum + magic_square[p][q]
        }else if (p == 2){
            r3sum = r3sum + magic_square[p][q]
        }
    }    
}console.log(r1sum , r2sum , r3sum)  
if (r1sum === r2sum ===r3sum ===c1sum===c2sum===c3sum===sum===sum_1){
    console.log("it is magic square")

}else {
    console.log("it is not magic square")  
}                     
