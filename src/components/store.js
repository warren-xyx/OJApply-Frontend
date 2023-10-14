import { reactive } from "vue";

export const store = reactive({
  user_id: 0,
  // admin: false,
  increment(data){
    this.user_id=data.user_id
    // this.admin=data.admin
  }
})
