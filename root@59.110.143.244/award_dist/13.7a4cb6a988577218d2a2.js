(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{120:function(e,t,s){"use strict";var r=s(46);s.n(r).a},146:function(e,t,s){"use strict";s.r(t);var r=s(3),a=s(17),i={computed:{},data:()=>({users:[]}),computed:{...Object(r.d)("weekly",["pathArr"])},mounted(){this._initUsers(),this.pathArr&&this.pathArr.length>0||this.pushPathArr("user")},methods:{...Object(r.c)("weekly",["updateCurUser","pushPathArr"]),_initUsers(){a.a.get("/task/users").then(e=>{200===e.status&&e.data&&(this.users=e.data)})},selectUser(e){this.updateCurUser(e),this.pushPathArr("task")}}},u=(s(120),s(5)),n=Object(u.a)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-wrapper"},[s("header"),e._v(" "),e.users&&e.users.length>0?s("div",{staticClass:"user"},e._l(e.users,(function(t){return s("div",{key:t.userId,staticClass:"user-item",on:{click:function(s){return e.selectUser(t)}}},[e._v(e._s(t.userName))])})),0):e._e()])}),[],!1,null,"9afe06e2",null);t.default=n.exports},17:function(e,t,s){"use strict";var r=s(18);let a=s.n(r).a.create({timeout:3e4,headers:{}});t.a=a},46:function(e,t,s){var r=s(8),a=s(47);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1},u=r(a,i),n=a.locals?a.locals:{};a.locals||e.hot.accept(47,(function(){var t=s(47);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]),u(t)})),e.hot.dispose((function(){u()})),e.exports=n},47:function(e,t,s){(t=s(9)(!1)).push([e.i,".user-wrapper[data-v-9afe06e2]{position:absolute;width:100%;height:100%;top:0px;bottom:0px}.user-item[data-v-9afe06e2]{margin:10px 0px;text-align:center;line-height:36px;background-color:#f6f5dc}\n",""]),e.exports=t}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd2Vla2x5L2NvbS91c2VyLnZ1ZT82ZDFiIiwid2VicGFjazovLy8uL3NyYy93ZWVrbHkvY29tL3VzZXIudnVlPzE5MWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlZWtseS9jb20vdXNlci52dWU/ODZiZiIsIndlYnBhY2s6Ly8vc3JjL3dlZWtseS9jb20vdXNlci52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlZWtseS9jb20vdXNlci52dWUiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2Vla2x5L2NvbS91c2VyLnZ1ZT9lNmE0Iiwid2VicGFjazovLy8uL3NyYy93ZWVrbHkvY29tL3VzZXIudnVlP2M4MmEiXSwibmFtZXMiOlsiY29tcG9uZW50IiwiX3ZtIiwidGhpcyIsIl9oIiwiJGNyZWF0ZUVsZW1lbnQiLCJfYyIsIl9zZWxmIiwic3RhdGljQ2xhc3MiLCJfdiIsInVzZXJzIiwibGVuZ3RoIiwiX2wiLCJ1c2VyIiwia2V5IiwidXNlcklkIiwib24iLCIkZXZlbnQiLCJzZWxlY3RVc2VyIiwiX3MiLCJ1c2VyTmFtZSIsIl9lIiwicmVxdWVzdCIsImF4aW9zIiwiY3JlYXRlIiwidGltZW91dCIsImhlYWRlcnMiLCJhcGkiLCJjb250ZW50IiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJtb2R1bGUiLCJpIiwib3B0aW9ucyIsInVwZGF0ZSIsImV4cG9ydGVkIiwibG9jYWxzIiwiaG90IiwiYWNjZXB0IiwibmV3Q29udGVudCIsImRpc3Bvc2UiLCJleHBvcnRzIiwiX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIiwicHVzaCJdLCJtYXBwaW5ncyI6IjJGQUFBLG1CQUF3WCxHLHdDQ0F4WCxJLGVDQTBMLEVDaUIxTCxDQUNFLFNBQUYsR0FDRSxLQUFGLEtBQ0EsQ0FDTSxNQUFOLEtBR0UsU0FBRixJQUNBLG1DQUVFLFVBQ0UsS0FBSixhQUNBLHFDQUNNLEtBQU4scUJBWUUsUUFBRixJQUNBLHNEQUNJLGFBQ0UsRUFBTiw4QkFDQSx5QkFDVSxLQUFWLGlCQUlJLFdBQUosR0FDTSxLQUFOLGlCQUNNLEtBQU4sdUIsZ0JDN0NJQSxFQUFZLFlBQ2QsR0hUVyxXQUFhLElBQUlDLEVBQUlDLEtBQVNDLEVBQUdGLEVBQUlHLGVBQW1CQyxFQUFHSixFQUFJSyxNQUFNRCxJQUFJRixFQUFHLE9BQU9FLEVBQUcsTUFBTSxDQUFDRSxZQUFZLGdCQUFnQixDQUFDRixFQUFHLFVBQVVKLEVBQUlPLEdBQUcsS0FBTVAsRUFBSVEsT0FBU1IsRUFBSVEsTUFBTUMsT0FBUyxFQUFHTCxFQUFHLE1BQU0sQ0FBQ0UsWUFBWSxRQUFRTixFQUFJVSxHQUFJVixFQUFTLE9BQUUsU0FBU1csR0FBTSxPQUFPUCxFQUFHLE1BQU0sQ0FBQ1EsSUFBSUQsRUFBS0UsT0FBT1AsWUFBWSxZQUFZUSxHQUFHLENBQUMsTUFBUSxTQUFTQyxHQUFRLE9BQU9mLEVBQUlnQixXQUFXTCxNQUFTLENBQUNYLEVBQUlPLEdBQUdQLEVBQUlpQixHQUFHTixFQUFLTyxnQkFBZSxHQUFHbEIsRUFBSW1CLFNBQzdZLElHV3BCLEVBQ0EsS0FDQSxXQUNBLE1BSWEsVUFBQXBCLEUseUNDbkJmLFlBQ0EsSUFBSXFCLEVBREosT0FDY0MsRUFBTUMsT0FBTyxDQUN6QkMsUUFBUyxJQUNUQyxRQUFTLEtBRUlKLE8sbUJDTGYsSUFBSUssRUFBTSxFQUFRLEdBQ0ZDLEVBQVUsRUFBUSxJQUlDLGlCQUZ2QkEsRUFBVUEsRUFBUUMsV0FBYUQsRUFBUUUsUUFBVUYsS0FHL0NBLEVBQVUsQ0FBQyxDQUFDRyxFQUFPQyxFQUFJSixFQUFTLE1BRzlDLElBQUlLLEVBQVUsQ0FFZCxPQUFpQixPQUNqQixXQUFvQixHQUVoQkMsRUFBU1AsRUFBSUMsRUFBU0ssR0FFdEJFLEVBQVdQLEVBQVFRLE9BQVNSLEVBQVFRLE9BQVMsR0FJMUNSLEVBQVFRLFFBQ1hMLEVBQU9NLElBQUlDLE9BQ1QsSUFDQSxXQUNFLElBQUlDLEVBQWEsRUFBUSxJQUlPLGlCQUYxQkEsRUFBYUEsRUFBV1YsV0FBYVUsRUFBV1QsUUFBVVMsS0FHeERBLEVBQWEsQ0FBQyxDQUFDUixFQUFPQyxFQUFJTyxFQUFZLE1BR3hDTCxFQUFPSyxNQUtuQlIsRUFBT00sSUFBSUcsU0FBUSxXQUNqQk4sT0FJSkgsRUFBT1UsUUFBVU4sRyxvQkN4Q2pCTSxFQURrQyxFQUFRLEVBQ2hDQyxFQUE0QixJQUU5QkMsS0FBSyxDQUFDWixFQUFPQyxFQUFJLHdNQUF5TSxLQUVsT0QsRUFBT1UsUUFBVUEiLCJmaWxlIjoiYXdhcmRfZGlzdC8xMy43YTRjYjZhOTg4NTc3MjE4ZDJhMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdXNlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05YWZlMDZlMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdXNlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05YWZlMDZlMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJ1c2VyLXdyYXBwZXJcIn0sW19jKCdoZWFkZXInKSxfdm0uX3YoXCIgXCIpLChfdm0udXNlcnMgJiYgX3ZtLnVzZXJzLmxlbmd0aCA+IDApP19jKCdkaXYnLHtzdGF0aWNDbGFzczpcInVzZXJcIn0sX3ZtLl9sKChfdm0udXNlcnMpLGZ1bmN0aW9uKHVzZXIpe3JldHVybiBfYygnZGl2Jyx7a2V5OnVzZXIudXNlcklkLHN0YXRpY0NsYXNzOlwidXNlci1pdGVtXCIsb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uc2VsZWN0VXNlcih1c2VyKX19fSxbX3ZtLl92KF92bS5fcyh1c2VyLnVzZXJOYW1lKSldKX0pLDApOl92bS5fZSgpXSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91c2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VzZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJ1c2VyLXdyYXBwZXJcIj5cbiAgICAgICAgPGhlYWRlcj48L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInVzZXJcIiB2LWlmPVwidXNlcnMgJiYgdXNlcnMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPVwidXNlci1pdGVtXCJcbiAgICAgICAgICAgICAgICB2LWZvcj1cInVzZXIgaW4gdXNlcnNcIlxuICAgICAgICAgICAgICAgIDprZXk9XCJ1c2VyLnVzZXJJZFwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwic2VsZWN0VXNlcih1c2VyKVwiXG4gICAgICAgICAgICA+e3sgdXNlci51c2VyTmFtZSB9fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwU3RhdGUsIG1hcEdldHRlcnMsIG1hcE11dGF0aW9ucyB9IGZyb20gXCJ2dWV4XCI7XG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwicmVxdWVzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcHV0ZWQ6IHt9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VyczogW11cbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIC4uLm1hcFN0YXRlKFwid2Vla2x5XCIsIFtcInBhdGhBcnJcIl0pXG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLl9pbml0VXNlcnMoKTtcbiAgICAgICAgaWYgKCEodGhpcy5wYXRoQXJyICYmIHRoaXMucGF0aEFyci5sZW5ndGggPiAwKSkge1xuICAgICAgICAgICAgdGhpcy5wdXNoUGF0aEFycihcInVzZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvbmxpbmVcIiwgKCkgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uLmhyZWYsIDM0KTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwib25saW5lXCIsIDM1KTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib2ZmbGluZVwiLCAoKSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYXRpb24uaHJlZiwgMzgpO1xuXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIm9mZmxpbmVcIiwgNDApO1xuICAgICAgICAvLyB9KTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgLi4ubWFwTXV0YXRpb25zKFwid2Vla2x5XCIsIFtcInVwZGF0ZUN1clVzZXJcIiwgXCJwdXNoUGF0aEFyclwiXSksXG4gICAgICAgIF9pbml0VXNlcnMoKSB7XG4gICAgICAgICAgICByZXF1ZXN0LmdldChcIi90YXNrL3VzZXJzXCIpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwICYmIHJlcy5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcnMgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0VXNlcih1c2VyKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUN1clVzZXIodXNlcik7XG4gICAgICAgICAgICB0aGlzLnB1c2hQYXRoQXJyKFwidGFza1wiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG48L3NjcmlwdD5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi51c2VyLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwcHg7XG4gICAgYm90dG9tOiAwcHg7XG59XG4udXNlciB7XG4gICAgJi1pdGVtIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDYsIDI0NSwgMjIwLCAxKTtcbiAgICB9XG59XG48L3N0eWxlPiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdXNlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWFmZTA2ZTImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdXNlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VzZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3VzZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWFmZTA2ZTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI5YWZlMDZlMlwiLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmxldCByZXF1ZXN0ID0gYXhpb3MuY3JlYXRlKHtcbiAgdGltZW91dDogMTAwMCAqIDMwLFxuICBoZWFkZXJzOiB7fSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdDtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VzZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWFmZTA2ZTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdXNlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05YWZlMDZlMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VzZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWFmZTA2ZTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuICAgICAgICAgICAgICBuZXdDb250ZW50ID0gbmV3Q29udGVudC5fX2VzTW9kdWxlID8gbmV3Q29udGVudC5kZWZhdWx0IDogbmV3Q29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgXG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudXNlci13cmFwcGVyW2RhdGEtdi05YWZlMDZlMl17cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt0b3A6MHB4O2JvdHRvbTowcHh9LnVzZXItaXRlbVtkYXRhLXYtOWFmZTA2ZTJde21hcmdpbjoxMHB4IDBweDt0ZXh0LWFsaWduOmNlbnRlcjtsaW5lLWhlaWdodDozNnB4O2JhY2tncm91bmQtY29sb3I6I2Y2ZjVkY31cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==