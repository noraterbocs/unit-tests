export const hashtags = (text) => {
  const wordsArr= text.split(' ').filter(word=>word.includes('#'))
  return wordsArr
}
