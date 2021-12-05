import { mapGetters } from "vuex";
import SpinnerMixin from './SpinnerMixin.js';

export default {
    mixins: [SpinnerMixin],
    computed: {
        ...mapGetters(["getList"]),
    },
}