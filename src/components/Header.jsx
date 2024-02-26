export default function Header() {
    return (
        <header className="border-b shadow py-4 px-8 flex justify-between items-center" >
            {/* Logo para version mobile */}
            <img src="/cropped-favicon-192x192.png" alt="blockmaker-mobile-logo" className="sm:hidden" width={47} />
            {/* Logo para version desktop */}
            <img src="/logo-blockmaker.png" alt="blockmaker-desktop-logo" className="hidden sm:block" width={300} />
            <button className="bg-gray-100 rounded-xl px-2 text-sm h-fit py-2">Connect Wallet</button>
        </header>
    )
}