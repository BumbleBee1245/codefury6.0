<script>
    import Nav from "../components/Nav.svelte";
    import "../app.css";
    import { getApp, initializeApp } from "firebase/app";
    import { getAuth, onAuthStateChanged } from "firebase/auth";

    import { isLoggedIn, uid } from "../store";

    import { onMount } from "svelte";
    import cfg from "../firebase/config"
    import { goto } from "$app/navigation";


    onMount(() => {
        const app = initializeApp(cfg)
        const auth = getAuth();
        console.log(auth);
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                goto('/')
                isLoggedIn.update(() => false)
            } else {
                isLoggedIn.update(() => true)
            }
        })
    })


</script>

<Nav />
<slot />