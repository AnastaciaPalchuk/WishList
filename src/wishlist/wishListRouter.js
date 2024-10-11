const Router = require("@koa/router")
const WishListController = require("./wishListController");
const validation = require("../middleware/validation");
const WishListValidation = require("./wishListValidation")

const WishListRouter = new Router();

WishListRouter.post('/', validation(WishListValidation.addToList), WishListController.addToList);
WishListRouter.delete('/',validation(WishListValidation.deleteFormList), WishListController.deleteFromList);
WishListRouter.get('/', WishListController.getWishList);

module.exports = WishListRouter;
