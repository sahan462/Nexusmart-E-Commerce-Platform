import React from 'react';

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <div
            className={`fixed top-0 left-0 h-full w-64 bg-orange-500 text-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
        >
            <div className="p-4">
                <div class="flex space-x-4 items-stretch  h-24">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                        />
                    </svg>
                    <span className="font-bold">NexusMart</span>
                </div>
                <div class="flex space-x-4 items-stretch  h-24">
                    <img
                        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADC0lEQVRYR+1YS47aQBDFfDbAAomPWHpOEHKC4BvMnGAyJ0g4wcAJAicIc4LMDfANhjkBXiI+ChIgIfHLK6sbNY3bbmwzk4VbQgLcVfXqVXV1uYyU5jJNs7TZbBq73a6RTqdLmmJn2w6HwyKbzQ7H47GtK28EbSRgq9XqB/b9xCcUMNnG8Xh0DMPoF4vFnuM4Cz8MvgDr9bq53W4HUGYGORLmOQHN5XIWGHVU8kqA1Wr1EQq6EmsL/PeSyWR8vVYZ2+/35Og3yeEFfrem02nfS84TYKVSecbmtiBAgDqz2YwAR15w/jsc/SU534b+jqz8DCDLtz/Y1OQbdcIQBrEifV5xiFpiyE8AFQI2EvkhKJHDACQZsomqQEzeqwhxAbKNbxLl5E0vrPFr5ACSUuoUNXynvLSQl0MXYLlcHt3qpF4DVNxLqTWfz+8MgLsHOMq7/24hgpZRq9XaqPBEcYoVUEcDaYOnA5wbQs6v7Iihs4N0Q5fJo4kbq3MGkP6YTCbtICVwagSnTNoHL+9UhZbl9og7TyHT0H0iLAGYMKjKFykH6bL3TH4w2ESNG5AeOkyoa18/JAdRmvow+MgMd2G45WVY3IfT2cchefoQgCIzzODFRS83HFTTdBpVseyFPsUECgCouJ/doWjDXtBSlcDuFzw71T9d9khvbACp81mv1wMYp6KtXAD7XigUmroNR2wAOSJRoYRygRD18vl8VxdcrAyKYFir1kCIXTbpygRrr9cA83I4Ug4Gncawz2MPcVggPjU2+l0cNyhRX8JgVHYTBhMGdVr+qCz5yfvmIO7NHlonmmJ92kKL1gUOmqal3JuEzUl+M0Q25iPWp6GDYXRJ1OA2GcAHg81j/nJQun3bLZwQ32FIP70xupMFETW15rjorTAXfRTQRNRyuXzj78S8h/SczdxqoqVygDp0NLpd2KVG1138ffs03QKLdDho0iQuG0LvYQeWQYx6dd9MpsVnkWfzQQXIIDtxPr8YlF5MWFnz2eZvbXFaD9BlI6xP8hhFOaOWu+RbAQ3qvv8B0mG0deDjBcgAAAAASUVORK5CYII='
                        alt="Sidebar Logo"
                        className={`w-5 h-5 bg-neutral-50 rounded-full mb-2 ${isOpen ? 'block' : 'hidden'
                            }`}
                    />
                    {isOpen && (
                        <div>
                            <p>product</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
