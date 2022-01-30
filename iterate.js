grades = [{"name":"KAPCUL","grade":1},{"name":"MATH","grade":1},{"name":"PHY","grade":3}]

console.log(grades.map(joinText))

function joinText(item){
    return `${item.name}  - ${item.grade}`    
}