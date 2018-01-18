export default {
  name: 'WestwardMakers',
  title: 'Westward Makers',
  type: 'document',
  fields: [
    {
      title: 'Top Slider',
      name: 'topSlider',
      type: 'array',
      of: [
        {
          name: 'slide',
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
      name: 'missionsBlock',
      type: 'object',
      fields: [
        {
          name: 'firstHeadline',
          title: 'First Headline',
          type: 'string'
        },
        {
          name: 'firstImage',
          title: 'First Image',
          type: 'image',
          options: {
            hotspot: true
          }
        },
        {
          name: 'secondHeadline',
          title: 'Second Headline',
          type: 'string'
        },
        {
          name: 'secondImage',
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
      name: 'featuredImagesSlideshow',
      type: 'object',
      fields: [
        {
          name: 'headline',
          title: 'Headline',
          type: 'string',
        },
        {
          title: 'Images',
          name: 'images',
          type: 'array',
          of: [
            {
              name: 'slideshowImages',
              title: 'Slideshow Images',
              type: 'object',
              fields: [
                {
                  name: 'image',
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
