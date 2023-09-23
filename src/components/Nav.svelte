<script>
    import { slide } from "svelte/transition";
    import { onMount } from "svelte";
</script>

<section>
    <div class="img-container">
        <img src="/g2g.png" alt="">
    </div>

    <div class="menu-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="40" y1="128" x2="216" y2="128" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="64" x2="216" y2="64" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="192" x2="216" y2="192" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
    </div>
</section>

<style>
    section {
        @apply w-full;
        height: 72px;
        @apply flex;
        @apply items-center;
        @apply justify-between;
        @apply px-4;
        @apply mb-8;
    }

    .menu-btn {
        height: 30px;
        width: 30px;
        @apply cursor-pointer;
    }

    .img-container img{
        height: 25px;
        width: auto;
    }

    svg {
        @apply text-light;
    }

</style>
