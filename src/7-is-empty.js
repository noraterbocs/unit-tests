export const isEmpty = (stringArrayOrObject) => {
if (stringArrayOrObject === '' || stringArrayOrObject.length === 0 || Object.keys(stringArrayOrObject).length === 0) {
  return true
} else {
  return false
}
}
