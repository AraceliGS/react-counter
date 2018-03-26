export const actionTypes = {
  UP_COUNT: 'UP_COUNT',
  DOWN_COUNT: 'DOWN_COUNT'
}

export const upCount = () => ({
  type: actionTypes.UP_COUNT
})

export const downCount = () => ({
  type: actionTypes.DOWN_COUNT
});

