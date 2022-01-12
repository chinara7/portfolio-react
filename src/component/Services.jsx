import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <div className='services'>
            <h1 className='py-5'>Our services</h1>
            <div className='container'>
                <div className='row'>

                    {/** GOOGLE SEO SERVICES SECTION */}

                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='box'>
                            <div className='circle'>
                                <FontAwesomeIcon icon={faGoogle} className='icon'/>
                            </div>
                            <h2>SEO</h2>
                            <p> Lorem velit ex veniam fugiat  irure cillum adipisicing eu veniam ea minim. Voluptate voluptate sit in fugiat nisi sint do consequat. Velit cillum officia commodo occaecat non laboris dolore aute labore.</p>
                        </div>
                    </div>

                    {/* WEB DEVELOPMENT SERVICES SECTION */}

                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='box'>
                            <div className='circle'>
                                <FontAwesomeIcon icon={faFileCode} className='icon'/>
                            </div>
                            <h2>Web development</h2>
                            <p>Ullamco  Excepteur et ce proident irure cillum adipisicing eu veniam ea minim. Voluptate voluptate sit in fugiat nisi sint do consequat. Velit cillum officia commodo occaecat non laboris dolore aute labore.</p>
                        </div>
                    </div>

                    {/* FACEBOOK MARKETING SERVICES SECTION */}

                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='box'>
                            <div className='circle'>
                                <FontAwesomeIcon icon={faFacebookF} className='icon'/>
                            </div>
                            <h2>SMM</h2>
                            <p>Ullamco  Excepteur et cillum officia ea ea amet. in adipisicing eu veniam ea minim. Voluptate voluptate sit in fugiat nisi sint do consequat. Velit cillum officia commodo occaecat non laboris dolore aute labore.</p>
                        </div>
                    </div>

                    {/* IT SERVICES SECTION */}

                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='box'>
                            <div className='circle'>
                                <FontAwesomeIcon icon={faDesktop} className='icon'/>
                            </div>
                            <h2>IT, Helpdesk</h2>
                            <p>Ullamco  Excepteur et cillum officia ea ea amet.  Lorem siillum adipisicing eu veniam ea minim. Voluptate voluptate sit in fugiat nisi sint do consequat. Velit cillum officia commodo occaecat non laboris dolore aute labore.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Services

