const state = () => ({
    taskId: "",
    scheduleList: [],
    curUser: null,
});

const getters = {
    totalValue: (state) => {
        if (!state.scheduleList || state.scheduleList.length == 0) {
            return 0;
        }
        if (state.scheduleList.length === 1) return state.scheduleList[0].worth;
        return state.scheduleList.reduce((a, b, index) => {

            if (index === 1) return a.worth + b.worth;
            return a + b.worth;
        });
        // console.log(totalValue, 14);
    },
    score: (state) => {
        if (!state.scheduleList || state.scheduleList.length == 0) {
            return 0;
        }
        if (state.scheduleList.length === 1) return state.scheduleList[0].process;
        return state.scheduleList.reduce((a, b, index) => {
            if (index === 1) return a.process + b.process;
            return a + b.process;
        });
    },
};

const mutations = {
    initTask(state, task) {
        state.scheduleList = task.schedules;
        state.taskId = task.taskId;
    },
    insertSchedule(state, item) {
        console.log(item, 6);
        state.scheduleList.push(item);
    },
    updateSchedule(state, item) {
        let index = state.scheduleList.findIndex((schedule) => {
            if (item.subId === schedule.subId) {
                return true;
            }
        });
        if (index >= 0) {
            state.scheduleList.splice(index, 1, item);
        }
    },
    deleteSchedule(state, { item }) {
        let index = state.scheduleList.findIndex((schedule) => {
            if (item.subid === schedule.subid) {
                return true;
            }
        });
        state.scheduleList.splice(index, 1);
    },
    updateUser(state, user) {
        state.curUser = user;
    },
};
export default {
    namespaced: true,
    state,
    getters,
    mutations,
};
