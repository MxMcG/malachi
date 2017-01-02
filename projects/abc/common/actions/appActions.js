// action is called with new data,

export addData (text) => {
  return {
    type: 'ADD_DATA',
    text,
    date: Date.now()
  }
}

export deleteData (text) => {
  return {
    type: 'DELETE_DATA',
    text,
    date: Date.now()
  }
}
