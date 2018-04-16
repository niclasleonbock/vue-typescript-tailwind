<template>
  <div class="container">
    <h1>Welcome to STORYBOOK</h1>
    <p>
      This is a UI component dev environment for your app.
    </p>
    <p>
      We've added some basic stories inside the <code class="code">src/stories</code> directory.
      <br />
      A story is a single state of one or more UI components. You can have as many stories as you want.
      <br />
      (Basically a story is like a visual test case.)
    </p>
    <p>
      See these sample <a class="link" @click="onClick" role="button" tabIndex="0">stories</a> for a component called <code class="code">Button</code>.
    </p>
    <p>
      Just like that, you can add your own components as stories.
      <br />
      You can also edit those components and see changes right away.
      <br />
      (Try editing the <code class="code">Button</code> component
      located at <code class="code">src/stories/Button.js</code>.)
    </p>
    <p>
      This is just one thing you can do with Storybook.
      <br />
      Have a look at the <a class="link" href="https://github.com/storybooks/storybook" target="_blank" rel="noopener noreferrer">Storybook</a> repo for more information.
    </p>
    <p class="note">
      <b>NOTE:</b> Have a look at the <code class="code">.storybook/webpack.config.js</code> to add webpack loaders and plugins you are using in this project.
    </p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  const log = () => console.log('Welcome to storybook!')

  export default Vue.extend({
    name: 'welcome',

    props: {
      showApp: {
        type: Function,
        default: log
      }
    },

    methods: {
      onClick (event : Event) : void {
        event.preventDefault()
        this.showApp()
      }
    }
  })
</script>

<style lang="scss" scoped>
  // unfortunately, @apply doesn't work here whitout having to completely load/bootstrap tailwind again
  // but this is an example of how to still use tailwind defintions if needed
  $color-link: config('colors.blue-dark');

  p {
    margin-top: config('margin.6');
  }

  .link {
    color: $color-link;
    text-decoration: none;
    border-bottom: 1px solid $color-link;
    padding-bottom: 2px;
  }

  .code {
    font-size: 15px;
    font-weight: 600;
    padding: 2px 5px;
    border: 1px solid #eae9e9;
    border-radius: 4px;
    background-color: #f3f2f2;
    color: config('colors.grey-darkest');
  }

  .note {
    opacity: 0.75;
  }
</style>
