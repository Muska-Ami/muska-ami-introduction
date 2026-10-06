'use client'

import { Button } from '@heroui/react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { MoonIcon, SunIcon, SystemIcon } from '@/components/icons'

const OPTIONS = [
  { value: 'light', label: '亮色', Icon: SunIcon },
  { value: 'dark', label: '暗色', Icon: MoonIcon },
  { value: 'system', label: '跟随系统', Icon: SystemIcon }
] as const

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex items-center gap-1 rounded-full border border-border p-1">
      {OPTIONS.map(({ value, label, Icon }) => (
        <Button
          key={value}
          aria-label={label}
          className="min-w-0 rounded-full"
          isIconOnly
          size="sm"
          variant={mounted && theme === value ? 'primary' : 'ghost'}
          onPress={() => setTheme(value)}
        >
          <Icon className="size-4" />
        </Button>
      ))}
    </div>
  )
}
