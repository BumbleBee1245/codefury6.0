<script>
    import { ratingScale, first, second, third, progressBarPercent, ratingResponse, isLoggedIn } from "../../store";

    import FormComponent from "../../components/forms/FormComponent.svelte"
    import ScaleRating from "../../components/forms/actions/ScaleRating.svelte";
    import { onDestroy, onMount } from "svelte";

    import PoorDayForm from "../../components/forms/PoorDayForm.svelte"
    import NormalDayForm from "../../components/forms/NormalDayForm.svelte"
    import GoodDayForm from "../../components/forms/GoodDayForm.svelte"
    import { goto } from "$app/navigation";

    let loadPage = false;

    onMount(() => {
        if (!$isLoggedIn) {
            goto('/');
        } else {
            setTimeout(() => {
                loadPage = true
            }, 2300);
        }
    })


    /**
     * @type {number}
     */
    let ratingVal;
    ratingScale.subscribe(c => {
        ratingVal = c;
    })

    /**
     * @type {boolean}
     */
    let isRatingResponseDone;
    ratingResponse.subscribe(t => isRatingResponseDone = t);

    $: q1Response = false;
    $: q2Response = false;
    $: q3Response = false;

    $: showPoorForm = false;
    $: showOkayForm = false;
    $: showGoodForm = false;

    let containerWidth = 0;
    // $: containerWidth = 0;
    // progressBarPercent.subscribe(t => containerWidth = t);


    const handleSubmitRating = () => {
        ratingResponse.update(t => t = true) 
        progressBarPercent.update(() => $progressBarPercent + 25);
    }


    // const belowThreeQuestions = {
    //     first : {
    //         question: "I'm sorry to hear that you had a tough day. Can you share what made your day a 0-3 rating?",
    //         disabled: q1Response,
    //         formActionComponent: TextBox
    //     },

    //     second : {
    //         question: `Is there something specific you'd like to discuss or share about your feelings or experiences today?`,
    //         disabled: q2Response,
    //         formActionComponent: TextBox
    //     },

    //     third: {
    //         question: `What can you do tomorrow to make the day better or more manageable for yourself?`,
    //         disabled: q3Response,
    //         formActionComponent: TextBox,
    //     }
    // }

    // const aboveFourQuestions = {
    //     first : {
    //         question: `Were there any particular moments or experiences that stood out as challenging or stressful today?`,
    //         disabled: q1Response,
    //         formActionComponent: TextBox
    //     },

    //     second : {
    //         question: `Did you use any coping strategies or self-care techniques to manage any stress or challenges you encountered today?`,
    //         disabled: q2Response,
    //         formActionComponent: TextBox
    //     },

    //     third: {
    //         question: `Is there anything you're looking forward to in the near future that might improve your mood or well-being?`,
    //         disabled: q3Response,
    //         formActionComponent: TextBox,
    //     }
    // }

    $: {
        if (isRatingResponseDone) {
            setTimeout(() => {
                if (ratingVal <= 3) {
                    showPoorForm = true;
                    showGoodForm = false;
                    showOkayForm = false;
                } 

                else if (ratingVal <= 7) {
                    showPoorForm = false;
                    showGoodForm = false;
                    showOkayForm = true;

                } else {
                    showPoorForm = false;
                    showGoodForm = true;
                    showOkayForm = false;
                }
            }, 1000);

        }
    }

    const handleFormSubmit = () => {
        alert("DONE");
    }
    
</script>

<!-- Initial question -->
<!-- {#if !ratingResponse}
    <FormComponent on:submit={handleSubmitRating} questionText={'How would you rate your day on a scale of 1-10?'} formActionComponent={ScaleRating} disabled={ratingVal === 0 ? true : false}/>
{:else if ratingVal <= 3}


{/if} -->

{#if loadPage}
<form>

    <!-- initial day's rating -->

    {#if !isRatingResponseDone}
        <FormComponent on:submit={handleSubmitRating} 
            questionText={'How would you rate your day on a scale of 1-10?'} 
            formActionComponent={ScaleRating} 
            disabled={ratingVal === 0 ? true : false}
        />
    {:else}
        {#if showPoorForm}
            <PoorDayForm on:submit={handleFormSubmit}/>
        {/if}

        {#if showOkayForm}
            <NormalDayForm />
        {/if}

        {#if showGoodForm}
            <GoodDayForm />
        {/if}
    {/if}

    <div class="progress-bar" style="width: {containerWidth}%">
    </div>
</form>
{/if}

<style>
    * {
        @apply text-light;
    }
    .progress-bar {
        @apply absolute;
        bottom: 0;
        height: 8px;
        z-index: 20;
        width: 0;
        transition: width 1s ease-out;
        @apply bg-indigo;
    }
</style>