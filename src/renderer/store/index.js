export const state = () => ({
  responseArr: [
    {
      number: 1,
      text: '知人',
      sounds: '知人の方は'
    },
    {
      number: 2,
      text: 'その他',
      sounds: 'そうでない方は'
    }
  ]
})

export const mutations = {
  changeResponse(state) {
    state.responseArr = []
  },
  addResponse(state) {
    state.responseArr.push({})
  }
}