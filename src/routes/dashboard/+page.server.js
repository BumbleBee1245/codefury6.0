import * as store from "../../store"

export const load = async () => {
    store.ratingScale.update(t => t = 0);
    store.first.update(t => t = '');
    store.second.update(t => t ='');
    store.third.update(t => t = '');
    store.progressBarPercent.update(t => t = 0);
}