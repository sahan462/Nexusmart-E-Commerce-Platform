import React from 'react';
import CollapsibleList from './CollapsibleList';

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <div
            className={`fixed top-0 left-0 h-full w-64  text-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
        >
            <div className="mt-20 p-4">
                    <div class="flex h-24">
                        <img
                            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADC0lEQVRYR+1YS47aQBDFfDbAAomPWHpOEHKC4BvMnGAyJ0g4wcAJAicIc4LMDfANhjkBXiI+ChIgIfHLK6sbNY3bbmwzk4VbQgLcVfXqVXV1uYyU5jJNs7TZbBq73a6RTqdLmmJn2w6HwyKbzQ7H47GtK28EbSRgq9XqB/b9xCcUMNnG8Xh0DMPoF4vFnuM4Cz8MvgDr9bq53W4HUGYGORLmOQHN5XIWGHVU8kqA1Wr1EQq6EmsL/PeSyWR8vVYZ2+/35Og3yeEFfrem02nfS84TYKVSecbmtiBAgDqz2YwAR15w/jsc/SU534b+jqz8DCDLtz/Y1OQbdcIQBrEifV5xiFpiyE8AFQI2EvkhKJHDACQZsomqQEzeqwhxAbKNbxLl5E0vrPFr5ACSUuoUNXynvLSQl0MXYLlcHt3qpF4DVNxLqTWfz+8MgLsHOMq7/24hgpZRq9XaqPBEcYoVUEcDaYOnA5wbQs6v7Iihs4N0Q5fJo4kbq3MGkP6YTCbtICVwagSnTNoHL+9UhZbl9og7TyHT0H0iLAGYMKjKFykH6bL3TH4w2ESNG5AeOkyoa18/JAdRmvow+MgMd2G45WVY3IfT2cchefoQgCIzzODFRS83HFTTdBpVseyFPsUECgCouJ/doWjDXtBSlcDuFzw71T9d9khvbACp81mv1wMYp6KtXAD7XigUmroNR2wAOSJRoYRygRD18vl8VxdcrAyKYFir1kCIXTbpygRrr9cA83I4Ug4Gncawz2MPcVggPjU2+l0cNyhRX8JgVHYTBhMGdVr+qCz5yfvmIO7NHlonmmJ92kKL1gUOmqal3JuEzUl+M0Q25iPWp6GDYXRJ1OA2GcAHg81j/nJQun3bLZwQ32FIP70xupMFETW15rjorTAXfRTQRNRyuXzj78S8h/SczdxqoqVygDp0NLpd2KVG1138ffs03QKLdDho0iQuG0LvYQeWQYx6dd9MpsVnkWfzQQXIIDtxPr8YlF5MWFnz2eZvbXFaD9BlI6xP8hhFOaOWu+RbAQ3qvv8B0mG0deDjBcgAAAAASUVORK5CYII='
                            alt="product logo"
                            className={`w-5 h-5 mt-1 rounded-full ${isOpen ? 'block' : 'hidden'
                                }`}
                        />
                        {isOpen && (
                            <div>
                                <div className="flex ml-3 items-stretch  h-24">
                                    <CollapsibleList title={'Products'} items={[['Manage Products', '/productpage'], ['Add New Product', '/addproduct']]} />
                                </div>
                            </div>
                        )}
                    </div>
                    <div class="flex h-24">
                        <div className='flex '>
                            <img
                                src='https://gw.alicdn.com/imgextra/i4/O1CN014nJeXe1sDJ1eTP50A_!!6000000005732-2-tps-34-40.png'
                                alt="reviews Logo"
                                className={`w-5 h-5 mt-1 rounded-full ${isOpen ? 'block' : 'hidden'
                                    }`}
                            />
                        </div>
                        {isOpen && (
                            <div className=' ml-2'>
                                <div className="flex items-stretch  h-24 ">
                                    <CollapsibleList title={'Orders & Reviews'} items={[['Manage Orders', '/manageorder'], ['Manage Reviews', '/reviewlist']]} />
                                </div>
                            </div>
                        )}
                    </div>
            </div>
        </div>
    );
};

export default Sidebar;
