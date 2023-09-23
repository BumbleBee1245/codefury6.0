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
            <h1 class="text-6xl w-fit" transition:blur={{ duration: animDuration, amount: 10}}>You're one step <b>closer.</b></h1>

        <button class="btn" transition:fly={{delay: animDuration * 1, duration: animDuration, x: -20, y: 0}}> Sign Up </button>
    </div>

    <div class="flex z-10" transition:fly={{delay: animDuration * 1.5, duration: animDuration, y: -20}}>
        <div class="container">
            <h1 class="text-3xl w-fit" transition:fly={{delay: animDuration * 1.75, duration: animDuration, y: -10}}>
                Mental wellbeing is paramount in a world hypersaturated with information.
            </h1>

            <p class="text-lg" transition:fly={{delay: animDuration * 2, duration: animDuration, y: -10}}>
                GoodToGo is a website that encourages daily self-reflection and mental wellbeing by gamifying daily self-introspection. Through thoughtful prompts and incentives, we help you prioritize your mental health and personal growth.
            </p>
        </div>
    </div>
    {/if}
</main>

<div class="background" transition:fly={{delay: animDuration * 2, duration: animDuration, y: -20}}>
    <div class="ball bg-lake" id="ball-1"></div>
    <div class="ball bg-indigo" id="ball-2"></div>
</div>

<style>
    main {
        @apply w-full;
        @apply flex;
        @apply flex-col;
        @apply items-center;
        @apply gap-12;
        @apply relative;
        z-index: 3;
        @apply text-light;
    }
    
    .ball{
        @apply absolute;
        width: 500px;
        height: 500px;
        @apply rounded-full;
        filter: blur(400px);
        z-index: 1;
    }
    
    .background {
        @apply w-full;
        @apply absolute;
        top: 72px;
        backdrop-filter: blur(10px);
        z-index: 2;
    }


    #ball-1 {
        right: 0;
        background-color: #24808C;
        top: 0;
    }

    #ball-2 {
        top: 250px;
        background-color: #0053B4;
    }



    .container {
        @apply flex;
        @apply items-center;
        @apply justify-center;
        @apply flex-col;
        @apply p-8;
        @apply text-center;
        @apply gap-4;
        background: linear-gradient(45deg, #ff69b4, #3b5bdb); /* Define your gradient colors and direction */
        border-radius: 10px; /* Optional: Add rounded corners to the div */
    }

    .btn {
        border: 2px solid;
        @apply rounded-md;
        @apply text-xl;
        @apply py-1;
        @apply px-4;
        transition: background 200ms ease-in;
    }

    .btn:hover {
        background-color: #fafafa; 
        color: #222;
        border: 2px solid #fafafa;
    }


</style>