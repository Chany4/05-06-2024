//constructor functions

function CreateItem(id,name,category,image,description,price){
    this.id = id
    this.name = name
    this.category = category
    this.image = image
    this.description= description
    this.price = price
}

let item1 = new CreateItem(1,'strawberry necklace','jewlery','')