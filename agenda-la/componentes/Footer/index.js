import DevPlenoLogo from "./DevPlenoLog"
import FsmLogo from "./FsmLogo"

const Footer = () => {
    return(<footer className='mt-6 text-center'>
    
    <a href='https://go.devpleno.com/fsm' target='_blank'>
        <FsmLogo className='inline-block mx-2'/>
    </a>
    <a href='https://go.devpleno.com' target='_blank'>
        <DevPlenoLogo className='inline-block mx-2'/>
    </a>

    <p className='font-bold'>Agenda Lá</p>
    <p>Projeto construido durante o Fullstack Academy</p>
    <p>do <a href='https://devpleno.com' />DevPleno</p>
</footer>)
}

export default Footer