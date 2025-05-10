import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: null,
    first_name: '',
    last_name: '',
    type: '',
    mobile: '',
    national_code: '',
    credit: 0,
    point: 0,
    is_active: false,
    thumb_avatar: '',
    main_avatar: '',
    created_at_fa: ''
  }),
  actions: {
    setUser(user: any) {
      this.id = user.id
      this.first_name = user.first_name
      this.last_name = user.last_name
      this.type = user.type
      this.mobile = user.mobile
      this.national_code = user.national_code
      this.credit = user.credit
      this.point = user.point
      this.is_active = user.is_active
      this.thumb_avatar = user.thumb_avatar
      this.main_avatar = user.main_avatar
      this.created_at_fa = user.created_at_fa
    }
  }
})
