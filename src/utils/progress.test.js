import { describe, expect, it } from 'vitest'
import { defaultProgress, isStationUnlocked, sanitizeProgress, totalScore } from './progress'

describe('progress logic', () => {
  it('opens the next station only after completing the previous one', () => {
    expect(isStationUnlocked(1, defaultProgress)).toBe(true)
    expect(isStationUnlocked(2, defaultProgress)).toBe(false)
    expect(isStationUnlocked(2, { ...defaultProgress, completedStations: [1] })).toBe(true)
  })

  it('sanitizes malformed local data', () => {
    const value = sanitizeProgress({ explorerName: '', completedStations: [1, 99, '2'], quizBest: { 1: 999 } })
    expect(value.completedStations).toEqual([1, 2])
    expect(value.quizBest['1']).toBe(100)
    expect(value.explorerName).toBe(defaultProgress.explorerName)
  })

  it('calculates a capped, non-duplicating best score', () => {
    expect(totalScore({ ...defaultProgress, quizBest: { 1: 80, 2: 60 }, timelineBest: 90, matchBest: 100, scenarioCompleted: ['a', 'b'] })).toBe(370)
  })
})
