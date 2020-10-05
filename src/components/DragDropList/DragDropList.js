import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export function DragDropList(props) {
    function onDragEnd(result) {
        props.onDragEnd && props.onDragEnd(result);
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="my-list">
                {(provided, snapshot) => (
                    <div
                        className={props.className}
                        id={props.id}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        // isDraggingOver={snapshot.isDraggingOver}
                    >
                        {props.children}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export function DragDropItem(props) {
    return (
        <Draggable draggableId={props.draggableId} index={props.index}>
            {(provided, snapshot) => (
                <div
                    className={props.className}
                    id={props.id}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    // isDragging={snapshot.isDragging}
                    {...provided.dragHandleProps}
                >
                    {props.children}
                </div>
            )}
        </Draggable>
    );
}
