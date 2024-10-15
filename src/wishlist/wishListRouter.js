const Router = require("@koa/router")
const WishListController = require("./wishListController");
const validation = require("../middleware/validation");
const WishListValidation = require("./wishListValidation");
const cache = require("../middleware/cache")

const WishListRouter = new Router();

WishListRouter.post('/', validation(WishListValidation.addToList), WishListController.addToList);
WishListRouter.delete('/',validation(WishListValidation.deleteFormList), WishListController.deleteFromList);
WishListRouter.get('/',cache, WishListController.getWishList);

module.exports = WishListRouter;
