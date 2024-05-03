import React from 'react';
import StdHeader from '../../components/student/header/StdHeader';

function StdMarks ()
{
    return (
        <div className='std-grpReg-container'>
            <StdHeader />

            <div className='std-grpReg-container-inner'>
                <div className='std-grpReg-form-container'>
                    <div className='std-grpReg-form'>
                        <div className='std-grpReg-form-inner'>
                            <div className='std-grpReg-form-inner-section1'>
                                <div className='main-heading'>
                                    <span className='heading-blue'>Semester</span> <span className='heading-orange'>01</span>
                                </div>

                                {/* Inline styles applied */ }
                                <div className='marks d-flex'>
                                    <h2 style={ { display: 'inline-block', marginRight: '10px' } }>Proposal & progress 1 presentation :</h2>
                                    <input style={ { display: 'inline-block', borderRadius: '10px' } } />
                                </div>

                                <div className='marks d-flex'>
                                    <h2 style={ { display: 'inline-block', marginRight: '10px' } }>Status Report 1 :</h2>
                                    <input style={ { display: 'inline-block', borderRadius: '10px' } } />
                                </div>

                                <div className='marks d-flex'>
                                    <h2 style={ { display: 'inline-block', marginRight: '10px' } }>Proposal :</h2>
                                    <input style={ { display: 'inline-block', borderRadius: '10px' } } />
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className='std-grpReg-form'>
                        <div className='std-grpReg-form-inner'>
                            <div className='std-grpReg-form-inner-section1'>
                                <div className='main-heading'>
                                    <span className='heading-blue'>Semester</span> <span className='heading-orange'>02</span>
                                </div>

                                {/* Inline styles applied */ }
                                <div className='marks d-flex'>
                                    <h2 style={ { display: 'inline-block', marginRight: '10px' } }>Proposal & progress 2 presentation :</h2>
                                    <input style={ { display: 'inline-block', borderRadius: '10px' } } />
                                </div>

                                <div className='marks d-flex'>
                                    <h2 style={ { display: 'inline-block', marginRight: '10px' } }>Final presentation :</h2>
                                    <input style={ { display: 'inline-block', borderRadius: '10px' } } />
                                </div>

                                <div className='marks d-flex'>
                                    <h2 style={ { display: 'inline-block', marginRight: '10px' } }>Status report 2 :</h2>
                                    <input style={ { display: 'inline-block', borderRadius: '10px' } } />
                                </div>

                                <div className='marks d-flex'>
                                    <h2 style={ { display: 'inline-block', marginRight: '10px' } }>Log Book :</h2>
                                    <input style={ { display: 'inline-block', borderRadius: '10px' } } />
                                </div>

                                <div className='marks d-flex'>
                                    <h2 style={ { display: 'inline-block', marginRight: '10px' } }>Website :</h2>
                                    <input style={ { display: 'inline-block', borderRadius: '10px' } } />
                                </div>

                                <div className='marks d-flex'>
                                    <h2 style={ { display: 'inline-block', marginRight: '10px' } }>Finale thesis :</h2>
                                    <input style={ { display: 'inline-block', borderRadius: '10px' } } />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default StdMarks;