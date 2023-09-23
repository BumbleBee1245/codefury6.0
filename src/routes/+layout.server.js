import { getApps, initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { goto } from "$app/navigation";
import { onMount } from "svelte";
import cfg from "../firebase/config"
import { uid, isLoggedIn } from "../store";