export const APP_KEY = 'WONGAMES'

export function getStorageItem<T>(key: string) {
  // In Next serverSide/Static dont has window
  if (typeof window === 'undefined') return

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`)
  return JSON.parse(data!) as T
}

export function setStorageItem(key: string, value: unknown) {
  // In Next serverSide/Static dont has window
  if (typeof window === 'undefined') return

  const data = JSON.stringify(value)
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data)
}
