import React from 'react'
import './developersetup.css'
import S1 from '../../assets/s1.png'
import S2 from '../../assets/s2.png'
import S3 from '../../assets/s3.png'
import S4 from '../../assets/s4.png'
import S5 from '../../assets/s5.png'
import S6 from '../../assets/s6.png'
import S7 from '../../assets/s7.png'
import S8 from '../../assets/s8.png'

const Developersetup = () => {
  return (
    <div>
        <section id='dev'>
        <h1>Developer Setup</h1>
        <div className='setups'>
            <div className='setup'>
                <h3 className='heading'>VsCode Setup</h3>
                <div className='extensions'>
                    <div className='image'>
                        <img src={S1} alt='Dev Containers'></img>
                        <div className='content'>
                            <p>Dev Containers</p>
                        </div>
                    </div>
                    <div className='image'>
                    <img src={S2} alt='Docker'></img>
                        <div className='content'>
                            <p>Docker</p>
                        </div>
                    </div>
                    <div className='image'>
                    <img src={S3} alt='ES7 React-Native snippets'></img>
                        <div className='content'>
                            <p>ES7 React-Native Snippets</p>
                        </div>
                    </div>
                    <div className='image'>
                    <img src={S4} alt='GitHub Actions'></img>
                        <div className='content'>
                            <p>GitHub Actions</p>
                        </div>
                    </div>
                    <div className='image'>
                    <img src={S5} alt='Live Server'></img>
                        <div className='content'>
                            <p>Live Server</p>
                        </div>
                    </div>
                    <div className='image'>
                    <img src={S6} alt='PHP Intelephense'></img>
                        <div className='content'>
                            <p>PHP Intelephense</p>
                        </div>
                    </div>
                    <div className='image'>
                    <img src={S7} alt='Rainbow CSV'></img>
                        <div className='content'>
                            <p>Rainbow CSV</p>
                        </div>
                    </div>
                    <div className='image'>
                        <img src={S8} alt='Simple React Snippets'></img>
                        <div className='content'>
                            <p>Simple React Snippets</p>
                        </div>
                    </div>
                </div>     
            </div>
            <div className='setup'>
                <h3>Terminal Setup</h3>
                <div className='terminal'>
                    <span>GitBash</span>
                    <br></br>
                    <span>Powershell for admin authorization</span>

                </div>
            </div>
            <div className='setup'>
                <h3>Preferred Editor Font</h3>
                <span className='pref_editor_font'>Consolas, 'Courier New', monospace</span>
            </div>
        </div> 
        </section>
    </div>
  )
}

export default Developersetup
