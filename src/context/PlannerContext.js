import React, { createContext, useState, useContext } from "react";
import data from './Preload.json'

const PlannerContext = createContext();

export default function PlannerProvider({children}) {
    const [plan, setPlan] = useState(data);

    function compare(a, b) {
        if (a.date > b.date) return 1;
        if (b.date > a.date) return -1;
        return 0;
    }

    const addTask = task => {
        if(!task.id) {
            task.id = (new Date()).getTime();
        }
        if(typeof task.done === "undefined") {
            task.done = false;
        }
        let list = [...plan, task];
        list.sort(compare);
        setPlan(list);
    }

    const deleteTask = id => {
        let list = plan.filter(p => {
            return p.id !== id;
        });
        setPlan(list);
    }

    const updateTask = task => {
        const eIndex = plan.findIndex(e => e.id === task.id );
        let newArray = [...plan];
        newArray[eIndex] = task;
        newArray.sort(compare);
        setPlan(newArray);
    }

    return (
        <PlannerContext.Provider value={{plan, addTask, deleteTask, updateTask}}>
            {children}
        </PlannerContext.Provider>
    )
}

// creating my custom Hook
export function usePlanner() {
    const context = useContext(PlannerContext);
    if (!context) throw new Error("usePlanner must be used within a PlannerProvider");
    const {plan, addTask, deleteTask, updateTask} = context;
    return {plan, addTask, deleteTask, updateTask};
}