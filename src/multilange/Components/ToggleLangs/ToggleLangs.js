import React, {useContext} from 'react'
import FrenchFlag from '../../../multilange/assets/france.svg'
import SpanishFlag from '../../assets/spain.svg'
import EnglishFlag from '../../assets/united-kingdom.svg'
import './ToggleLangs.css'
import {Context} from '../../context/langContext'

export default function ToggleLangs() {

    const {setLang} = useContext(Context)
 
    return (
        <div className='container-langs'>
            
            <img onClick={() => setLang('FR')} src={FrenchFlag} className="img-fluid" />
            <img onClick={() => setLang('EN')} src={EnglishFlag} className="img-fluid" />
            <img onClick={() => setLang('ES')} src={SpanishFlag} className="img-fluid" />

        </div>
    )
}
