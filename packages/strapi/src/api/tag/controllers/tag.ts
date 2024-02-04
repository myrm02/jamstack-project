/**
 * tag controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::tag.tag', ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params
    const entity = await strapi.db.query('api::recipe.recipe').findOne({
      where: { slug: id },
      populate: ['image', 'tags', 'ingredients', 'steps'],
    })
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx)
    return this.transformResponse(sanitizedEntity)
  }
}));
