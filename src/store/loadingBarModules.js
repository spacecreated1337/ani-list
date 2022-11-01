import NProgress from "vue-nprogress";
export const loadingBarModules = {
    state: () => ({
        isLoading: false,
    }),
    getters: {

    },
    mutations: {
        runLoadingData() {
            const nprogress = new NProgress();
            nprogress.start();

        },
        stopLoadingData() {
            const nprogress = new NProgress();
            nprogress.done();
        },
    },
    actions: {

    }
};