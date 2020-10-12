export function pointIsInsideBox(point, box) {
    return (
        point[0] > box[0] &&
        point[0] < box[2] &&
        point[1] > box[1] &&
        point[1] < box[3]
    );
}
