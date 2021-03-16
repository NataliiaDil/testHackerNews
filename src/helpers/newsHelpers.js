export const sortStoriesByScore = (stories) => {
  return stories.sort(
    ({ story: { score: score1 } }, { story: { score: score2 } }) => {
      return score1 - score2
    }
  )
}
