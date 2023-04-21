import {YouTubeVideoPreview} from './youtubeVideo'

export default {
  title: 'Portable text',
  name: 'portableText',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Heading 3', value: 'h3'},
        {title: 'Heading 4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
    },
    {type: 'youtubeVideo'},
  ],
  components: {
    preview: YouTubeVideoPreview,
  },
}
