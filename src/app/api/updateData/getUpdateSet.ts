/*
type UpdateSet = {
    baterry?: number
    running_time_seconds?: number
    point_id?: number
    destination?: string
}

type BikeDTO = {
    point_id: number
    has_next: boolean
    next: number
    destination: "SATC"
}

export function getUpdateSet(bike: BikeDTO) {
    let updateSet: UpdateSet = {
        baterry: newBaterry,
        running_time_seconds: newRunningTimeSeconds
    };

    if (bike.destination == 'SATC') {
        if (bike.has_next) {
            updateSet.point_id = bike.next
        } else {
            updateSet.point_id = bike.point_id - 1;
            updateSet.destination = "CT";
        }
    } else {
        if (bike.point_id == 0) {
            updateSet.point_id = bike.next;
            updateSet.destination = "SATC";
        } else {
            updateSet.point_id = bike.point_id - 1;
        }
    }
}
*/