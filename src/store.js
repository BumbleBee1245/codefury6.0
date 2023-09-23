import { writable } from 'svelte/store';


export const ratingScale = writable(0);
export const specificMoments = writable([]);
export const formResponse = writable({
    first: writable(''),
    second: writable(''),
    third: writable(''),
});
