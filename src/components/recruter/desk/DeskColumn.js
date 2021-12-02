import { Droppable, Draggable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import DeskCard from "./DeskCard";

const DeskColumn = ({ droppableId, items, status, statusName, bottom }) => {
  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : bottom ? "pink" : "white",
    padding: grid,
    width: bottom ? 280 : 200,
    margin: "2px",
    height: bottom ? "200px" : "700px",
    opacity: bottom ? (isDraggingOver ? "1" : ".7") : "1",
  });

  const getItemStyle = (isDragging, draggableStyle) => {
    // some basic styles to make the items look a bit nicer
    if (isDragging) {
      draggableStyle.transform += " rotate(5deg) scale(1.1)";
    }
    return {
      userSelect: "none",
      padding: grid * 2,
      margin: `0 0 ${grid}px 0`,
      minHeight: "90px",
      overflow: "hidden",
      //textAlign:"center",
      boxShadow: isDragging ? "8px 8px 18px grey" : "2px 2px 6px grey",
      // change background colour if dragging
      background: isDragging ? "lightgreen" : "white",
      border: "1px solid #dfd6d6",

      // styles we need to apply on draggables
      ...draggableStyle,
    };
  };

  const grid = 4;

  return (
    <Droppable droppableId={droppableId}>
      {(provided, snapshot) => (
        <div
          className="card droppable"
          id={droppableId}
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
        >
          <div className="card-header mb-3" style={{ minHeight: "56px" }}>
            {statusName}
          </div>
          {bottom
            ? ""
            : items.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id.toString()}
                  index={item.id}
                  phone={item.phone}
                >
                  {(provided, snapshot) => (
                    <div
                      className="card"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging && !snapshot.isDropAnimating,
                        provided.draggableProps.style
                      )}
                    >
                      <DeskCard
                        id={item.id}
                        name={item.name}
                        phone={item.phone}
                        sobes={item.sobes}
                        project={item.project}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DeskColumn;
