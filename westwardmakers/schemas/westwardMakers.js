export default {
  name: 'WestwardMakers',
  title: 'Westward Makers',
  type: 'document',
  fields: [
    {
      title: 'Top Slider',
      name: 'TopSlider',
      type: 'array',
      of: [
        {
          name: 'Slide',
          title: 'Slide',
          type: 'object',
          fields: [
            {
              title: 'Headline',
              name: 'headline',
              type: 'string',
            },
            {
              title: 'Subheadline',
              name: 'subheadline',
              type: 'string',
            },
            {
              title: 'Collection ID',
              name: 'collectionId',
              type: 'string',
            },
            {
              title: 'Product ID',
              name: 'productId',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true
              }
            },
          ],
          options: {
            hotspot: true
          }
        },
      ],
      options: {

      }
    },
  ],
}
