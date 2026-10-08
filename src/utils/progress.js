export const STORAGE_KEY = 'dctt-progress-v1'

export const defaultProgress = {
  explorerName: 'Nhà khám phá lịch sử',
  completedStations: [],
  quizBest: {},
  timelineBest: 0,
  matchBest: 0,
  scenarioCompleted: [],
}

export function sanitizeProgress(value) {
  if (!value || typeof value !== 'object') return { ...defaultProgress }
  const ids = [1, 2, 3, 4, 5]
  const completedStations = Array.isArray(value.completedStations)
    ? [...new Set(value.completedStations.map(Number).filter((id) => ids.includes(id)))]
    : []
  const quizBest = Object.fromEntries(
    Object.entries(value.quizBest || {})
      .map(([key, score]) => [key, Math.max(0, Math.min(100, Number(score) || 0))])
      .filter(([key]) => ids.includes(Number(key)))
  )
  return {
    explorerName:
      typeof value.explorerName === 'string' && value.explorerName.trim()
        ? value.explorerName.trim().slice(0, 40)
        : defaultProgress.explorerName,
    completedStations,
    quizBest,
    timelineBest: Math.max(0, Math.min(100, Number(value.timelineBest) || 0)),
    matchBest: Math.max(0, Math.min(100, Number(value.matchBest) || 0)),
    scenarioCompleted: Array.isArray(value.scenarioCompleted)
      ? [...new Set(value.scenarioCompleted.filter((id) => typeof id === 'string'))]
      : [],
  }
}

export function isStationUnlocked(id, progress, demoMode = false) {
  return demoMode || id === 1 || progress.completedStations.includes(id - 1)
}

export function totalScore(progress) {
  const quiz = Object.values(progress.quizBest).reduce((sum, score) => sum + score, 0)
  const scenarios = Math.min(progress.scenarioCompleted.length, 5) * 20
  return quiz + progress.timelineBest + progress.matchBest + scenarios
}

export function shuffle(items) {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}
