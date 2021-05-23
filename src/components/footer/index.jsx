import Link from 'next/link'
import { Title } from 'src/components/title'
import { Profile } from 'src/components/profile'
import { SocialMedia } from 'src/components/socialmedia'
import { BtnComponent } from 'src/components/btn'

export const Footer = () => {
    return (
        <footer className="mt-4 text-center font-plus">
            <small>
        Copyright &copy; <span className="uppercase">wise life log</span> All
        Rights Reserved.
            </small>
        </footer>
    )
}
