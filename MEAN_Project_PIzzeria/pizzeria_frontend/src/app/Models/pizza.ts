export class Pizza {
    _id: string
    name: string
    type: string
    price: number
    image: string
    description: string
    ingredients: string[]
    topping: string[]


    constructor() {
        this._id = ''
        this.name = ''
        this.type = ''
        this.price = 0
        this.image = ''
        this.description = ''
        this.ingredients = []
        this.topping = []
    }
}