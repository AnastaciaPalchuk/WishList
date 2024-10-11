const { NotFound } = require("./err/NotFound");

class WishListService{
    constructor(repository){
        this.repository = repository;
    }

    async addToList(name){
        return this.repository.addItemToWishList(name);
    }

    async deleteItem(id){
        const findItem = await this.repository.findItem(id)
        if(findItem.rows.length){
            return this.repository.deleteItemFromWishList(id);
        }
        else {
            throw new NotFound();    
        }
    }

    async getWishList(){
        return this.repository.getWishList();
    }
}

module.exports = { WishListService };