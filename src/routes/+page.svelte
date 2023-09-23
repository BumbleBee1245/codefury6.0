<script>
    import { fly, blur } from "svelte/transition";
    import { onMount } from "svelte";
    import { quintOut } from "svelte/easing";
    import Button from "../components/Button.svelte";

    let animsReady = false;
    onMount(() => animsReady = true);
    const animDuration = 800;

</script>

<main>
    {#if animsReady}
    <div class="flex flex-col gap-8 items-center justify-center">
        <div class="container">
            <h1 class="text-6xl w-fit" transition:blur={{ duration: animDuration, amount: 10}}>You're one step <b>closer.</b></h1>
        </div>

        <button class="btn" transition:fly={{delay: animDuration * 1, duration: animDuration, x: -20, y: 0}}> Sign Up </button>
    </div>

    {/if}
</main>

<style>
    main {
        @apply w-full;
        @apply h-screen;
        @apply flex;
        @apply flex-col;
        @apply items-center;
    }

    .container {
        @apply flex;
        @apply items-center;
        @apply justify-center;
    }

    .btn {
        border: 2px solid;
        @apply rounded-md;
        @apply text-xl;
        @apply py-1;
        @apply px-4;
        
    }


</style>