'use strict';

/**
 *  category controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::category.category',({strapi})=>({
    async findOne(ctx){
        const {id} = ctx.params
        const entity = await strapi.db.query('api::category.category').findOne({
            where: {slug:id},
            populate:{
                articles: {
                    populate: ['cover'], // Adjust this depending on the actual field name of the image
                  },
            }
        })
        // const sanitizedEntity = await this.sanitizedOutput(entity,ctx)

        return this.transformResponse(entity)
    }
   
}));
