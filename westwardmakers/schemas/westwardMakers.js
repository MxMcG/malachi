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
    },
    {
      title: 'Missions Block',
      name: 'MissionsBlock',
      type: 'object',
      fields: [
        {
          name: 'FirstHeadline',
          title: 'First Headline',
          type: 'string'
        },
        {
          name: 'FirstImage',
          title: 'First Image',
          type: 'image',
          options: {
            hotspot: true
          }
        },
        {
          name: 'SecondHeadline',
          title: 'Second Headline',
          type: 'string'
        },
        {
          name: 'SecondImage',
          title: 'Second Image',
          type: 'image',
          options: {
            hotspot: true
          }
        },
      ],
    },
    {
      title: 'Featured Images Slideshow',
      name: 'FeaturedImagesSlideshow',
      type: 'object',
      fields: [
        {
          name: 'Headline',
          title: 'Headline',
          type: 'string',
        },
        {
          title: 'Images',
          name: 'Images',
          type: 'array',
          of: [
            {
              name: 'Slideshow Images',
              title: 'Image',
              type: 'object',
              fields: [
                {
                  name: 'Image',
                  title: 'Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
