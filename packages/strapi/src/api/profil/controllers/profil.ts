/**
 * profil controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::profil.profil', ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params
      const entity = await strapi.db.query('api::profil.profil').findOne({
        where: { slug: id },
        populate: ['image', 'tags', 'posts', 'comments'],
      })
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx)
      return this.transformResponse(sanitizedEntity)
    }
  }));
