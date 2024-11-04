import React, {useState, useEffect} from 'react';
import {throttle} from 'lodash';

const Mobile = () => <div>Mobile</div>
const Tablet = () => <div>Tablet</div>
const Desktop = () => <div>Desktop</div>

function getBreakpoint(width) {
    if (width < 770) {
        return 'mobile';
    }

    if (width < 1200) {
        return 'tablet';
    }

    return 'desktop';
}

function useBreakpoint() {

}

const SomeComponent = () => {
    const breakpoint = useBreakpoint();

    return <div>
        {breakpoint === 'modile' && <div>1</div>}
    </div>
}

export const Breakpoints = () => {
    const [breakpoint, setBreakpoint] = useState(getBreakpoint(window.innerWidth));

    useEffect(() => {
        const handler = throttle(function () {
            const width = window.innerWidth;

            const point = getBreakpoint(width);

            setBreakpoint(point);
        }, 300);

        window.addEventListener('resize', handler);

        return () => {
            window.removeEventListener('resize', handler);
        }
    }, []);

    return (
        <>
            {breakpoint === 'mobile' && <Mobile />}
            {breakpoint === 'tablet' && <Tablet />}
            {breakpoint === 'desktop' && <Desktop />}
        </>
    );
}