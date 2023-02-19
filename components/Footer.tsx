import { Twitter, Github, Instagram } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-main flex flex-col gap-6 text-white px-4 md:px-8 py-10">
            <div>
                <h3 className="text-lg md:text-2xl">Don't be a stranger!</h3>
                <p className="text-sm opacity-50">See me online at:</p>
            </div>
            <div className="flex gap-4">
                <a href="https://github.com/wllyvx" target="_blank" rel="noreferrer">
                    <Github className="opacity-50 hover:opacity-100 cursor-pointer"/>
                </a>
                <a href="https://twitter.com/willyframadhan" target="_blank" rel="noreferrer">
                    <Twitter className="opacity-50 hover:opacity-100 cursor-pointer"/>
                </a>
                <a href="https://instagram.com/willyframadhan" target="_blank" rel="noreferrer">
                    <Instagram className="opacity-50 hover:opacity-100 cursor-pointer"/>
                </a>
            </div>
            <div className="w-full flex justify-center">
                <p className="text-sm">Made with ❣️ by Willy</p>
            </div>
        </footer>
    )
}