import dayjs from "dayjs";

export function timeElapsed(inputTime) {
    const givenTime = new Date(inputTime);
    const currentTime = new Date();
    const timeDifference = currentTime - givenTime;

    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;

    if (timeDifference >= day) {
        return dayjs(inputTime).format("DD/MM/YYYY");
    } else if (timeDifference >= hour) {
        const hours = Math.floor(timeDifference / hour);
        return `${hours} min ago`;
    } else {
        const minutes = Math.floor(timeDifference / minute);
        return `${minutes} h ago`;
    }
}
