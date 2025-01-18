import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product';
import { postType } from './postType'
import { categoryType } from './categoryType';
import { authorType } from './authorType';
import { blockContentType } from './blockContentType';



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, postType, categoryType, authorType, blockContentType],
}
