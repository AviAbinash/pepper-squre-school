"use strict";

/**
 * footer controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::footer.footer');

module.exports = createCoreController("api::footer.footer", ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.db.query("api::footer.footer").findOne({
      where: { slug: id },
      populate: {
        logo:{
            populate: [""],
        },
        contactUs: {
          populate: [""],
        },
        donate: {
          populate: [""],
        },
        links: {
          populate: ["links"], // Adjust this depending on the actual field name of the image
        },
        social: {
          populate: ["image"], // Adjust this depending on the actual field name of the image
        },
        rights: {
          populate: [""],
        },
        designBy:{
            populate:["companyName"]
        }
      },
    });
    // const sanitizedEntity = await this.sanitizedOutput(entity,ctx)

    return this.transformResponse(entity);
  },
}));
