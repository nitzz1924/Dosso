import {
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from 'react';

export const useFlip = (liverRef) => {
    const origins = useRef({});
    let firstRun = useRef(true);
    const [y, setY] = useState(window.scrollY);

    const handleOnScroll = useCallback(
        (e) => {
            const window = e.currentTarget;
            if (window && window instanceof Window) {
                if (y !== window.scrollY) {
                    if (liverRef.current === null) return;
                    const list = liverRef.current;
                    const children = [].slice.call(list.children);

                    for (const child of children) {
                        const next = child.getBoundingClientRect();
                        origins.current = next;
                    }
                }
                setY(window.scrollY);
            }
        },
        [y, liverRef],
    );

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener('scroll', handleOnScroll);

        return () => {
            window.removeEventListener('scroll', handleOnScroll);
        };
    }, [handleOnScroll]);

    // React FLIP (First Last Invert Play)
    useLayoutEffect(() => {
        if (liverRef.current === null) return;
        const list = liverRef.current;
        const children = [].slice.call(list.children);

        for (const child of children) {
            const key = child.dataset.key;
            const next = child.getBoundingClientRect();
            if (!firstRun.current) {
                if (key in origins.current) {
                    const previous = origins.current[key];
                    const delta = getDelta(previous, next);
                    if (!isZero(delta)) {
                        invert(delta, child);

                        requestAnimationFrame(() => {
                            play(child);
                        });
                    }
                }
            }
            origins.current = next;
        }

        firstRun.current = false;
    }, [liverRef]);
};

const invert = (delta, elem) => {
    elem.style.transform = `translate(${delta.left}px, ${delta.top}px)`;
    elem.style.transition = `transform 0s`;
};

const play = (elem) => {
    elem.style.transform = ``;
    elem.style.transition = `transform 300ms ease`;
};

const getDelta = (start, target) => ({
    top: start.top - target.top,
    left: start.left - target.left,
});

const isZero = (delta) => delta.left === 0 && delta.top === 0;