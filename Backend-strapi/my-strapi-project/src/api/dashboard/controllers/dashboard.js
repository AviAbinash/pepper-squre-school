'use strict';

/**
 * dashboard controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::dashboard.dashboard');

module.exports = createCoreController('api::dashboard.dashboard',({strapi})=>({
    async findOne(ctx){
        const {id} = ctx.params
        const entity = await strapi.db.query('api::dashboard.dashboard').findOne({
            where: {slug:id},
            populate:{
                bannerSection: {
                    populate:['image'] // Adjust this depending on the actual field name of the image
                  },
            }
        })
        // const sanitizedEntity = await this.sanitizedOutput(entity,ctx)

        return this.transformResponse(entity)
    }
   
}));
