export default function Footer() {
    return (
        <footer className="border-t py-4 px-3 flex justify-center bg-white shadow-xs" >
            <p>Derecho de autor &copy; {new Date().getFullYear()} BlockMaker Academy</p>
        </footer>
    )
}