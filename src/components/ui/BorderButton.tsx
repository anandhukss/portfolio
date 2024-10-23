import { cn } from '@/lib/utils'
import React from 'react'

const BorderButton = ({ children, className }: { children: React.ReactNode, className: string }) => {
    return (
        <button
            className={cn("inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-accent transition-colors"
                , className)}

        >

            {children}
        </button>)
}

export default BorderButton