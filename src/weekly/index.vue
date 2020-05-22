<template>
    <section class="weekly-wrapper">
        <transition :name="pageMove">
            <!-- 没有选中用户 -->
            <user v-if="!curUser"></user>
            <!-- 选中用户，查看历史状态 -->
            <task-history v-if="curUser && taskHistory"></task-history>
            <!-- 所有用户历史任务查看 -->
            <task-all-history v-if="!curUser && taskHistory"></task-all-history>
            <!-- 在编辑状态 -->
            <editor v-if="curUser && editing"></editor>
            <!-- 选中用户，查看自己当前任务 -->
            <task v-if="curUser && !taskHistory && !editing"></task>
        </transition>
        <!-- {{curUser}}
        <br />
        {{taskHistory}}
        <br />
        {{editing}}-->
    </section>
</template>
<script src="./index.js"></script>
<style lang="scss">
@import url("https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css");
.prev-enter-to {
    transform: translateX(0);
}
.prev-enter {
    transform: translateX(-100%);
}
.prev-leave {
    transform: translateX(0);
}
.prev-leave-to {
    transform: translateX(100%);
}
.prev-enter-active,
.next-enter-active {
    transition: all 0.4s ease-in;
}
.prev-leave-active,
.next-leave-active {
    transition: all 0.3s ease-out;
}

.next-enter {
    transform: translateX(100%);
    // top:0;
}
.next-enter-to {
    transform: translateX(0);
    // top:0;
}
.next-leave {
    transform: translateX(0);
}
.next-leave-to {
    transform: translateX(-100%);
}

// .slid-enter-to,.slid-leave{
// transform: translateX(0);
// }
// .slid-enter,.slid-leave-to{
// transform: translateX(100%);

// }
// .slid-enter-active,.slid-leave-active{
//     transition: all 2s ease;
// }
section,
div,
p {
    display: block;
    box-sizing: border-box;
    overflow: hidden;
}
.weekly-wrapper {
    //   padding: 10px 5px;
    width: 100%;
    height: 100%;
    position: relative;
}
</style>
