import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import MyButton from './MyButton.vue'
import Welcome from './Welcome.vue'
import Hello from '@/components/Hello.vue'

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') }
}))

storiesOf('Hello', module).add('Vue', () => ({
  components: { Hello },
  template: '<hello />'
}))

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') }
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template:
      '<my-button @click="action" class="text-2xl">💯</my-button>',
    methods: { action: action('clicked emoji') }
  }))
