import React, { useEffect, useRef } from 'react';
import { CountUp } from 'countup.js';

function CountupCards() {
    const count1Ref = useRef(null);
    const count2Ref = useRef(null);
    const count3Ref = useRef(null);
    const countUp3 = useRef(null);
    let currentCount3 = 1395;

    useEffect(() => {
        const options = { duration: 1 };

        // Starting the countUp for count1 and count2
        new CountUp(count1Ref.current, 6, { ...options, prefix: '0' }).start();
        new CountUp(count2Ref.current, 238, options).start();

        // Initializing countUp3 for count3Ref
        countUp3.current = new CountUp(count3Ref.current, currentCount3, options);
        countUp3.current.start();

        // Interval to increment count3 every 1 second by 1
        const interval = setInterval(() => {
            currentCount3 += 1; // Increase by 1 every second
            countUp3.current.update(currentCount3);
        }, 1000); // Update every 1 second

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="container border-bottom mb-8 mb-lg-10">
            <div className="row pb-6 pb-lg-8 g-3 g-lg-8 px-3">
                {/* First Counter */}
                <div className="col-12 col-md-4">
                    <h2 ref={count1Ref} className="fs-3 fw-bold lh-sm mb-2 text-center">0</h2>
                    <h6 className="fs-8 fw-normal lh-lg mb-0 opacity-70 text-center">
                        Offices are available in different countries
                    </h6>
                </div>

                {/* Second Counter */}
                <div className="col-12 col-md-4">
                    <h2 ref={count2Ref} className="fs-3 fw-bold lh-sm mb-2 text-center">0</h2>
                    <h6 className="fs-8 fw-normal lh-lg mb-0 opacity-70 text-center">
                        Seats are available right now with support
                    </h6>
                </div>

                {/* Third Counter with Interval Updates (1 increment per second) */}
                <div className="col-12 col-md-4">
                    <h2 ref={count3Ref} className="fs-3 fw-bold lh-sm mb-2 text-center">0</h2>
                    <h5 className="fs-8 fw-normal lh-lg mb-0 opacity-70 text-center">
                        People are using our co-work spaces right now
                    </h5>
                </div>
            </div>
        </section>
    );
}

export default CountupCards;
