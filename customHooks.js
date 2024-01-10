const ReactX = (() => {
    // let state; // can use only one state so make it array
    // let state = []; // and adjust things
    let hooks = [];// as we need for useEffect too so name it hooks
    let index = 0; // to track
    const useState = (initialValue) => {
        // let state = initialValue;
        const localIndex = index;
        index++;
        if (hooks[localIndex] === undefined) {
            hooks[localIndex] = initialValue;
        }
        const setterFunction = (newValue) => {
            hooks[localIndex] = newValue;
        };
        return [hooks[localIndex], setterFunction];
    };

    const resetIndex = () => {
        index = 0;
    };

    const useEffect = (callback, dependencyArray) => {
        let hasChanged = true;

        let oldDependencies = hooks[index];

        if (oldDependencies) {
            hasChanged = false;
            dependencyArray.forEach((dependency, index) => {
                const oldDependency = oldDependencies[index];
                const areTheSame = Object.is(oldDependency, dependency);
                if (!areTheSame) {
                    hasChanged = true;
                }
            })
        }

        if (hasChanged) {
            callback();
        }
        hooks[index] = dependencyArray;
        index++;
    }

    const useMemo = (callback, dependencyArray) => {
        const localIndex = index;
        index++;

        let hasChanged = true;
        const oldDependencies = hooks[localIndex];

        if (oldDependencies) {
            hasChanged = dependencyArray.some((dependency, index) => {
                return !Object.is(oldDependencies[index], dependency);
            });
        }

        if (hasChanged) {
            hooks[localIndex] = callback();
        }

        return hooks[localIndex];
    };

    return {
        useState,
        resetIndex,
        useEffect,
        useMemo
    };
})();

const { useState, resetIndex, useEffect, useMemo } = ReactX;
const Component = () => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        console.log("hello");
    }, [count])

    console.log(count);

    const memoizedValue = useMemo(() => {
        console.log("Memoized value calculation");
        return count * 2;
    }, []);

    console.log("Memoized Value:", memoizedValue);

    if (count != 2) {
        // this cause re-render so call component again
        setCount(2);
    }
};

Component();
resetIndex();
Component(); // but it returns 1  as each time its a different function so define hook state outside
