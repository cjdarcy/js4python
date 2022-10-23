let data = '9,8,4,3,5,5,1,1,5,8,9,7,7,7,6'
sum = data.split(',')
    .map(function(t) {return parseInt(t)})
    .reduce((a,b) => a+b)

console.log(sum)
