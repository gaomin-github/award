<template>
    <div>
        <header></header>
        <div class="user" v-if="users && users.length > 0">
            <div
                class="user-item"
                v-for="user in users"
                :key="user.userId"
                @click="selectUser(user)"
            >{{ user.userName }}</div>
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import request from "request";

export default {
    computed: {},
    data() {
        return {
            users: []
        };
    },
    mounted() {
        this._initUsers();
    },
    methods: {
        ...mapMutations("weekly", ["updateCurUser"]),
        _initUsers() {
            request.get("/task/users").then(res => {
                if (res.status === 200 && res.data) {
                    this.users = res.data;
                }
            });
        },
        selectUser(user) {
            this.updateCurUser(user);
        }
    }
};
</script>
<style lang="scss" scoped>
.user {
    &-item {
        margin: 10px 0px;
        text-align: center;
        line-height: 36px;
        background-color: rgba(246, 245, 220, 1);
    }
}
</style>