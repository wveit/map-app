import { changeDateSliderUnit, changeMapDate } from "../actions/dates";

export function setupKeyBindings(store) {
    document.addEventListener("keyup", (event) => {
        switch (event.key) {
            case "ArrowUp":
                changeDateUnit(store, 1);
                break;
            case "ArrowDown":
                changeDateUnit(store, -1);
                break;
            case "ArrowLeft":
                changeDate(store, -1);
                break;
            case "ArrowRight":
                changeDate(store, 1);
                break;
            default:
                return;
        }
    });
}

function changeDateUnit(store, amount) {
    const unitCodes = { year: 1, month: 2, day: 3 };
    const newUnitArray = ["year", "year", "month", "day", "day"];
    const unit = store.getState().dates.dateSliderUnit;
    if (!unit) {
        console.log("keyBindings.changeDateUnit(): could not find unit");
        return;
    }
    const newUnit = newUnitArray[unitCodes[unit] + amount];
    if (newUnit !== unit) {
        store.dispatch(changeDateSliderUnit(newUnit));
    }
}

function changeDate(store, amount) {
    const unit = store.getState().dates.dateSliderUnit;
    const date = store.getState().dates.mapDate;
    if (!unit || !date) {
        console.log("keyBindings.changeDate(): could not find unit or date");
        return;
    }
    let newDate = new Date(date);
    if (unit === "year") newDate.setFullYear(date.getFullYear() + amount);
    else if (unit === "month") newDate.setMonth(date.getMonth() + amount);
    else if (unit === "day") newDate.setDate(date.getDate() + amount);
    store.dispatch(changeMapDate(newDate));
}
