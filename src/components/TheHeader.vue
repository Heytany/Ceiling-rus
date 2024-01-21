<template>
  <header>
    <nav style="display: none;" inline-flex gap-2 text-xl>
      <button icon-btn @click="toggleDark()">
        <div i-carbon-phone-filled/>
      </button>
      <button icon-btn @click="toggleDark()">
        <div i-basil-vk-solid/>
      </button>
      <button icon-btn @click="toggleDark()">
        <div i-carbon-sun dark:i-carbon-moon />
      </button>
      <button icon-btn @click="toggleDark()">
        <div i-carbon-sun dark:i-carbon-moon />
      </button>

      <a
        i-carbon-logo-github icon-btn
        rel="noreferrer"
        href="https://github.com/antfu/vitesse-lite"
        target="_blank"
        title="GitHub"
      />
    </nav>
  </header>
</template>

<style lang="sass">

</style>
