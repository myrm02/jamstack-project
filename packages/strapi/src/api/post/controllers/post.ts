/**
 * post controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::post.post', ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params
      const entity = await strapi.db.query('api::post.post').findOne({
        where: { slug: id },
        populate: ['image', 'etiquettes', 'profil', 'comments', 'profil.image', 'comments.profil', 'comments.profil.image'],
      })
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx)
      return this.transformResponse(sanitizedEntity)
    }
  }));
