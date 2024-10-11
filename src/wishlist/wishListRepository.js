class WishListRepository{
    constructor(database){
        this.database = database;
    }

    async addItemToWishList(name){
        return this.database.query(`
            insert into wishlist (name) 
            VALUES ('${name}')
            returning *;
            `);
    }

    async findItem(id){
        return this.database.query(`
            SELECT *
            from wishlist
            where id = ${id}
            `)
    }

    async deleteItemFromWishList(id){
        return this.database.query(`
            DELETE
            from wishlist
            where id = ${id}
            `)
    }

    async getWishList(){
        return this.database.query(`
            SELECT *
            from wishlist
            `)
    }
}

module.exports = { WishListRepository };
