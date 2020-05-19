<template>
    <div class="user-wrapper">
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
    computed:{
        ...mapState('weekly',['pathArr'])
    },
    mounted() {
        this._initUsers();
        if(!(this.pathArr&&this.pathArr.length>0)){
            this.pushPathArr('user')
        }
    },
    methods: {
        ...mapMutations("weekly", ["updateCurUser",'pushPathArr']),
        _initUsers() {
            request.get("/task/users").then(res => {
                if (res.status === 200 && res.data) {
                    this.users = res.data;
                }
            });
        },
        selectUser(user) {
            this.updateCurUser(user);
            this.pushPathArr('task')

        }
    }
};
</script>
<style lang="scss" scoped>
.user-wrapper{
    position:absolute;
    width:100%;
    height:100%;
    top:0px;
    bottom:0px;
}
.user {
    &-item {
        margin: 10px 0px;
        text-align: center;
        line-height: 36px;
        background-color: rgba(246, 245, 220, 1);
    }
}
</style>