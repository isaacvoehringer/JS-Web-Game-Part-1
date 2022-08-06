function newImage(x, y, z) {
    let object = document.createElement('img')
    object.src = x
    object.style.position = 'fixed'
    object.style.left = y + 'px'
    object.style.bottom = z + 'px'
    document.body.append(object) 
    return object 
}
function newItem(x, y, z) {
    let object = newImage(x, y, z)
    object.addEventListener('dblclick', () => {
     object.remove()} )  
    }

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)




newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)

// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.position = 'fixed'
// sword.left = '500px'
// sword.bottom = '405px'
// document.body.append(sword)

// sword.addEventListener('click', function(){
//     sword.remove()
// })

