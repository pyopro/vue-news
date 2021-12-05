import bus from "../utils/bus.js";

export default {
    created() {
        bus.$emit("start:spinner");
    },
    updated() {
        bus.$emit("stop:spinner");
    },
}