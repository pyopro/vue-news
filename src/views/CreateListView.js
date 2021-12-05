import ListView from './ListView.vue'

export default function createListView(viewName) {
    return {
        name: viewName,
        created() {
            this.$store.dispatch("fetchList", viewName);
        },
        render(createElement) {
            return createElement(ListView);
        }
    }
}