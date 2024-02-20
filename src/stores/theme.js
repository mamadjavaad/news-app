import { reactive, toRefs } from "vue";
import { useCookies } from 'vue3-cookies';
const { cookies } = useCookies();

const state = reactive({

})
const toggleTheme = (theme) => {

    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    cookies.set('theme', theme.global.name.value)
}
const setTheme = (theme) => {
    const savedTheme = cookies.get('theme');
    if (savedTheme) {
        theme.global.name.value = savedTheme;
    } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            theme.global.name.value = 'dark'
        }
    }
}
export default function useThemeStore() {
    return {
        ...toRefs(state), toggleTheme, setTheme
    }
}