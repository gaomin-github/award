import { mapState, mapGetters, mapMutations } from "vuex";
import request from "request";

export default {
    data() {
        return {
            users: [],
        };
    },
    computed: {
        ...mapState("weekly", ["curUser"]),
    },
    mounted() {
        this._initUsers();
    },
    methods: {
        ...mapMutations("weekly", ["updateUser"]),
        _initUsers() {
            request.get("/task/users").then((res) => {
                if (res.status === 200 && res.data) {
                    this.users = res.data;
                }
            });
        },
        gotoWeekly(user) {
            this.updateUser(user);
            this.$router.push({
                name: "weekly",
                query: {
                    userId: user.userId
                }
            });
        },
    },
};
