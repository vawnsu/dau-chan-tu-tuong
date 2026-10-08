import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { defaultProgress, isStationUnlocked, sanitizeProgress, STORAGE_KEY, totalScore } from '../utils/progress'

const ProgressContext = createContext(null)

function loadProgress() {
  try {
    return sanitizeProgress(JSON.parse(localStorage.getItem(STORAGE_KEY)))
  } catch {
    return { ...defaultProgress }
  }
}

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(loadProgress)
  const [demoMode, setDemoMode] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
    } catch {
      // The experience remains usable when storage is unavailable.
    }
  }, [progress])

  const saveQuiz = useCallback((stationId, score) => {
    setProgress((current) => {
      const best = Math.max(current.quizBest[stationId] || 0, score)
      const passed = score >= 60
      return {
        ...current,
        quizBest: { ...current.quizBest, [stationId]: best },
        completedStations: passed
          ? [...new Set([...current.completedStations, Number(stationId)])]
          : current.completedStations,
      }
    })
  }, [])

  const setBest = useCallback((field, score) => {
    setProgress((current) => ({ ...current, [field]: Math.max(current[field], score) }))
  }, [])

  const completeScenario = useCallback((id) => {
    setProgress((current) => ({
      ...current,
      scenarioCompleted: [...new Set([...current.scenarioCompleted, id])],
    }))
  }, [])

  const updateName = useCallback((name) => {
    setProgress((current) => ({ ...current, explorerName: name.trim().slice(0, 40) || defaultProgress.explorerName }))
  }, [])

  const resetProgress = useCallback(() => setProgress({ ...defaultProgress }), [])

  const displayProgress = demoMode
    ? {
        explorerName: 'Dữ liệu minh họa',
        completedStations: [1, 2, 3, 4],
        quizBest: { 1: 100, 2: 80, 3: 80, 4: 60 },
        timelineBest: 80,
        matchBest: 100,
        scenarioCompleted: ['teamwork', 'integrity', 'social'],
      }
    : progress

  const value = useMemo(() => ({
    progress,
    displayProgress,
    demoMode,
    setDemoMode,
    saveQuiz,
    saveTimeline: (score) => setBest('timelineBest', score),
    saveMatch: (score) => setBest('matchBest', score),
    completeScenario,
    updateName,
    resetProgress,
    isUnlocked: (id) => isStationUnlocked(id, progress, demoMode),
    score: totalScore(displayProgress),
  }), [progress, displayProgress, demoMode, saveQuiz, setBest, completeScenario, updateName, resetProgress])

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress() {
  const value = useContext(ProgressContext)
  if (!value) throw new Error('useProgress must be used inside ProgressProvider')
  return value
}
