import {defineField, defineType} from 'sanity'
import type {ObjectInputProps} from 'sanity'

interface FacebookEventPreviewProps extends ObjectInputProps {
  url: string
}

const FacebookEventPreview = (props: FacebookEventPreviewProps) => {
  console.log({props})
  if (!props.url) {
    return <div>Missing URL</div>
  }

  return <div>{props.renderDefault({...props})}</div>
}

export default defineType({
  name: 'facebookEvent',
  type: 'object',
  title: 'Facebook event',
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'Event url',
    }),
    defineField({
      name: 'ticketUrl',
      type: 'url',
      title: 'Ticket url',
    }),
    defineField({
      name: 'title',
      title: 'Event title',
      type: 'string',
    }),
    defineField({
      name: 'eventDate',
      title: 'Event date',
      type: 'datetime',
    }),
    defineField({
      name: 'eventImage',
      title: 'Facebook event image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt text',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'guests',
      title: 'Guests',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      url: 'url',
      title: 'title',
    },
  },
  components: {
    preview: FacebookEventPreview,
  },
})
