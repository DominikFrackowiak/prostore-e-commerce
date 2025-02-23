'use client'

type Theme = 'light' | 'dark' | 'system'

interface ThemeIcons {
	system: React.ReactElement
	dark: React.ReactElement
	light: React.ReactElement
}

import { useState, useEffect} from 'react'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuContent,
 DropdownMenuCheckboxItem
} from '@/components/ui/dropdown-menu'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon, SunMoon } from 'lucide-react'

export default function ModeToggle() {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	const themeIcons: ThemeIcons = {
		system: <SunMoon />,
		dark: <MoonIcon />,
		light: <SunIcon />,
	}

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					className='focus-visible:ring-0 focus-visible:ring-offset-0'
				>
					{themeIcons[theme as Theme]}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Appearance</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuCheckboxItem
					checked={theme === 'system'}
					onClick={() => setTheme('system')}
				>
					System
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem
					checked={theme === 'dark'}
					onClick={() => setTheme('dark')}
				>
					Dark
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem
					checked={theme === 'light'}
					onClick={() => setTheme('light')}
				>
					Light
				</DropdownMenuCheckboxItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
