import type { Schema, Attribute } from '@strapi/strapi';

export interface IngredientsIngredients extends Schema.Component {
  collectionName: 'components_ingredients_ingredients';
  info: {
    displayName: 'ingredients';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
  };
}

export interface IngredientsTesting extends Schema.Component {
  collectionName: 'components_ingredients_testings';
  info: {
    displayName: 'testing';
  };
  attributes: {};
}

export interface RecipesEtapes extends Schema.Component {
  collectionName: 'components_recipes_etapes';
  info: {
    displayName: '\u00C9tapes';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
  };
}

export interface RecipesIngredients extends Schema.Component {
  collectionName: 'components_recipes_ingredients';
  info: {
    displayName: 'Ingr\u00E9dients';
    icon: 'bulletList';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    quantity: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ingredients.ingredients': IngredientsIngredients;
      'ingredients.testing': IngredientsTesting;
      'recipes.etapes': RecipesEtapes;
      'recipes.ingredients': RecipesIngredients;
    }
  }
}
