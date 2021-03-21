export const state = () => ({
  responseArr: [
    {
      number: 1,
      text: '知人',
      sounds: '知人の方は',
      type: 'check'
    },
    {
      number: 2,
      text: 'その他',
      sounds: 'そうでない方は',
      type: 'gohome'
    }
  ],
  socketData: {
  }
})

export const mutations = {
  updateResponse(state, newResponseArr) {
    state.responseArr = newResponseArr
  },
  addResponse(state) {
    state.responseArr.push({})
  },
  setSocketData(state, newData) {
    state.socketData = newData
  }
}