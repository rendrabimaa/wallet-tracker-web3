'use client'

export default function DashboardLayout({ children }: { children: React.ReactNode}) {
    return (
        <div className="p-4 max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold mb-6">Wallet Overview</h2>
            {children}
        </div>
    )
}