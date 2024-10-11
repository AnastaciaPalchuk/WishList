const { z } =  require("zod");

const addToList = z.object({
    name: z.string()
})

const deleteFormList = z.object({
    id: z.number().int().nonnegative()
})

module.exports = {addToList, deleteFormList};